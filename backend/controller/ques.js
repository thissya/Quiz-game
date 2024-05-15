const Question=require('../model/ques')

module.exports.getAllQuestions=async(req,res)=>{
    try{
        const questions=await Question.find();
        res.status(200).send(questions);
    }
    catch(err){
        res.status(400).send(err.message);
    }
}

module.exports.addQuestion=async(req,res)=>{
    try{
        const question=await Question.create(req.body);
        res.status(200).send("Added Successfully");
    }
    catch(err){
        res.status(400).send(err.message);
    }
}

