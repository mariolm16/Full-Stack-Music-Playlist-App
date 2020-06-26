
const Users = require('../models').Users;
const bcrypt = require('bcryptjs');


const renderSignup = (req, res) => {
    res.render('signup.ejs', {
        msg: "Pick a username that lets you stand out! "
    });
}


const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return res.status(500).json(err);
        bcrypt.hash(req.body.password, salt, (err, hashedPWD) => {
            if (err) return res.status(500).json(err);
            req.body.password = hashedPWD;
            Users.create(req.body)
            .then(newUser => {
                res.redirect(`profile/${newUser.id}`);
            })
            .catch(err => {
                res.render('signup.ejs', {
                    msg: "It looks like something went wrong :( Try picking a new Username. If you already have an existing account with the chosen email, please continue to the log-in page"
                });
            })
        });
    });
}


const renderLogIn = (req, res) => {
    res.render('login.ejs', {
        msg: "We're happy to have you back!"
    })
}


const login = (req, res) => {
    Users.findOne({
        where: {
            username:req.body.username,
        }
    })
    .then(foundUser => {
        if(foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if (match) {
                    res.redirect(`/profile/${foundUser.id}`);
                } else {
                    return res.sendStatus(400);    
                }
            })
        }
    })
}




//functions
module.exports = {
    renderSignup,
    signup,
    renderLogIn,
    login, 
}