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
    comments: ["Este es el primer parrafo de el comentario mandado sobre alguna de las estafas que seran mencionadas en esta super aplicacion, la idea es que el usuario pueda buscar el numero de telefono de una persona y de esta manera, el prodrá ver si es que tiene alguna denuncia de estafa, esta denuncia luego aparecera en la pantalla del iphone.",
  "Este es el segundo parrafo, Este es el primer parrafo de el comentario mandado sobre alguna de las estafas que seran mencionadas en esta super aplicacion, la idea es que el usuario pueda buscar el numero de telefono de una persona y de esta manera, el prodrá ver si es que tiene alguna denuncia de estafa, esta denuncia luego aparecera en la pantalla del iphone."]
  });
}

exports.sendEmail = (req, res) => {
  res.render('sendEmail');
}