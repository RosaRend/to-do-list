const express = require('express');
const router  = express.Router();
const Task    = require('../models/task');


//read
router.get('/task', (req, res, next)=>{
  Task.find()
  .then((allTheTask)=>{
    res.json(allTheTask);
  })
  .catch((err)=>{
    next(err);
  });
});

//create
router.post('/task/create', (req, res, next)=>{
  Task.create({
    title: req.body.title,
    description: req.body.description,
    doneyet: req.body.doneyet
  })
  .then((response)=>{
    res.json(response);
  })
  .catch((err)=>{
    res.json(err);
  });
});


//edit
router.get('/task/:id/edit', (req, res, next)=>{
  const id = req.params.id;
  Task.findById(id)
  .then((theTask)=>{
    res.json(theTask);
  })
  .catch((err)=>{
    res.json(err);
  });
});

router.post('/task/:id/update', (req, res, next)=>{
  const id = req.params.id;
    Task.findByIdAndUpdate(id, {
      title: req.body.title,
      description: req.body.description,
      doneyet: req.body.doneyet
    })
    .then((theTask)=>{
      res.json('task'+ theTask._id)
    })
    .catch((err)=>{
      res.json(err);
    });
});

//Delete
router.delete('/task/:id/remove', (req, res, next)=>{
  const id = req.params.id;

  Task.findByIdAndRemove(id)
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err);
  });
});

//task dets
//edit task
//delete task

//details
router.get('/task/:id', (req, res, next)=>{
  const id  = req.params.id;
  Task.findById(id)
  .then((theTask)=>{
    res.json(theTask);
  })
  .catch((err)=>{
    res.json(err);
  });
});




module.exports = router;