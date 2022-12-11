import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

export const emailRecap = async (req, res) => {
  try {
    let { data } = req.body;
    console.log(req.body);
    console.log(data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: '.handlebars',
        partialsDir: './views/layouts',
        defaultLayout: false,
      },
      viewPath: './views/layouts',
      extName: '.handlebars',
    };

    transporter.use('compile', hbs(handlebarOptions));

    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: 'Merci pour votre participation ! | Alex & Ana 2023',
      template: 'emailRecap',
      context: {
        firstname: data.firstname,
        amount: data.amount,
        message: data.message,
        gift: data.activity,
        type: data.participationType,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log('Error occured: ' + err);
  }
};
