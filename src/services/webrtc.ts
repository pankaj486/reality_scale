declare var $ : any;

export class Webrtc {

	private static instance : Webrtc | null = null;

	ipAddress = localStorage.getItem('ipAddress');

	peerConnection: any;
	imageChannel: any;
	dataChannel: any;
	bufferedMessage: any;

	playerId: Number = -1;

	signalAddress : string = "";
	instanceId : string = "";

	imageBuffer: string = "";
	imageBufferSize: number = 0;
    
	connectedEvent : any = null;
	receivedEvent : any = null;

	constructor(signalAddress: string, instanceId : string) {
        this.signalAddress = signalAddress;
	    this.instanceId = instanceId;
        this.init();
	}

	static connect(signalAddress: string, instanceId : string, connectedEvent : any, receivedEvent : any) {

		if(signalAddress.length === 0) {
			signalAddress = window.location.protocol + "//" + window.location.hostname + ":3003";
		}
		if(Webrtc.instance === null) {
			var inst = new Webrtc(signalAddress, instanceId);

			inst.connectedEvent = connectedEvent;
			inst.receivedEvent = receivedEvent;

			Webrtc.instance = inst;
		}
	}
	
	static sendJSON(data : any) {

		if(Webrtc.instance === null) return;
	
		Webrtc.instance._sendJSON(data);
	}


	static sendData(data : string) {

		if(Webrtc.instance === null) return;
		
		Webrtc.instance._sendData(data);
	}
	private init() {

		if (this.peerConnection != null) {
			return;
		}
		var self = this;
		const configuration = { iceServers: [] };
		this.peerConnection = new RTCPeerConnection(configuration);

		this.peerConnection.onicecandidate = function (event : any) {
		};

		this.peerConnection.ondatachannel = function (event : any) {
			self.onDataChannel(event);
		}

		this.peerConnection.ontrack = this.onTrack;
		this.peerConnection.onerror = function (event : any) {

			console.log('WebRTC Error', event);

			self.onStreamError("WebRTC error");
		};
		this.peerConnection.onclose = function (event : any) {};
		this.peerConnection.onremovestream = function (event : any) {};

		this.peerConnection.onconnectionstatechange = () => {

			console.log('onconnectionstatechange', this.peerConnection.connectionState);

			if (this.peerConnection.connectionState === 'disconnected') {

				console.log("Disconnected!");

				self.onDisconnected();
			}
		};

		this.sendStartStream();
	}


	private _sendJSON(data : any) {
		//console.log(JSON.stringify(data))
		this._sendData(JSON.stringify(data));
	}


	private _sendData(data : string) {

		if (this.dataChannel != null) {
			this.dataChannel.send(data);
		} else {
			this.bufferedMessage = data;
		}
	}
	/*
	* Called when the main data channel is opened, and data can be send to the server
	*/
	private onDataChannelOpened() {

		if(this.connectedEvent) {
			this.connectedEvent();
		}
	}
	/*
	* Called when the server has send an image 
	*
	* @param imageData  base64 encoded png image
	*/
	private onImageReceived(imageData: string) {
		//This is a way to display and base64 encoded image
		//$("#imageTest")[0].src = "data:image/png;base64, " + imageData;
	}
	/*
	* Called when the server closing the connection
	*/
	private onDisconnected() {
	//	window.location.reload();
	}

	private onStreamError(errorMesssage: string) {
		console.error(errorMesssage);
	}
	private onDataChannel(event : any) {
		var self = this;
		var label = event.channel.label;
		
		console.log("Datachannel: " + label);
		console.log(event.channel)

		if (label === "ImageChannel") {
			this.imageChannel = event.channel;
			this.imageChannel.onopen = function () {
				self.imageChannel.onmessage = function (event : any) {

					var message: string = event.data;

					//Header message format: ":imageSize:"
					if (message.startsWith(':')) {


						self.imageBuffer = "";
						self.imageBufferSize = parseInt(message.substring(1, message.length - 1));

						console.log("Start receiving image", self.imageBufferSize)

					} else {
						self.imageBuffer += message;

						if (self.imageBuffer.length === self.imageBufferSize) {

							console.log("Image received");

							var imageData: string = self.imageBuffer;
							self.imageBuffer = "";
							self.onImageReceived(imageData);
						}
					}
				}
			}
		} else {
			this.dataChannel = event.channel;

			this.dataChannel.onopen = function () {
				console.log("datachannel open ");
				if (self.bufferedMessage != null) {
					console.log(self.bufferedMessage)
					self.dataChannel.send(self.bufferedMessage);
				}
				// printing compass data 
				self.dataChannel.onmessage = function (event : any) {
					var message: any = event.data;
                    console.log(message);

					if(self.receivedEvent) {
						self.receivedEvent(message);
					}
				};

				self.onDataChannelOpened();

			};

		}

		event.channel.onclose = function () {
			//console.log("datachannel close");
		};
	}


	private async sendStartStream() {
		var self = this;

		console.log("Send start");
		console.log(self.signalAddress);

		if (self.signalAddress) {
			await $.ajax({
				url: self.signalAddress + '/startStream',
				method: 'POST',
				
                //headers: { 'X-Forwarded-For': localStorage.getItem('ipAddress') },
				// beforeSend: function(request) {
				//    request.setRequestHeader('X-Forwarded-For', localStorage.getItem('ipAddress'));
				//  },
				//timeout: 6000000,
				//crossDomain: true,
				//dataType: 'jsonp',

				data: {
					gameId: this.instanceId
				},
				success: function (response : any) {
					//console.log("Receive Sdp ");
					var jsonData = JSON.parse(response);
                    
					self.playerId = jsonData.id;
					self.receiveSdp(jsonData);


				},
				error: function (err : any) {

					self.onStreamError("Failed starting stream, " + JSON.stringify(err));
				}
			});

		}

	};

	private receiveSdp(offer : any) {

		var sdpData = this.replaceAll(offer.sdp);

		console.log("Offer: " + sdpData);
		var self = this;

		var desc = {
			"type": <RTCSdpType>'offer',
			"sdp": sdpData
		};
		this.peerConnection.setRemoteDescription(new RTCSessionDescription(desc)).then(function () {

			offer.candidates.forEach(function (c : string) {
				var candidateData = c.split(";");
				
				var candidate : any= {

					sdpMid: candidateData[0],
					sdpMLineIndex: candidateData[1],
					candidate: candidateData[2]
				};

				self.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
			});

			self.createAnswer();
		}).catch(function (e : any) {
			console.log("setRemoteDescription error", e);
		});
	};

	private createAnswer() {
		var self = this;
		//console.log("create Answer " , self.peerConnection);			

		this.peerConnection.createAnswer().then(function (desc : any) {

			//console.log("answer ");

			if (!desc.sdp.includes("H264")) {
				self.onStreamError("Codec Error!");
				self.peerConnection.close();
				return;
			}

			var sdpArray = self.parseSDPToArray(desc.sdp);


			//var minBitrate = 5000;
			var minBitrate = 5000;
			//var maxBitrate = 12500;
			var maxBitrate = 12500;
			//var startBitrate = 12500;
			var startBitrate = 12500;
			var maxQP = 0;

			self.setCodecSettings(sdpArray, 96, minBitrate, maxBitrate, startBitrate, maxQP);
			self.setCodecSettings(sdpArray, 98, minBitrate, maxBitrate, startBitrate, maxQP);
			self.setCodecSettings(sdpArray, 100, minBitrate, maxBitrate, startBitrate, maxQP);
			self.setCodecSettings(sdpArray, 127, minBitrate, maxBitrate, startBitrate, maxQP);

			desc.sdp = self.arrayToString(sdpArray);


			console.log("Answer ready " + desc.sdp);

			self.peerConnection.setLocalDescription(desc);
			self.sendLocalSDP(desc);
		});
	};

	private sendLocalSDP(sdp : any) {
		
		var data = sdp.sdp + "";
		$.ajax({
			url: this.signalAddress + '/answer',
			method: 'POST',
			
			crossDomain: true,
			dataType: 'json',
			
			timeout: 6000000,
			data: {
				data: data,
				gameId: this.instanceId,
				playerId: this.playerId
			},

			success: function (response : any) {
				console.log("Finished signaling");
			},
			error: function (err : any) {

				//console.log(err);
				//self.onStreamError("Failed sending answer, " + JSON.stringify(err));
			}
		});
	};

	private onTrack(e : any) {

		//var stream = e.streams[0];
		var video : any = document.getElementById('streamingVideoPlayer');

		console.log('onTrack', e.streams);
		if (video.srcObject !== e.streams[0]) {
			video.srcObject = e.streams[0];
		}
	};
	private disconnect() {
		if (this.peerConnection == null) {
			return;
		}

		this.peerConnection.close();
		this.peerConnection = null;
	}


	private replaceAll(source : string) {

		var out = source;
		while (source.indexOf("\\n\\r") >= 0) {
			out = out.replace("\\n\\r", "\r\n");
			//out = out.replace("\\n\\r", "\r");
		}

		return out;
	}

	private parseSDPToArray(sdp : string) {

		var sdpArray = sdp.split("\r\n");
		return sdpArray;
	}
	private insertLineInSDPArray(sdpArray : any, after : string, newLine : string) {

		var index = sdpArray.findIndex(function (line : string) {

			return line.search(after) > -1;
		});

		if (index > -1) {
			sdpArray.splice(index, 0, newLine);
		}
	}
	private setCodecSettings(sdpArray : any, codecID: number, minBitrate: number, maxBitrate: number, startBitrate: number, maxQP : number) {

		this.insertLineInSDPArray(sdpArray, "a=fmtp:" + codecID, "a=fmtp:" + codecID + " x-google-start-bitrate=" + startBitrate);
		this.insertLineInSDPArray(sdpArray, "a=fmtp:" + codecID, "a=fmtp:" + codecID + " x-google-min-bitrate=" + minBitrate);
		this.insertLineInSDPArray(sdpArray, "a=fmtp:" + codecID, "a=fmtp:" + codecID + " x-google-max-bitrate=" + maxBitrate);
		if (maxQP > -1) {
			//insertLineInSDPArray(sdpArray, "a=fmtp:" + codecID, "a=fmtp:" + codecID + " x-google-max-quantization=" + maxQP);
		}
	}
	private arrayToString(sdpArray : any) {

		var sdpBuffer = "";
		var eol = "";
		for (var l in sdpArray) {

			sdpBuffer += eol + sdpArray[l];
			eol = "\r\n";
		}
		return sdpBuffer;
	}
}

