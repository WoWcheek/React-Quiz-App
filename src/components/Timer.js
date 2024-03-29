import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
   const { dispatch, secondsRemaining } = useQuiz();

   const minutesLeft = Math.floor(secondsRemaining / 60);
   const secondsLeft = secondsRemaining % 60;

   useEffect(
      function () {
         const id = setInterval(() => dispatch({ type: "tick" }), 1000);
         return () => clearInterval(id);
      },
      [dispatch]
   );
   return (
      <div className="timer">
         {minutesLeft < 10 && "0"}
         {minutesLeft}:{secondsLeft < 10 && "0"}
         {secondsLeft}
      </div>
   );
}

export default Timer;
