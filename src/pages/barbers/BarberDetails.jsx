import { useEffect, useState } from "react";
import { barberDetails } from "../../statics/barbers";


export const BarberDetails = (props) => {
    const [barberDetail, setBarberDetail] = useState(null);

    useEffect(() => {
        const barber = barberDetails.find(
            detail => detail.id === props.barberId
        );

        setBarberDetail(barber);
    }, [props.barberId]);

    return (
        <div className="barber-details"></div>
    );
};