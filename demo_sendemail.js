var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
    	secure: true,
	atuh: {
		user: 'xxxxxxxx@gmail.com',
		pass: 'xxxxx'
	}

});

var mailOptions = {
	from: 'xxxxxxxxx@gmail.com',
	to: 'xxxxxxx@gmail.com',
	subject: "Sending Email Using Node.js",
	text: "That was easy!"
};

transporter.sendMail(mailOptions, function(err, info){
	if(err){
		console.log(err);
	} else {
		console.log('Email sent: ' + info.response);
	}	
});
