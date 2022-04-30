
// A function if any idea are still worth at least 1million dollars. 
const checkMillionDollarIdea = (req, res, next) => {
  const {weeklyRevenue, numWeeks} = req.body;
  const million = 1000000;
  const yield = Number(weeklyRevenue) * Number(numWeeks); 
  if(!yield || yield < million) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
