import { useSelector } from "react-redux";

export const Compass = () => {
    
    const angle = useSelector((state:any) => state.compass.viewAngle);
    
    return (

        <div className="tamprechar-clock">
            <div className="compass">
                <div className="compass-inner">
                    <div className="north-line">|</div>
                    <div className="east-line">|</div>
                    <div className="west-line">|</div>
                    <div className="south-line">|</div>

                    <div className="north">N</div>
                    <div className="east">E</div>
                    <div className="west">W</div>
                    <div className="south">S</div>
                    <div className="main-arrow" style={{ transform: `rotate(${angle && angle}deg)` }}>
                      
                        <div className="arrow-up"></div>
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </div>
            <p>2234x3434 sq.ft</p>
        </div>
    );
}