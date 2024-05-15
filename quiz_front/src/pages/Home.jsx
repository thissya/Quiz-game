import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Home()
{
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
    return(
        <div style={instyle}>
            <h1>Quiz Game</h1>
            <button style={btstyle} onClick={()=>window.location.href="/quiz"}>Start Quiz</button>
        </div>

    )
}
export default Home