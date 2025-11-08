
export const BarberCard = (props) => {
    return (
        <div className="barber-card">
            <div className="avatar">
                <img src={props.barber.avatar} alt="Barber Avatar" />
            </div>

            <p>{props.barber.name}</p>

            <div>Rating: {props.barber.rating}</div>

            <small className="view-more" onClick={props.onSelect}>View More</small>
        </div>
    );
}