export interface MediaControllerType{
    allMediaType: mediaType
}
export interface mediaType {
    playPauseStatus: boolean;
    nextItem: string | null;
    previousItem: string | null;
    cameraIndex: number | null;
}