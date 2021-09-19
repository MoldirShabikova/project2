import './App.css';
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = "https://api.airtable.com/v0/appdtddwvXlZlECIz/todo"

function App() {
  return (
    <div className="App">
  {KEY} {BASE}
    </div>
  );
}

export default App;
