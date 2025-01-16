function PokemonCard({pokemonName, image, stats, getEvolutionChain}){
    return (<>
    <div className="pokemon-card">
        <h2 id="pokemonName">{pokemonName}</h2>
        <img id="pokemonSprite" src={image} alt="Pokémon sprite" />
        <div className="stats">
           {
            stats.map(stat => (
                <div key={stat.stat.name} className="stat">
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </div>
            ))
           }
        </div>
        <button onClick={getEvolutionChain}>Load Evolution Chain</button>
        <div id="evolutionChain"></div>
    </div>
    </>)
}

/*
 <div className="stat">
                <strong>{props.stats[0].stat.name}:</strong> {props.stats[0].base_stat}
            </div>
            <div className="stat">
                <strong>{props.stats[1].stat.name}:</strong> {props.stats[1].base_stat}
            </div>
            <div className="stat">
                <strong>{props.stats[2].stat.name}:</strong> {props.stats[2].base_stat}
            </div>
            <div className="stat">
                <strong>{props.stats[3].stat.name}:</strong> {props.stats[3].base_stat}
            </div>
            <div className="stat">
                <strong>{props.stats[4].stat.name}:</strong> {props.stats[4].base_stat}
            </div>
            <div className="stat">
                <strong>{props.stats[5].stat.name}:</strong> {props.stats[5].base_stat}
            </div>

*/

export default PokemonCard;