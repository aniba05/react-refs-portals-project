import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime,remainingtime,resetBord},
  ref
) {

    const userlost = remainingtime<=0;
    const remainingScore = (remainingtime/1000).toFixed(2);
    const score =Math.round( (1-remainingtime/(targetTime*1000))*100)


  const user = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        user.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={user}>
      {userlost&&<h2>you lost</h2>}
      {!userlost&& <h2>your score:{score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong>seconds
      </p>
      <p>
        you stopped the timer with <strong>{remainingScore} seconds left. </strong>
      </p>
      <form method="dialog" onSubmit={resetBord}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
