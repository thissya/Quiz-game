import React from "react";
import {useParams} from 'react-router-dom';


const Resultpage=()=>{
    const {score}=useParams();

    return (
        <div className='flex h-screen flex-col items-center justify-center bg-black'>
        <div className='h-[70vh] w-[70vw] text-center m-auto'>
            <div className='font-bold text-2xl text-yellow-300 mt-5'>Quiz Results</div>
            <div className='h-[80%] w-[80%] border-2 rounded-[30px] p-4 m-auto'>
                <div className='text-left'>
                    <div className='text-2xl ml-6 font-medium mt-5 text-yellow-300'>
                        Your Score:{score}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resultpage