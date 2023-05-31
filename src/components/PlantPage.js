import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plants , setPlants}) {
  const [searchTerm,setSearchTerm] = useState("")
//  filtering throught the plants and making sure that even if the plant name is put in lower case it will still show in the dom
  const filteredPlants = plants.filter((plant)=>(
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search setSearchTerm = {setSearchTerm}/>
      <PlantList plants = {filteredPlants} />
    </main>
  );
}

export default PlantPage;
