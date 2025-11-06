import './ServiceCard.css';

export const ServiceCard = (props) => {
    console.log(props.service)
    return (
        <div className="service-card">
            <p>{props.service.name}</p>
            <p>{props.service.description}</p>
            <p>$ {props.service.price}</p>

            <button>Book</button>
        </div>
    );
};