const express =require("express");
const router=express.Router();

const {
    getAllQuestions,
    addQuestion,
    deleteAllQuestions
}=require('../controller/ques');

router.get('/get',getAllQuestions);
router.post('/post',addQuestion);
router.delete('/delete',deleteAllQuestions);

module.exports=router;
