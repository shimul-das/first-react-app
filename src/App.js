import logo from './logo.svg';
import './App.css';
const number=5555;
// const singer={
//   name:"mafuz Rahman",
//   Job: 'singer'
// }
const singers=[
  {name:"mafuz Rahman",Job: 'singer'},
  {name:"mafuz Rahman",Job: 'singer'},
  {name:"mafuz Rahman",Job: 'singer'},
  {name:"mafuz Rahman",Job: 'singer'}
]
const SingerStyle={
  color:'green',
  backgroundColor:'yellow'
}
function App(){
const nayioks = ['shakib khan','bapparaz','josim','rubel','riyaz','razzak'];

  return (
    
    <div className="App">
      {/* {
        nayioks.map(nayiok => <li>Name: {nayiok}</li>)
      }
      {
        nayioks.map(nayiok => <Person name={nayiok}></Person>)
      } 
      */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name="Shimul Chandra Das" nayika="Porna Paul"></Person>
      <Person name="Shakibal Hassan" nayika="Sumiya Tabassum"></Person> */}
      {/* <Person name={nayioks[0]} nayika="Porna Paul"></Person>
      <Person name={nayioks[1]} nayika="Sumiya Tabassum"></Person>  */}

    </div>
  );
}
// function Person(props){
//   // return <h1>Banglar King Shakibal Hassan</h1>
//   console.log(props)
//   return(
//     <div className='person'>
//     <h1>Name: {props.name}</h1>
//     <h1>Nayika: {props.nayika}</h1>
//     <p>His Profession is cricketer</p>
//     </div>

//   )
// }

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
