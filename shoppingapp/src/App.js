import './App.css';
import Login from './components/Login';

function App() {
  // const bioData = [
  //   {id:0,firstname:"shehbaz",lastname:"waasi",occupation:"react dev"},
  //   {id:1,firstname:"Aditya",lastname:"varma",occupation:"react dev"}
  // ]
  return (
    <div className="App">
      {/* {
        bioData.map((data)=>{
          return <h1>firstname:{data.firstname} , lastname:{data.lastname}, occupation:{data.occupation}</h1>
        }
        )
      } */}
      <Login/>
    </div>
  );
}

export default App;
