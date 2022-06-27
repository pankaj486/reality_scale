import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import HigherScreen from "../assets/image/HighresScreenshot00021.jpg"
import { onmouseDown, onmouseMove, mouseRelease } from "../services/mainscreen";

import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";

export const MainScreen = () => {
    
    const allImages = useTypedSelector(({ allscreens }) => allscreens.screen);
    const currentMode = useTypedSelector(({ allapp }) => allapp.AllApp.mode);
    const playPauseStatus = useTypedSelector(({ media }) => media.playPauseStatus);
    const nextItem = useTypedSelector(({ media }) => media.nextItem);
    const previousItem = useTypedSelector(({ media }) => media.previousItem);

    let timer: null | ReturnType<typeof setTimeout> = null;

    const { AllAction, nextAction, previousAction } = useActions();

    const Images: Array<string> = [];

    allImages.map((images) =>
        Images.push(images.image)
    )

    const [currentScreent, setCurrentScreen] = useState(HigherScreen);
    const [count, setCount] = useState(0);
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    const backgroundImg = () => {
        AllAction({ loaderBar: true })
        if (count < Images.length) {
            setCurrentScreen(Images[count]);
            setCount(count + 1);
        } else {
            setCount(0)
            setCurrentScreen(Images[0]);
        }
    }

    useEffect(() => {
        if (currentMode === "Automatic" || !currentMode) {
            if (!playPauseStatus) {
                timer = setInterval(() => backgroundImg(), 5000)
                return function stopTimer() {
                    if (timer) {
                        clearInterval(timer)
                    }
                }
            }
        }
    })
    //console.log(timer)
    const xPos = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: any, width: any) => {
        var client_x = e.clientX - element;
        return client_x / width;
    }
    const yPos = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, element: any, width: any) => {
        var client_y = e.clientY - element
        return client_y / width
    }

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMouseDown(true);
        let buttonType :string = "";
        if(event.button === 0){
             buttonType = "left";
        }
        else if(event.button === 1){
             buttonType = "middle";
        }
        else if(event.button === 2){
             buttonType = "right";
        }
        const video = document.getElementById("streamingVideo");
        const xposition = xPos(event, video?.offsetLeft, video?.offsetWidth)
        const yposition = yPos(event, video?.offsetTop, video?.offsetHeight)
        onmouseDown(xposition, yposition, buttonType);
    }

    const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
       
            const video = document.getElementById("streamingVideo");
            const xposition = xPos(ev, video?.offsetLeft, video?.offsetWidth)
            const yposition = yPos(ev, video?.offsetTop, video?.offsetHeight)
            onmouseMove(xposition, yposition);
            ev.preventDefault();
      
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMouseDown(false);
        let buttonType :string = "";
        if(event.button === 0){
             buttonType = "left";
        }
        else if(event.button === 1){
             buttonType = "middle";
        }
        else if(event.button === 2){
             buttonType = "right";
        }

        const video = document.getElementById("streamingVideo");
        const xposition = xPos(event, video?.offsetLeft, video?.offsetWidth)
        const yposition = yPos(event, video?.offsetTop, video?.offsetHeight)
        mouseRelease(xposition,yposition,buttonType);
    }

    return (
        <div className="video_tag"
            id="streamingVideo"
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onContextMenu={e => e.preventDefault()}
        >
            <video id="streamingVideoPlayer" autoPlay loop muted playsInline={true} controls={false} ></video>    
           
        </div>
    );

    // <img src={currentScreent} />
}