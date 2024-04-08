import './App.css';
import Router from './Router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <Router/>
      </Header>
    </div>
  );
}

export default App;
