const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {promisify} = require("util") ;

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE
});

exports.login = async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!email || !password){
            return res.status(400).render('login',{msg:'Please enter your email and password',
            msg_type:"error"});
        }
    
        db.query('select * from users where email=?',[email],async(error,result)=>{
            console.log(result);
            if (result.length<=0 ){
                return res.status(401).render('login',
                {msg:'Email or Password Incorrect',
                msg_type:"error"});
            }else {
                if ( !(await bcrypt.compare(password,result[0].PASS))){
                    return res.status(401).render('login',
                    {msg:'Email or Password Incorrect',
                    msg_type:"error"});
                }else {
                    const id=result[0].ID;
                    const token=jwt.sign({id: id},process.env.JWT_SECRET,{
                        expiresIn:process.env.JWT_EXPIRES_IN,
                    } );
                    console.log("the token is " + token);
                    const cookieOptions={
                        expires: new Date(
                            Date.now()+
                            process.env.JWT_COOKIE_EXPIREs*24*60*60*1000),
                            httpOnly: true,
                    };
                    res.cookie("me",token,cookieOptions);
                    res.status(200).redirect("/home");
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.register = (req,res)=>{
    console.log(req.body);
    const {name,email,phone,password,confirm_password,gender}=req.body;
db.query('select email from users where email=?',
[email],
async (error,result)=>{
    if(error){
        confirm.log(error);
    }
    if(result.length>0){
        return res.render('register',{msg:'Email is already taken',
    msg_type:"error"});
    }else if (password!==confirm_password){
        return res.render('register',{msg:'Password do not match',
        msg_type:"error"});
    }
    let hashedPassword = await bcrypt.hash(password,8) ;
   // console.log(hashedPassword);
   db.query('insert into users set ?' , {name:name, email:email, pass:hashedPassword, phone:phone, gender:gender },
   (error, result) => {
    if(error){
        console.log(error);
    }else{
        console.log(result);
        return res.render("register", {msg: "User Registration Success",
        msg_type:"good"});
    }
   }

   );
});
};

exports.isLoggedIn = async (req, res, next) => {
    //req.name = "Check Login....";
    //console.log(req.cookies);
    if (req.cookies.me) {
      try {
        const decode = await promisify(jwt.verify)(
          req.cookies.me,
          process.env.JWT_SECRET
        );
        //console.log(decode);
        db.query( 
          "select * from users where id=?",
          [decode.id],
          (err, results) => {
            //console.log(results);
            if (!results) {
              return next();
            }
            req.user = results[0];
            return next();
          }
        );
      } catch (error) {
        console.log(error);
        return next();
      }
    } else {
      next();
    }
};
exports.logout = async (req, res) => {
    res.cookie("me", "logout", {
      expires: new Date(Date.now() + 2 * 1000),
      httpOnly: true,
    });
    res.status(200).redirect("/");
  };

exports.deleteAccount = async (req, res) => {
    // Assurez-vous que l'utilisateur est authentifié avant de tenter de supprimer le compte
    if (!req.user) {
        return res.status(401).send('Unauthorized');
    }

    const userId = req.user.id;

    db.query('DELETE FROM users WHERE id = ?', [userId], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
        res.clearCookie("me"); // Efface le cookie de connexion
        return res.redirect('/');
    });
};

