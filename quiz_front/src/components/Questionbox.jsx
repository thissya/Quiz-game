import React from 'react';
import { useNavigate } from 'react-router-dom';


const Questionbox = ({ props, func ,handleNextQuestion ,handlePrevQuestion ,isPrevDisabled ,isNextDisabled,selectedOption,handleSubmit }) => {
    const {ques,opt1,opt2,opt3,opt4}=props;

    const handleOptionChange = async (changeEvent) => {
        func(changeEvent.target.value);
    }
    
    return (
        <>
            <div className='flex h-screen flex-col items-center justify-center bg-black'>
                <div className='h-[70vh] w-[70vw]  text-center m-auto' >
                    <div className='font-bold text-2xl text-yellow-300 mt-5'>Quiz Questions</div>
                    <div className='h-[80%] w-[80%] border-2 rounded-[30px] p-4 m-auto '>
                        <div className='text-left'>
                            <div className='text-2xl ml-6 font-medium mt-5 text-yellow-300'>
                                {ques}
                            </div>
                        </div>
                        <div className=' flex flex-row p-5 mt-5 justify-left w-full '>
                            <div className='flex flex-col text-left justify-right w-full'>
                                <form>
                                    <label class="has-[:checked]:bg-indigo-50 m-1 mb-2 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                        <span className="text-yellow-600">{opt1}</span>
                                        <input type="radio" checked={selectedOption===opt1} value={opt1} onChange={handleOptionChange} class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                    </label> 
                                    <label class="has-[:checked]:bg-indigo-50 m-1 mb-2 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                        <span className="text-yellow-600">{opt2}</span>
                                        <input type="radio" checked={selectedOption===opt2} value={opt2} onChange={handleOptionChange} class="ml-auto  checked:border-indigo-500 peer" name="payment" />
                                    </label>
                                    <label class="has-[:checked]:bg-indigo-50 m-1 mb-2 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                        <span className="text-yellow-600">{opt3}</span>
                                        <input type="radio"checked={selectedOption===opt3} onChange={handleOptionChange} value={opt3} class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                    </label>
                                    <label class="has-[:checked]:bg-indigo-50 m-1 mb-2 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                        <span className="text-yellow-600">{opt4}</span>
                                        <input type="radio" checked={selectedOption===opt4} onChange={handleOptionChange} value={opt4} class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='mt-10'>
                                <button className='bg-blue-500 text-white p-2 rounded-lg mt-5 w-20 h-10' onClick={handlePrevQuestion} disabled={isPrevDisabled}>Previous</button>
                            </div>
                            <div className ='mt-10'>
                                <button className='bg-blue-500 text-white p-2 rounded-lg mt-5 w-20 h-10' onClick={handleNextQuestion} disabled={isNextDisabled}>Next</button>
                            </div>
                        </div>
                    </div>
                    <button className='bg-blue-500 text-white p-2 rounded-lg mt-3 w-[15%]' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Questionbox;
