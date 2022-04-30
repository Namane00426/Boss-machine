const express = require('express');
const meetingsRouter = express.Router();

const {
  createMeeting,
getAllFromDatabase,
deleteAllFromDatabase }  = require('./db');


meetingsRouter.use('/', (req, res, next) => {
  const allMeetings = getAllFromDatabase('meetings');
  req.allMeetings = allMeetings;
  next();
})


// get all meetings
meetingsRouter.get('/', (req, res, next) => {
  res.status(200).send(req.allMeetings);
})

// create new meetings
meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting();
  req.allMeetings.push(newMeeting);
  res.status(201).send(newMeeting);
})

// delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
  const deletedAll = deleteAllFromDatabase('meetings');
  if(deletedAll) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})



module.exports = meetingsRouter;
