const PhoneNumber = require('../models/PhoneNumber.js');

exports.buscarComentarios = (req, res) => {

  const phoneNumber = req.query.phoneNumber
  //console.log(phoneNumber)




  PhoneNumber.findOne({
    number: phoneNumber
  })
  .then(phoneNumber => {
    if (!phoneNumber) {
      // console.log(req.query.phoneNumber + ' - sin comentarios')
      res.render('search', {
        title: req.query.phoneNumber,
        comments: ['Sin comentarios asociados a este numero']
      });
    } else {
      // phoneNumber.comments.forEach((comment) => {
      //   console.log(comment)
      // })

      console.log(phoneNumber.comments)
      res.render('search', {
        title: req.query.phoneNumber,
        comments: phoneNumber.comments
      })
    }
  })
  
  .catch(err => {
    console.log('Hubo un error: ' + err)
    res.render('search', {
      title: req.query.phoneNumber,
      comments: ['Hubo un error al intentar buscar los comentarios']
    })
  })
}


exports.getHome = (req, res) => {
  res.render("search", {
    title: "Los comentarios aparecerán aquí",
    comments: ["Al buscar un número de WhatsApp, las denuncias registradas aparecerán aquí.",
  "Si el número no tiene denuncias asociadas, aparecerá el siguiente mensaje:", "\"Sin comentarios asociados a este numero\""]
  });
}

exports.sendEmail = (req, res) => {
  res.render('sendEmail');
}