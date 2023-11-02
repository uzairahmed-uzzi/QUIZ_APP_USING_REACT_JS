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
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ans, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const increaseNo = (e, ind) => {
    (Object.values(data?.[qNo].correct_answers)[ind] === "true" ? true : false)
      ? setScore((prv) => prv + 1)
      : setScore((prv) => prv);
    qNo < data.length && setQNo((prev) => prev + 1);
  };
  const enabler = () => {
    if (qNo === data.length) {
      setVisible(true);
    }
  };
  useEffect(() => {
    if (data.length > 0) {
      if (qNo < data.length) {
        const arr = Object.values(data?.[qNo]?.answers);
        setAnswers(arr);
      }
      enabler();
    }
  }, [qNo, data]);
  const getQuestions = () => {
    Axios.get(
      "https://quizapi.io/api/v1/questions?apiKey=5ZneGMpA3dgdpWS1JyUEWTpNrqcRhJcS8WbQX2if&category=code&difficulty=Easy&limit=10"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getQuestions();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  const result = () => {
    qNo === data.length && setShowResult(true);
  };
  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">Quiz Application</h1>
      </div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {showResult ? (
            <div className="result">
              <h1>
                You Scored: {score} / {data.length}
              </h1>
            </div>
          ) : (
            <>
              {visible ? (
                <div className="finish-button">
                  <Button
                    classs="btn"
                    content="FINISH"
                    result={() => result()}
                  />
                </div>
              ) : (
                <>
                  <Question question={data[qNo]?.question} num={qNo + 1} />
                  <div className="options-container">
                    {ans.map((ele, ind) => {
                      return ele !== null ? (
                        <Option
                          opt={ele}
                          key={ind}
                          next={(e) => increaseNo(e, ind)}
                        />
                      ) : (
                        ""
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Layout;
