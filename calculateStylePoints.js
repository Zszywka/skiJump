//takes as a parameter an array of 5 notices of judges and calculates a note for style
const calculateStylePoints = (styleNotes) => {
  styleNotes.sort();
  styleNotes.pop();
  styleNotes.shift();

  let sumNotes = styleNotes.reduce(function(prev, next) {
    return prev + next
  })
  return sumNotes;
};

module.exports = calculateStylePoints;
