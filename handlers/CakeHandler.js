const db = require('../models');

exports.getAllCakes =  (req, res, next) => {

    console.log(req.query);
    if(req.query["baker"] != undefined || req.query["isGlutenFree"]  != undefined)
    {
        if(req.query["baker"] != undefined )
        {
            var mysort = { expirationDate: -1 };

            db.Cake.find(req.query, { _id: 0, name: 1, baker: 1,   expirationDate: 1  }).sort(mysort)
                .then(Cakes => res.status(200).json(Cakes))
                .catch(error => res.status(400).json({ error }));
        }
        if(req.query["isGlutenFree"]  != undefined)
        {
            var i = req.query["isGlutenFree"]=='True' ? true : false ;
            // console.log(i);

            db.Cake.find({"isGlutenFree": i})
                .then(Cakes => res.status(200).json(Cakes))
                .catch(error => res.status(400).json({ error }));
        }

    }
    else
    {
        db.Cake.find()
        .then(Cakes => res.status(200).json(Cakes))
        .catch(error => res.status(400).json({ error }));
    };
}


exports.createCake =(req, res, next) => {
    // console.log(req.body["ingredients"].length);


    if(req.body["ingredients"] != undefined )
    {
        const cake = new db.Cake({
            ...req.body
          });
        cake.save()
            .then(() => res.status(201).json({ message: 'New cake saved !'}))
            .catch(error => res.status(400).json({ error }));

    }
    else{
        res.status(400).json({ "error": "Missing argument ingredient" })
    }


};


exports.getOneCake =  (req, res, next) => {
    db.Cake.findOne({ _id: req.params.id })
        .then(Cake => res.status(200).json(Cake))
        .catch(error => res.status(404).json({ error }));
};

exports.putOneCake =   (req, res, next) => {
    db.Cake.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Cake modified !'}))
      .catch(error => res.status(400).json({ error }));
  };
exports.deleteOneCake =   (req, res, next) => {
    db.Cake.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Cake deleted !'}))
        .catch(error => res.status(400).json({ error }));
};