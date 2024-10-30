import { useEffect } from 'react'
import submit from './assets/pokeball.svg'




function Input(props ) {


    let pokemon = props.pokemon
    let setPokemon = props.changePokemon
    let pokeIndex = props.pokeIndex
    let setPokeIndex = props.changePokeIndex
    let pokemons = props.pokemons
    let setPokemons = props.changePokemons


    useEffect(() => {
      const input = document.getElementById("myInput");
  
      const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("btn").click();
        }
      };
  
      input.addEventListener("keypress", handleKeyPress);
  
      return () => {
        input.removeEventListener("keypress", handleKeyPress); // Clean up event listener
      };
    }, []);
   




    function addPokemon(pokemon) {
      if(pokemon.trim() == '') {
        return
      }else{

        setPokeIndex([  pokemon , ...pokeIndex ])

      }
        }
        


        async function getNewPokemon(pokemon) {
          if (pokemon.trim() == '')return;
             try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase())
                  if(!response.ok){
                    throw new Error("Wrong Pokemon Name")
                  }
             const data = await response.json();
             const pokeImg = data.sprites.front_default

            


             setPokemons([   pokeImg , ...pokemons])

             }

              catch (err) {
                setPokemons([  "" , ...pokemons ])

                    console.error(err)
                  }
                  setPokemon("")


        }
    

        function capitalizeFirstLetter(pokemon) {
          return pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase()
        }
 


return(
<>
<div className="input">

<input type="text"
   placeholder='Add your favorite Pokemon' 
   id='myInput'
   onChange={(e)=> {setPokemon(e.target.value)}}
   value={pokemon}
   
   />
   <button className='btn' id='btn' onClick={()=>{addPokemon(capitalizeFirstLetter(pokemon)) ; getNewPokemon(pokemon) ; setPokemon("")}}><img src={submit} alt='submit'/></button>
   </div>

</>

)
} 


export default Input