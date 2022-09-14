import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
// const App=()=>{
//   const[temperatureValue,setTemperatureValue]=useState(72);
// return(<div className='app-container'>
// <div className='temperature-display-container'>
//   <div className='temperature-display'>{temperatureValue}C</div>
//   </div>
//   <div className='button-container'>
//   <button onClick={()=>setTemperatureValue(temperatureValue+1)}>+</button>
//   <button onClick={()=>setTemperatureValue(temperatureValue-1)}>-</button>
 

//   </div>
// </div> );
// }

 const App =() =>{
   const [temperatureValue, setTemperatureValue]=useState(20);
   const [temperatureColor,setTemperaturecolor]=useState("cold")
  const increaseTemperature =() =>{
   // setTemperatureValue(temperatureValue+1)
    const newTemperature = temperatureValue+1;
    if(newTemperature>15){
     setTemperaturecolor('hot');
    }
   setTemperatureValue(temperatureValue+1)

   };
   return(
  
    <div className='app-container'>
     <div className='temperature-display-container'>
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}C</div>
    </div>
    <div className='button-container'>
    <button
    onClick={()=> increaseTemperature()}>+</button>
     <button 
      onClick={()=>setTemperatureValue(temperatureValue-1)}>-</button>

     </div>
    </div>
   )
}
ReactDOM.render(<App/>,document.querySelector('#root'));
//   https://temperatureappusingstatefulcomponents.netlify.app