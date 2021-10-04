import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <Header />
    </div>
  );
}

Header.defaultProps = {
  title: 'ANGRY BORGS'
}

export default App;
