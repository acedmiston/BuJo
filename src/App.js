import './App.css';
import Months from './components/Months';
// import Weeks from './components/Weeks';
import Table from './components/Table';
import Header from './components/Header';


function App() {
  return (
    <div className="App-header">
        <Header />
        <Months />
        <Table />
    </div>
  );
}

export default App;
