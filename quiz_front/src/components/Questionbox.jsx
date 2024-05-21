const Questionbox = (   {props}) => {
    return (
        <>
            <div className='flex h-screen flex-col items-center justify-center'>

                <div className='h-[70vh] w-[70vw]  text-center m-auto' >
                    <div className='font-bold text-2xl'>Quiz Questions</div>
                    <div className='h-[80%] w-[80%] border-2 rounded-[30px] p-4 m-auto '>
                        <div className='text-left'>
                            <div className='text-2xl ml-6 font-medium mt-5'>
                               {props.ques}
                            </div>
                        </div>
                        <div className=' flex flex-row p-5 mt-5 justify-left w-full '>
                            <div className='flex flex-col text-left justify-right w-full'>
                                <label class="has-[:checked]:bg-indigo-50 m-1 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                    <span>{props.opt1}</span>
                                    <input type="radio" class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                </label>
                                <label class="has-[:checked]:bg-indigo-50 m-1 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                    <span>{props.opt2}</span>
                                    <input type="radio" class="ml-auto  checked:border-indigo-500 peer" name="payment" />
                                </label>
                                <label class="has-[:checked]:bg-indigo-50 m-1 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                    <span>{props.opt3}</span>
                                    <input type="radio" class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                </label>
                                <label class="has-[:checked]:bg-indigo-50 m-1 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200  flex items-center w-full text-left p-3 rounded-lg border-2 transition-all peer-checked:bg-indigo-50 peer-checked:text-indigo-900 peer-checked:ring-indigo-200">
                                    <span>{props.opt4}</span>
                                    <input type="radio" class="ml-auto checked:border-indigo-500 peer" name="payment" />
                                </label>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questionbox;