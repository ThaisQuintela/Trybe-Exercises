import React from 'react';
import './App.css';

const tasks = ['Acordar', 'Passear com o Loki', 'Dar o café da manhã do Loki', 'Tomar café da manhã', 'Iniciar o dia'];

const App = () => (<ul>{ tasks.map(task => <li>{task}</li>) }</ul>);

export default App;
