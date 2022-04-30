const express = require('express');
const minionsRouter = express.Router();

const {
getAllFromDatabase,
getFromDatabaseById,
addToDatabase,
updateInstanceInDatabase,
deleteFromDatabasebyId,
 }  = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if(minion) {
    req.minion = minion;
    req.id = id;
    next();
  } else {
    res.status(404).send();
  }
})

//Get all minions
minionsRouter.get('/', (req, res, next) => {
  const allMinions = getAllFromDatabase('minions');
  res.status(200).send(allMinions);
})

//Get single minions by id
minionsRouter.get('/:minionId', (req, res, next) => {
  res.status(200).send(req.minion);
})

// update minion by id
minionsRouter.put('/:minionId', (req, res, next) => {
  const updateMinion = updateInstanceInDatabase('minions', req.body);
    res.status(200).send(updateMinion);
})

// post new minion
minionsRouter.post('/', (req, res, next) => {
  const addMinion = addToDatabase('minions', req.body);
  if(addMinion){
    res.status(201).send(addMinion);
  } else {
    res.status(404).send;
  } 
})

//delete minion by id
minionsRouter.delete('/:minionId', (req, res, next) => {
  const deletedId = deleteFromDatabasebyId('minions', req.id);
  if(deletedId) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})

module.exports = minionsRouter;
