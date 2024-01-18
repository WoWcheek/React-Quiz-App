import { useQuiz } from "../contexts/QuizContext";

function Progress() {
   const { questions, index, points, answer } = useQuiz();

   const questionsNum = questions.length;
   const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

   return (
      <header className="progress">
         <progress max={questionsNum} value={index + Number(answer !== null)} />
         <p>
            Question <strong>{index + 1}</strong> / {questionsNum}
         </p>
         <p>
            <strong>{points}</strong> / {maxPoints} points
         </p>
      </header>
   );
}

export default Progress;
