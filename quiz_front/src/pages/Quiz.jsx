import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'
import Questionbox from '../components/Questionbox';
import { useNavigate } from 'react-router-dom';


function Quiz() {
  const [questions,setQuestions]=useState([]);
  const [CurrentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score,setscore]=useState(0);
  const [isStarted, setisStarted] = useState(false);
  const navigate=useNavigate();

  const instyle={
    backgroundColor:"black",
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    color:"yellow",
    fontSize:"40px",
    paddingBottom:"100px"
}
const btstyle={
    backgroundColor:"white",
    color:"black",
    padding:"10px",
    margin:"10px",
    borderRadius:"10px",
    cursor:"pointer",
    fontSize: "20px"
}

  useEffect(() => {
    console.log('Selected option:', selectedOption);
  }, [selectedOption]);

  useEffect(()=>{
    setSelectedOption(null);
  },[CurrentQuestionIndex]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get');
        console.log(response.data)
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion=()=>{
    if(selectedOption==currentQuestion.ans)
      {
        setscore((prevscore)=>prevscore+1);
      }
    setCurrentQuestionIndex((prevIndex)=>Math.min(prevIndex+1,questions.length-1));
  };

  const handlePrevQuestion=()=>{
      setCurrentQuestionIndex((prevIndex)=>Math.max(prevIndex-1,0));
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.ans) {
      setScore((prevScore) => prevScore + 1);
    }
    navigate(`/result/${score + (selectedOption === currentQuestion.ans ? 1 : 0)}`);
  };


  const currentQuestion=questions[CurrentQuestionIndex] || {
    ques: 'Loading...',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    ans : ''
  };

  return (
    <>
       {!isStarted&&
       <div className=" caret-transparent" style={instyle}>
          <h1>Quiz Game</h1>
          <button onClick={()=>{setisStarted(true)}} style={btstyle}>Start Quiz</button>
        </div>
}
      {isStarted &&
      <Questionbox props={currentQuestion} 
            func={setSelectedOption}
            handleNextQuestion={handleNextQuestion}
            handlePrevQuestion={handlePrevQuestion}
            isPrevDisabled={CurrentQuestionIndex === 0}
            isNextDisabled={CurrentQuestionIndex === questions.length-1}
            selectedOption={selectedOption}
            handleSubmit={handleSubmit} />  }
    </>
  );
}

export default Quiz;
