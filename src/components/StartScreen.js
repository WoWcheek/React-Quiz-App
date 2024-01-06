function StartScreen({ questionsNum, dispatch }) {
   return (
      <div className="start">
         <h2>Welcome to The React quiz</h2>
         <h3>{questionsNum} questions to test your React knowledge</h3>
         <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
            Let's start
         </button>
      </div>
   );
}

export default StartScreen;
