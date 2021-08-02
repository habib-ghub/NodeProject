if (process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}


const os = require('os');
var tot = os.totalmem()
var free = os.freemem()
var express = require('express');
var app = express();
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const initializedPassport = require('./passport_config.js'); 
// const { session } = require('passport');
 initializedPassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id===id)
)

const users = []
app.set('view-engine', 'ejs')
app.use(express.urlencoded ({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

initializedPassport(passport,email =>users.find(user.email ===email) )
app.get('/',(req, res)=>{
    res.render('index.ejs')
})
app.get('/login', (req,res)=>{
     res.render('login.ejs')
})
app.get('/register',(req, res)=>{
    res.render('register.ejs')
})

app.post('/login',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
   

app.post('/register', async(req, res)=>{
     try{
   const hashedPassword = await bcrypt.hash(req.body.password, 10)
   users.push({
       id: Date.now().toString(),
       name: req.body.name,
       email: req.body.email,
       password: hashedPassword
   })
    res.redirect('/login')
}
   catch{
res.redirect('/register')
   }
   console.log(users)
})

app.listen(3000);
console.log(tot)
console.log(free)
console.log('Server started running on  port 3000');