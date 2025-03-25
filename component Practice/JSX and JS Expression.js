import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle = "Hello World";
const todoData = "Hi, I am Faria Jahan Janie.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() +1; // Fix: Add 1 to get correct month number
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <h1>TO DO App</h1>
     <h3>{todoTitle}</h3>
     <p>{todoData}</p>
     <p>{dateName + "/" + monthName + "/" + currentYear}</p> {/* Fix: Use "/" for proper format */}
   </div>
);

