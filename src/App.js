import logo from './logo.svg';
import './App.css';
const number=5555;
const singer={
  name:"mafuz Rahman",
  Job: 'singer'
}
const SingerStyle={
  color:'green',
  backgroundColor:'yellow'
}
function App() {
  return (
    <div className="App">
      <Person name="Shimul Chandra Das" nayika="Porna Paul"></Person>
      <Person name="Shakibal Hassan" nayika="Sumiya Tabassum"></Person>

    </div>
  );
}
function Person(props){
  // return <h1>Banglar King Shakibal Hassan</h1>
  console.log(props)
  return(
    <div className='person'>
    <h1>Name: {props.name}</h1>
    <h1>Nayika: {props.nayika}</h1>
    <p>His Profession is cricketer</p>
    </div>

  )
}

export default App;
