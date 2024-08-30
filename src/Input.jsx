
function Input(props ) {


    let pokemon = props.pokemon
    let setPokemon = props.changePokemon
    let pokeIndex = props.pokeIndex
    let setPokeIndex = props.changePokeIndex
    let pokemons = props.pokemons
    let setPokemons = props.changePokemons

    function addPokemon(pokemon) {
      setPokeIndex([ ...pokeIndex , pokemon])
        }
        


        async function getNewPokemon(pokemon) {
             try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase())
                  if(!response.ok){
                    throw new Error("Wrong Pokemon Name")
                  }
             const data = await response.json();
             const pokeImg = data.sprites.front_default

            


             setPokemons([...pokemons ,  pokeImg])

             }

              catch (err) {
                setPokemons([...pokemons ,  ""])

                    console.error(err)
              }


        }
    

        function capitalizeFirstLetter(pokemon) {
          return pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase()
        }
 
        

return(
<>
<input type="text"
   placeholder='Add your favorite Pokemon' 
   onChange={(e)=> {setPokemon(e.target.value)}}
   value={pokemon}

   />
   <button className='btn' onClick={()=>{addPokemon(capitalizeFirstLetter(pokemon)) ; getNewPokemon(pokemon) ; setPokemon("")}}>Submit</button>

</>

)
} 


export default Input