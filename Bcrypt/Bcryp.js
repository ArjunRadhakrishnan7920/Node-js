// var bcrypt=require("bcryptjs");
// let userLogin={
//     email:"greetlabs@gmail.com",
//     password:"123456",
// };

// let salt=bcrypt.genSaltSync(10);
// let newpassword=bcrypt.hashSync(userLogin.password,salt);
// console.log("New password:",newpassword);

// //Printing it in a newLogin

// let newLogin={...userLogin,password:newpassword};
// console.log(newLogin);

// //Comparing both

// if(bcrypt.compareSync(userLogin.password,newLogin.password)){
//     console.log("password match");

// }else{
//     console.log("no match");
// }


//Using Asynchronous way

// var bcrypt=require("bcryptjs");
// let userLog={
//     email:"greetlag@gmail.com",
//     password:"123456",
// }
// let salt=bcrypt.genSalt(10,function(err,salt){
//     bcrypt.hash(userLog.password,salt,function(err,hash){
//         console.log("newpassword",hash);
        
//         let newLog={...userLog,password:hash};
//         console.log(newLog);
//         if(bcrypt.compare(userLog.password,hash,function(err,res){
//             console.log(res);
//         })){

//         }
        
        
//     })
    
// })
