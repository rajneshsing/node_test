const router=require('express').Router();
const User=require('../model/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {loginValidation,registerValidation}=require('./validation');

router.post("/register",async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist=await User.findOne({email:req.body.email});
    if (emailExist) return res.status(400).send('Email Already exist');

    const salt=await bcrypt.genSalt(10);
    const hashpass=await bcrypt.hash(req.body.password,salt);


    const user = new User({
        name: req.body.name,
        password: hashpass,
        email: req.body.email
      });
      try {
        const savedUser = await user.save();
        res.send(savedUser);
       // res.send({user:user._id});
       
      } catch (err) {
        res.status(400).send(err);
      }
  });

  router.post("/login",async(req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user=await User.findOne({email:req.body.email});
    if (!user) return res.status(400).send('Email does not exist');
     const validPass=await bcrypt.compare(req.body.password,user.password);
     if (!validPass) return res.status(400).send('Invalid password');

     const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 1000 }); 
     res.header('auth-token',token).send(token);
    // res.send('Logged in');
  });

 

  module.exports = router;