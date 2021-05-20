const router = require('express').Router();
const store = require('../db/store');
// const path = require('path');

router.get('/', (req, res) => {
    console.log('get /')
    store
        .getNotes()
        .then((notes) => {
            // console.log("store-get-notes:", notes);
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {
    store
        .addNotes(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
})


module.exports = router;


