//npm i nodemailer
//import thu vien
const express=require('express');
const mailer=require('nodemailer');
const app43=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'huycbvn159753@gmail.com',
        pass: 'geca iqtv mtho wjzx'
    }
});
//noi dung can gui
let mailOption={
    from: 'huycbvn159753@gmail.com',
    to: 'huyndph40487@fpt.edu.vn',
    subject: 'tesssssssss gui mail',
    text: 'Day la email gui ngay 26/7'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
//lang nghe
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});