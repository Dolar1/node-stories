const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google',  passport.authenticate('google', {
 		scope: ['profile', 'email'] 
	}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res)=>{
  	// console.log(req.user);
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });


// router.get('/verify', (req, res)=>{
// 	if(req.user){
//     // console.log(req.user) ;
//   }else{
//     console.log('not authenticated');
//   }
// });


router.get('/logout', (req, res)=>{
	req.logout();
	res.redirect('/');
  console.log('logged out');
});



module.exports = router;