import { useState } from "react";
import { barbers } from '../../statics/barbers';
import { BarberCard } from "./BarberCard";
import './Barbers.css';
import { BarberDetails } from "./BarberDetails";


export const BarberList = () => {
    const [barberList, setBarberList] = useState(barbers);
    const [selectedBarber, setSelectedBarber] = useState(null);

    return (
        <div>
            <div className="barber-list">
                {barberList.map((barber, index) => 
                    <BarberCard
                        key={index}
                        barber={barber}
                        onSelect={() => setSelectedBarber(barber.id)} 
                    />
                )}
            </div>

            {selectedBarber && <BarberDetails barberId={selectedBarber} />}
        </div>
    );
};