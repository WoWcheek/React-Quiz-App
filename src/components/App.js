import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
   questions: [],

   // "loading", "error", "ready", "active", "finished"
   status: "loading",
   index: 0
};

function reducer(state, action) {
   switch (action.type) {
      case "dataReceived":
         return {
            ...state,
            questions: action.payload,
            status: "ready"
         };
      case "dataFailed":
         return {
            ...state,
            status: "error"
         };
      case "start":
         return {
            ...state,
            status: "active"
         };
      default:
         throw new Error("Unknown action");
   }
}

export default function App() {
   const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);
   useEffect(function () {
      fetch("http://localhost:8000/questions")
         .then((res) => res.json())
         .then((data) => dispatch({ type: "dataReceived", payload: data }))
         .catch((err) => dispatch({ type: "dataFailed" }));
   }, []);

   return (
      <div className="app">
         <Header />
         <Main className="main">
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            {status === "ready" && (
               <StartScreen questionsNum={questions.length} dispatch={dispatch} />
            )}
            {status === "active" && <Question question={questions[index]} />}
         </Main>
      </div>
   );
}
