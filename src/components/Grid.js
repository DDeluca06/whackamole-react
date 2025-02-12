import React from 'react'; // Importing React elements
import Mole from './Mole'; // Importing Mole component?

const Grid = ({ grid = [], onMoleClick }) => { // Grid component, takes in grid and onMoleClick as props

  return (
    <div className="game-grid"> 
      {grid.length > 0 ? grid.map((isMole, index) => ( // Maps through the grid, and returns a Mole component for each index

        <Mole
          key={index} // 'Key' becomes our index
          isVisible={isMole}
          onClick={() => onMoleClick(index)} // onClick function that calls onMoleClick with the index
        />
      )) : null}

    </div>
  );
};

export default Grid;
