import { useState, useRef } from "react";

export default function Player() {
  const userName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function handleClick() {
    setEnterPlayerName(userName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
