const Card = ({ image, label }) => {
    return (
        <div className="card">
            <div>
                {image ? (
                    <img className="img-card" src={image} alt={label} />
                ) : (
                    <span className="default-icon">{label}</span>
                )}
            </div>
            <h1>{label}</h1>
        </div>
    );
};

export default Card;
