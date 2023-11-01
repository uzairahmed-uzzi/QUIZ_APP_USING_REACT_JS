import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Layout.css";
import Question from "../Question/Question";
import Option from "../Options/Option";
import Button from "../Button/Button";

const Layout = () => {
  const [data, setData] = useState([]);
  const [qNo, setQNo] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ans, setAnswers] = useState([]);

  const increaseNo = () => {
   qNo<data.length-1 && setQNo((prev) => prev + 1)
};
  // setData(()=>JSON.parse([
  //     {
  //       id: 505,
  //       question: "Which of the following is an attribute of the <Table> tag?",
  //       description: null,
  //       answers: {
  //         answer_a: "SRC",
  //         answer_b: "BOLD",
  //         answer_c: "CELLPADDING",
  //         answer_d: "LINK",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "false",
  //         answer_c_correct: "true",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "HTML"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 502,
  //       question: "Which tag inserts a line horizontally on your web page?",
  //       description: null,
  //       answers: {
  //         answer_a: "<hr>",
  //         answer_b: "<line direction=\"horizontal\">",
  //         answer_c: "<tr>",
  //         answer_d: "<line>",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "true",
  //         answer_b_correct: "false",
  //         answer_c_correct: "false",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "HTML"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 616,
  //       question: "How do we check if a given variable is empty?",
  //       description: null,
  //       answers: {
  //         answer_a: "With the null() function.",
  //         answer_b: "With the empty() function.",
  //         answer_c: "With the isitnull() function.",
  //         answer_d: "With the isitempty() function.",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "true",
  //         answer_c_correct: "false",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "PHP"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 757,
  //       question: "Which of the following is correct about constants?",
  //       description: null,
  //       answers: {
  //         answer_a: "To define a constant you have to use define() function.",
  //         answer_b: "To retrieve the value of a constant, you have to simply specify its name.",
  //         answer_c: "Both of the mentioned answers.",
  //         answer_d: "None of the mentioned answers.",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "false",
  //         answer_c_correct: "true",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: null,
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "PHP"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 1064,
  //       question: "Which artisan command would you use to create a new Laravel Model?",
  //       description: null,
  //       answers: {
  //         answer_a: "php artisan create:model ModelName",
  //         answer_b: "php artisan model:make ModelName",
  //         answer_c: "php artisan model create ModelName",
  //         answer_d: "php artisan make:model ModelName",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "false",
  //         answer_c_correct: "false",
  //         answer_d_correct: "true",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "Laravel"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 601,
  //       question: "If the variable $var1 is set to 10 and the $var2 is set to the character var1, what's the value of $$var2?",
  //       description: null,
  //       answers: {
  //         answer_a: "$$var2 contains the value 1.",
  //         answer_b: "$$var2 contains the value 5",
  //         answer_c: "$$var2 contains the value 20",
  //         answer_d: "$$var2 contains the value 10.",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "false",
  //         answer_c_correct: "false",
  //         answer_d_correct: "true",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "PHP"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 1067,
  //       question: "Which artisan command will you used to enable maintenance mode in Laravel?",
  //       description: null,
  //       answers: {
  //         answer_a: "php artisan maintenance",
  //         answer_b: "php artisan down",
  //         answer_c: "php artisan stop",
  //         answer_d: "php artisan pause",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "true",
  //         answer_c_correct: "false",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "Laravel"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 545,
  //       question: "PHP is a ________________________",
  //       description: "A loosely typed language such as PHP is a language that does not require you to declare a variable type when declaring a variable",
  //       answers: {
  //         answer_a: "Tightly typed language",
  //         answer_b: "Client typed language",
  //         answer_c: "Server typed language",
  //         answer_d: "Loosely typed language",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "false",
  //         answer_c_correct: "false",
  //         answer_d_correct: "true",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "PHP"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 1060,
  //       question: "Which of the following are true for routes in Laravel?",
  //       description: null,
  //       answers: {
  //         answer_a: "You can not pass any arguments to your routes.",
  //         answer_b: "Routes can point to a method on a controller and also dictate which HTTP methods are able to hit that URI.",
  //         answer_c: "A route is an endpoint specified by a URI (Uniform Resource Identifier).",
  //         answer_d: "Routes can only handle GET requests",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "false",
  //         answer_b_correct: "true",
  //         answer_c_correct: "true",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "Laravel"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     },
  //     {
  //       id: 557,
  //       question: "Which of the below symbols is a newline character?",
  //       description: null,
  //       answers: {
  //         answer_a: "\\n",
  //         answer_b: "/r",
  //         answer_c: "/n",
  //         answer_d: "\\r",
  //         answer_e: null,
  //         answer_f: null
  //       },
  //       multiple_correct_answers: "false",
  //       correct_answers: {
  //         answer_a_correct: "true",
  //         answer_b_correct: "false",
  //         answer_c_correct: "false",
  //         answer_d_correct: "false",
  //         answer_e_correct: "false",
  //         answer_f_correct: "false"
  //       },
  //       correct_answer: "answer_a",
  //       explanation: null,
  //       tip: null,
  //       tags: [
  //         {
  //           name: "PHP"
  //         }
  //       ],
  //       category: "Code",
  //       difficulty: "Easy"
  //     }
  //   ]))
  const enabler = () => {
    if (qNo === data.length - 1) {
      setVisible(true);
    }
  };
  useEffect(() => {
    if(data.length>0){

        const arr = Object.values(data[qNo]?.answers);
        setAnswers(arr);
        console.log(ans);
        enabler();
    }
  }, [qNo,data]);
  const getQuestions = () => {
    Axios.get(
      "https://quizapi.io/api/v1/questions?apiKey=5ZneGMpA3dgdpWS1JyUEWTpNrqcRhJcS8WbQX2if&category=code&difficulty=Easy&limit=10"
    )
      .then((response) => {
          setData(response.data);
          console.log('====>',response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getQuestions();
  }, []);
  useEffect(()=>{
    if(data.length>0){
        setLoading(false);
    }else{
        setLoading(true);
    }
  },[data])

console.log(data);


  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">Quiz Application</h1>
      </div>
      {loading ? (
        "lloading"
      ) : (
        <>
          <Question question={data[qNo]?.question} num={qNo} />
          <div className="options-container">
            {ans.map((ele, ind) => {
              return ele!== null?<Option opt={ele} key={ind} next={increaseNo}  />:"";
            })}
            {visible ? <Button classs="btn" content="FINISH" /> : ""}
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
