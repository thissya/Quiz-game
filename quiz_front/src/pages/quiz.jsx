import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'
import Questionbox from '../components/Questionbox';

function Quiz() {
  const [question,setQuestions]=useState([]);
  
  const myobj = {
    question:"Sample Question"

  }

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
    <Questionbox props={question[0]}/>
    </>

  );
}

export default Quiz