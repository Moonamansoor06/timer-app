import React,{useState,useEffect} from 'react'
import calculateTimer from '../../Helper/Timer'
import TimerClockControls from './TimerClockControls'

function TimerClock(){
const [timeInSeconds, setTimeInSeconds]=useState<number>(0);
const [timerArray, setTimerArray]=useState<Array<number|string>>([]);
useEffect(() => {
    
   let timeArray: Array<number|string> = calculateTimer
   (timeInSeconds);
   setTimerArray(timeArray);
 


}, [timeInSeconds]);


/* const Input = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("");
const handleChange = (event) => {

      setTimeInSeconds(parseInt(event.currentTarget.value));
       */



    return(
        <main className="main">
            <h1>Timer</h1>
            <input
            type="text"
            value={timeInSeconds}
            onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setTimeInSeconds(Number(ev.target.value))}
        />
    
        <section className="time-container">
            <p className="timer-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[2]}</p>
       
        </section>
         <TimerClockControls setTimeInSeconds={setTimeInSeconds} />
         </main>
    )
}
export default TimerClock;