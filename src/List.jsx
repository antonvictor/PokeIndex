

function List(props) {

    let PokeIndex = props.pokeIndex
    let setPokeIndex = props.changePokeIndex
    let pokemons = props.pokemons
    let setPokemons = props.setPokemons

    function deletePokemon(index) {
        const afterPokeIndex = PokeIndex.filter((_, i) =>  {return i !== index} )
        const afterPokemons = pokemons.filter((_,i) => {return i !== index})
       setPokeIndex(afterPokeIndex)
       setPokemons(afterPokemons)
       }




    return(
        <>

<ul>
   { PokeIndex.map((newPokemon , index) => { return <li key={index}>  {newPokemon}  <img src= {pokemons[index]} alt="" /> <button onClick={()=> {deletePokemon(index)}}>Delete</button> </li> })}

   </ul>
        </>
    )
}



export default List