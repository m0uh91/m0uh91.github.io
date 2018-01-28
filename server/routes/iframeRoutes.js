let routes = require('express').Router();
let Iframe = require('./../config/schema')

// Afficher tout les iframes
routes.get('/all', (req, res) => {
  Iframe.findOne({"iframe": {"url": "addurl"}},
    (err, kitten) => {
      if (err) {
        res.status(200).send(err)
      }
      if (kitten) {  // Search could come back empty, so we should protect against sending nothing back
        res.status(200).send(kitten)
      } else {  // In case no kitten was found with the given query
        res.status(200).send("No kitten found")
      }
    }
  )
})

// Ajouter un iframe
routes.post('/add', (req, res) => {
  console.log()
  new Iframe({
    iframe: {
      url: req.body.url,
      name: req.body.name,
      category: req.body.category
    }
  })
  .save((err, data) => {
    if (err) {
      res.status(500).send("Error " + err)
    } else {
      res.send("Good add with : " + data)
    }
  })
})

// Mettre a jour un iframe
routes.put('/update/:iframeId', (req, res) => {
  Iframe.findById(req.params.id, (err) => {
    let newIframe = new Iframe({
      url: req.body.url,
      name: req.body.name,
      category: req.body.category
    });

    if(err) {
      res.send({message: "Could not find a iframe with id " + req.params.id});
    }
    iframe.save((err, data) => {
      if(err) {
        res.status(500).send({message: "Could not update note with id " + req.params.id});
      } else {
        res.send(data);
      }
    });
  });
})

// Delete a iframe
routes.delete('/delete/:iframeId', (req, res) => {
  Iframe.remove({_id: req.params.iframeId}, (err) => {
    if(err) {
      res.status(500).send({message: "Could not delete note with id " + req.params.id});
    } else {
      res.send({message: "Note deleted successfully!"})
    }
  });
})

module.exports = routes;