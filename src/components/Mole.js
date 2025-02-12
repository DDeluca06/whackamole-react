import React from 'react'; // React Import

const Mole = ({ isVisible, onClick }) => { // Starts invisible, and onClick is a function that will be called when the mole is clicked
  return ( // Returns...
    <div  // Div, class name `grid-item`, and if isVisible is true, mole is added to the class name
      className={`grid-item ${isVisible ? "mole" : ""}`}
      onClick={onClick} // Returns onClick function
    />
  );
};

export default Mole; // Export Mole