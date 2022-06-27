import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import back_arrow from "../assets/image/back_arrow.png"
import next_arrow from "../assets/image/next_arrow.png"
import playImage from "../assets/image/play.png"
import pauseImage from "../assets/image/pause.png"

import { NextPreviousRequest } from "../services/media";

import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";

export const MediaController = () => {

    const loadingBar = useTypedSelector(({ allapp }) => allapp.AllApp.loaderBar);
    const { AllAction, PlayPauseAction, nextAction, previousAction } = useActions();
    const [barDataValue, setBarDataValue] = useState(0);
    const [playPauseState, setPlayPauseState] = useState(false);

    const barFrame = () => {
        if (barDataValue < 100) {
            setBarDataValue(barDataValue + 25);
        }
    }

    useEffect(() => {
        if (!playPauseState) {
            const timerid = setInterval(barFrame, 1000);
            return function stopTimer() {
                clearInterval(timerid)
            }
        }
    })

    useEffect(() => {
        setBarDataValue(0);
        AllAction({ loaderBar: false })
    }, [loadingBar])

    const handleNext = () => {
        nextAction('Forward');
        NextPreviousRequest('Forward')
    }

    const handlePrevious = () => {
        previousAction('Backword')
        NextPreviousRequest('Backword')
    }

    const handlePlayPause = () => {
        if (!playPauseState) {
            setPlayPauseState(true);
            PlayPauseAction(true)
        } else {
            setPlayPauseState(false);
            PlayPauseAction(false)
        }
    }

    return (
        <div className="play-item">
            <button className="play-back" onClick={handlePrevious}><img src={back_arrow} /></button>
            <div className="simple-circle" style={{ width: 50, height: 50 }}>
                <CircularProgressbarWithChildren value={barDataValue}
                    strokeWidth={5}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        pathTransitionDuration: 1.5,
                        backgroundColor: "rgba(17, 15, 15, 55%)",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                >
                    <img style={{ width: 15 }} src={playPauseState ? playImage : pauseImage} onClick={handlePlayPause} alt="pause" />
                </CircularProgressbarWithChildren>
            </div>
            <button className="play-next" onClick={handleNext}><img src={next_arrow} /></button>
        </div>
    );
}