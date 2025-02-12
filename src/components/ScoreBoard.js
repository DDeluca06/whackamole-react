import React from 'react'; // Importing React elements

const ScoreBoard = ({ score }) => { // Scoreboard, takes in score as a prop 
  return ( 
    <div className="scoreboard">
      <h2>Score: {score}</h2> {/* Displays the score */}
    </div>
  );
};

export default ScoreBoard;