const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const {
getAllFromDatabase,
getFromDatabaseById,
addToDatabase,
updateInstanceInDatabase,
deleteFromDatabasebyId }  = require('./db');


ideasRouter.param('ideaId', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if(!idea) {
    res.status(404).send();
  } else {
    req.idea = idea;
    req.id = id;
    next();
  }
})


// get all ideas
ideasRouter.get('/', (req, res, next) => {
  const allIdeas = getAllFromDatabase('ideas');
  res.status(200).send(allIdeas);
});

//get single idea by id
ideasRouter.get('/:ideaId',  (req, res, next) => {
    res.status(200).send(req.idea);
})

//update idea by id
ideasRouter.put('/:ideaId',  (req, res, next) => {
  const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(updatedIdea);
})

// create new idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const addedIdea = addToDatabase('ideas', req.body);
    res.status(201).send(addedIdea);
})

//delete idea by id
ideasRouter.delete('/:ideaId', (req, res, next) => {
  const deletedId = deleteFromDatabasebyId('ideas', req.id);
  if(deletedId) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})


module.exports = ideasRouter;
