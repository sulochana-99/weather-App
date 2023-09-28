import React from 'react';
import { useState } from 'react';
import "./App.css"
function App() {
    const [city,setCity] = useState("");
    const [temp,setTemp] = useState("");
    const changeHandler  = ((event)=>{
        setCity(event.target.value)
    })
    const submitHandler= ((event)=>{
        event.preventDefault();
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6badbbed43822301fa435e0cbefa0bd7`).then(
          reponse=>reponse.json()
      ).then(data=>{console.log(data.main.temp)
          setTemp(data.main.temp)}

      );
    })
  return (
    <div>
        <div className="container">
          <div>
            <form style={{marginTop:"100px"}} onSubmit={submitHandler}>
                <input type='text' name='city'  value={city} onChange={changeHandler} className='text' spellCheck='none'/><br></br><br></br>
                <input type='submit'name='temparature' className='button'/>
            </form>
            <h2>{"Temparature is "  +Math.round(temp)+" "+ city+" "}</h2>
            </div>  
        </div>
    </div>
  )
}

export default App;