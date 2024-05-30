import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'
import Questionbox from '../components/Questionbox';

function Quiz() {
  const [questions,setQuestions]=useState([]);
  const [CurrentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    console.log('Selected option:', selectedOption);
  }, [selectedOption]);

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
      setCurrentQuestionIndex((prevIndex)=>Math.min(prevIndex+1,questions.length-1));
  };

  const handlePrevQuestion=()=>{
      setCurrentQuestionIndex((prevIndex)=>Math.max(prevIndex-1,0));
  };

  const currentQuestion=questions[CurrentQuestionIndex] || {
    ques: 'Loading...',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: ''
  };

  return (
    <>
      <Questionbox props={currentQuestion} 
            func={setSelectedOption}
            handleNextQuestion={handleNextQuestion}
            handlePrevQuestion={handlePrevQuestion}
            isPrevDisabled={CurrentQuestionIndex === 0}
            isNextDisabled={CurrentQuestionIndex === questions.length - 1} />  

    </>
  );
}

export default Quiz
