import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect ,useState } from "react";

function App() {

   const [plants, setPlants]= useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
        .then (resp => resp.json())
        .then(plants => setPlants(plants))
}, [])


  if (plants.length > 0){
  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants} setPlants = {setPlants}/>
    </div>
  );}
  else {
    return (<div></div>)
  }
}

export default App;
