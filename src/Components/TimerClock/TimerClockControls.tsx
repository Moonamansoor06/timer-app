import React, { useState } from 'react'
import '../Controls/Controls.css';
type Props = {
    setTimeInSeconds: Function,
    
    
}

function TimerClockControls(props: Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, SetIntervalId] = useState<number>(0);

                                                    const decrement=(()=>{
                                                        
                                                        let interval:any=setInterval(() => {
                                                            setTimeInSeconds((previousState: number) => 
                                                           Math.max( previousState -1,0));
                                                        
                                                                 }, 1000)
                                                              

                                                        SetIntervalId(interval);
                                                        


                                                    }  )
    const handlePlayButton = () => {
        if(intervalId>=0){
            decrement();                                                   
            }
           else return;
            
           
           
        }
        
    
    const handleStopButton = () => {
        clearInterval(intervalId);
    }
    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <section className="controls-container">
            <button onClick={handlePlayButton}>Play</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </section>
    )
}
export default TimerClockControls;