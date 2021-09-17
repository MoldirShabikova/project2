import './App.css';
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;


function App() {
  return (
    <div className="App">
  {KEY} {BASE}
    </div>
  );
}

export default App;
