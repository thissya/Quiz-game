import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react-router-dom'


function Home()
{
    const [quiz, setQuiz] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/quiz')
        .then(res => {
            console.log(res.data)
            setQuiz(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <h1>Quiz</h1>
            <ul>
                {quiz.map(q => (
                    <li key={q.id}>{q.name}</li>
                ))}
            </ul>
        </>
    )
}
