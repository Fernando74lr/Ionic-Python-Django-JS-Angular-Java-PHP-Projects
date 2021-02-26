var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '----',
    pass: '----'
  }
});

var mailOptions = {
  from: 'Pruebas Labopat',
  to: 'lopezramirez330@gmail.com',
  subject: 'Pruebas Cron Jobs',
  text: 'Estoy usando Firebase para hacer cronjobs.\nYa no sé qué más escribir.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent successfully!')//: ' + info.response);
  }
});