const Cards = (card) => {
    return ( 
        <>
        <div>
            <h2>{card.title} </h2>
            <p>{card.text} </p>
            <h3>{card.lang} </h3>
        </div>
        </>
     );
}
 
export default Cards;