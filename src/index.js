import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Game from './components/Game.js';

const root = createRoot(document.getElementById('root'));

const App = () => (
  <div className="App">
    <Game />
  </div>
);

root.render(<App />);