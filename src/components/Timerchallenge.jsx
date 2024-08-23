import { useState, useRef } from "react";
import ResultModal from "./Resultmodal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();


  const [isTimeRemaining, setIsTimeReamining] = useState(targetTime * 1000);

  const isActive = isTimeRemaining > 0 && isTimeRemaining < targetTime * 1000;

  if(isTimeRemaining<=0){
    clearInterval(timer.current);
    dialog.current.open()
  }
function handleReset(){
    setIsTimeReamining(targetTime*1000);
}

  function handlebuttonStart() {
    timer.current = setInterval(() => {
      setIsTimeReamining(perTimeRemaining => perTimeRemaining - 10);
    }, 10);
  }

  function handlebuttonStop() {
    clearInterval(timer.current);
    dialog.current.open()
  }

  //   console.log("timer.current ", dialogRef);

  return (
    <>
      <ResultModal ref={dialog} remainingtime={isTimeRemaining} targetTime={targetTime} resetBord ={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timeIsOver && <p>you lost</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handlebuttonStop : handlebuttonStart}>
            {isActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
