import './App.css';

function App() {

  const startGame = () => {
    console.log('Starting Game');
}

  return (
    <div className="App">
      <h1>Angry Borgs</h1>
    
      <button onClick={startGame}>Sart Game</button>
    </div>
  );
}

export default App;
