import { useQuiz } from "../contexts/QuizContext";

function Options() {
   const { questions, index, dispatch, answer } = useQuiz();

   const question = questions[index];
   const answered = answer !== null;

   return (
      <div className="options">
         {question.options.map((option, index) => (
            <button
               className={`btn btn-option 
                          ${index === answer ? "answer" : ""} 
                          ${
                             answered
                                ? index === question.correctOption
                                   ? "correct"
                                   : "wrong"
                                : ""
                          }`}
               key={option}
               disabled={answered}
               onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
               {option}
            </button>
         ))}
      </div>
   );
}

export default Options;
