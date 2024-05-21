import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'
import Questionbox from '../components/Questionbox';

function Quiz() {
  const [question,setQuestions]=useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const myobj = {
    ques:"Sample Question",
    opt1:"Option 1",
    opt2:"Option 2",
    opt3:"Option 3",
    opt4:"Option 4"
  }
  
  useEffect(() => {
    console.log('Selected option:', selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);


  return (
    <>
    <Questionbox props={myobj} func={setSelectedOption}/>
    </>

  );
}

export default Quiz
