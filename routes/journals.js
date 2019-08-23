const router = require('express').Router();
let Journal = require('../models/journal.model');

router.route('/').get((req, res) => {
    Journal.find()
        .then(journals => res.json(journals))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const newJournal = new Journal({
        title,
        description
    });

    newJournal.save()
        .then(res => res.json('Journal Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        journal.title = req.body.title;
        journal.description = req.body.description;
  
        journal.save()
          .then(() => res.json('Journal Updated'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
});
router.route('/delete/:id').post((req, res) => {
    Journal.findByIdAndDelete(req.params.id)
      .then(res => res.json('Journal Deleted')
      .catch(err => res.status(400).json('Error: ' + err)
      )
    )
});

module.exports = router;