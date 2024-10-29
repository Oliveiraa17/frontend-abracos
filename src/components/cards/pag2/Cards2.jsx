import '../../Styles/CardCarrousel.css'

function Cards2({icon, text}) {
    return(
        <>
            <div className='parte-cards-cima'>
                <div className='img-cards'>
                    <img src={icon} alt="" />
                    <h3>{text}</h3>
                </div>

            </div>        
        </>
    )
}
export default Cards2