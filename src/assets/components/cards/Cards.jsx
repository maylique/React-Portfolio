import './cards.css'

const Cards = (card) => {
    return ( 
        <>
        <div className='card'>
            <h2>{card.title} </h2>
            <p>{card.text} </p>
            <h3>{card.lang} </h3>
        </div>
        </>
     );
}
 
export default Cards;