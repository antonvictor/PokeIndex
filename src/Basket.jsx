import { useEffect, useState } from "react"
import Input from "./Input"
import List from "./List"

function Basket() {


  const [pokemon , setPokemon] = useState("")
  const [pokemons , setPokemons] = useState([])
  const [pokeIndex , setPokeIndex] = useState([])
  
  

useEffect( ()=> {
  fetch("https://official-joke-api.appspot.com/random_joke")
   .then(response => response.json() )
   .then(data => console.log(data.setup , data.punchline) )
   .catch(error => console.error(error))
}, [pokeIndex] )

 


  

    return (
<>
<Input pokemons= {pokemons} changePokemons={setPokemons} pokemon= {pokemon} pokeIndex={pokeIndex} changePokemon = {setPokemon} changePokeIndex ={setPokeIndex}/>
<List  pokemons = {pokemons} setPokemons={setPokemons} pokeIndex= {pokeIndex} changePokeIndex ={setPokeIndex}/>
 </>
    )
}



export default Basket