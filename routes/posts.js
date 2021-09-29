const router=require('express').Router();
const verify=require('./verifytoken');
router.get('/',verify,(req,res)=>{
    res.json({
        posts:{
            title:'FirstTitle',
            description:'First description'
        }
    })

});

module.exports = router;
