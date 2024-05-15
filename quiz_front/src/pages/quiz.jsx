import React, { useState, useEffect }  from 'react'
import axios from 'axios'

function Quiz()
{
    const [questions, setQuestions] = useState([]);

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
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center"
}
  return (
    <div style={containerStyle}>
      <h1>Quiz Questions</h1>
      {questions.map(question => (
        <div key={question._id}>
          <h3>{question.ques}</h3>
          <ul>
            <li>{question.opt1}</li>
            <li>{question.opt2}</li>
            <li>{question.opt3}</li>
            <li>{question.opt4}</li>
          </ul>
        </div>
          )
        )
    }
    </div>
  );
}

export default Quiz