import deletepokemon from './assets/pokeball-off.svg'

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
   { PokeIndex.map((newPokemon , index) => { return <li key={index}> <h2> {newPokemon} </h2> <img src= {pokemons[index]} alt="" /> <button onClick={()=> {deletePokemon(index)}}><img src={deletepokemon}/></button> </li> })}

    </ul>
        </>
    )
}



export default List