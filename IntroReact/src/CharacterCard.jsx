function CharacterCard (props){
    return(
<div className="character-card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <p>{props.description}</p>
</div>
    );
}

export default CharacterCard;