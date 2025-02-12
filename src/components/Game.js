import React, { useState, useEffect } from 'react'; // Importing React elements
import Grid from './Grid';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  // State declarations using useState
  const [score, setScore] = useState(0); // Score is initialized to 0, and setScore is called to update the score
  const [grid, setGrid] = useState(new Array(9).fill(false)); // Grid is initialized to an array of 9 false values, this creates a 3x3 grid. setGrid is called to update the grid state.

useEffect(() => {
  // Function to randomly show a mole
  const highlightMole = () => {
    const newGrid = new Array(9).fill(false); // Create a new grid
    const randomIndex = Math.floor(Math.random() * 9); // Generate a random index between 0 and 8
    newGrid[randomIndex] = true; // Set the mole to true at the random index
    setGrid(newGrid); // Update the grid state
  };

  // Initial mole placement
  highlightMole();

  // Set up interval for mole movement; every second, a new mole will appear
  // const moleTimer = setInterval(highlightMole, 1000);

  // Cleanup function
  // return () => clearInterval(moleTimer); // Clear the interval when the component unmounts
  
}, []); // Empty dependency array means this runs once on mount

// Takes in an index as an argument and checks if the mole was clicked. If the mole was clicked, the score is updated.
const handleMoleClick = (index) => {
  if (grid[index]) { // If the mole is visible at the clicked index
    setScore(score + 1); // Increment the score by 1
    /* ------------------------- WORST CODE EVER WRITTEN ------------------------ */
    const newGrid = new Array(9).fill(false); // Create a new grid
    const randomIndex = Math.floor(Math.random() * 9); // Generate a random index between 0 and 8
    newGrid[index] = false; // Hide the mole at the clicked index
    newGrid[randomIndex] = true; // Set the mole to true at the random index
    setGrid(newGrid); // Update the grid state
    /* ----------------------- WORST CODE EVER WRITTEN END ---------------------- */
  }
};

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <ScoreBoard score={score} /> {/* ScoreBoard component, score is passed as a prop */}
      <Grid grid={grid} onMoleClick={handleMoleClick} /> {/* Grid component, grid and onMoleClick are passed as props */}
    </div>
  );
};

export default Game;