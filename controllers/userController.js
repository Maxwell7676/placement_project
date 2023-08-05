const userModel = require('../models/user.js');



        // Sign in
        exports.signIn = async (req, res) => {
            res.render('signIn');
          };
        
        //verify sign in
        exports.verifySignIn = async(req, res)=>{

            try {
            
            const {email, password} = req.body;

            const result = await userModel.findOne({email:email});
            const data = req.cookies.CookieDash || [];

                if(result != null){
                    if(result.email == email && result.password == password){
                        req.flash('success', 'Task completed successfully!');
                        res.render('dashboard', {Result : data});
                    }else{
                        console.log(`email or password not valid`);
                    }
                }else{
                    console.log('email not registered');
                }

            } catch (error) {
                console.log(error);
            }

        }



        // Sign up
        exports.signUp = async (req, res) => {
            res.render('signUp');
        }

        exports.signUpDoc = async (req, res) => {
            try {
            const signUp = new userModel({
                username:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
    
            await signUp.save();
            console.log('running');

            res.redirect('signIn');

        } catch (error) {
            console.log(error);
        }
    }




    // Sign out
    exports.signOut = async (req, res) => {
    // Destroy the user's session to log them out
    req.session.destroy((err) => {
      if (err) {
        console.log('Error occurred while signing out:', err);
      } else {
        // Redirect the user to the homepage or any other route after sign-out
        res.redirect('signIn');
      }
    });
  };
  




  


  