const express =require("express");
const router=express.Router();

const {
    getAllQuestions,
    addQuestion
}=require('../controller/ques');

router.get('/get',getAllQuestions);
router.post('/post',addQuestion);

module.exports=router;
