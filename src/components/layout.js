
import React,{useState} from "react";
import './layout.css';

function Layout(){
    const [city, setCity]= useState("");
    const [result,setResult] = useState("");
    const changehandler = e =>{
        setCity(e.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${city}&appid=d885aa1d783fd13a55050afeef620fcb
        `).then(
          response=> response.json())
          .then(
            data =>  {
                const kelvin = data.main.temp;
                const celsius = kelvin - 273.15;
                console.log(celsius);
                setResult("Temperature at "+city+"\n"+Math.round(celsius)+"°C");

            }
          )
        //   ).catch(error => console.log(error))
        //   setCity("");
    }
    return (
        <div className="card">
           <br/>
           <br/>
           
              
                <div className="card1">

                <br/>
                <center>
                <h1 style={{color:"white"}}>Weather App</h1>
                   <form onSubmit={submitHandler}>
                    <input type="text" name= "city" value={city} onChange={changehandler}/>
                    <br/>
                    <br/>
                    <input type="submit"value="Get Temperature"/>
                   </form>
                   <br /> <br />
            <div>
               <h1 style={{color:"whitesmoke"}}>{result}</h1> 
            </div>
                   </center>
                 </div>
               
        </div>
    )
}
export default Layout;