import './App.css';
import LandingPage from "./Components/Landing/Landing";
// import team from '';

function App() {

  let team = require('./bestData.json');

  return (
    <>
      <div className="container">
        {<LandingPage data={team}/>}
      </div>
    </>
  );
}

export default App;
