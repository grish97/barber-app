import { useState, useEffect } from "react";
import { fakeServices, serviceCatgories } from './data';
import { barberServies } from "../../../statics/barber-serices";
import { ServiceCard } from "../ServiceCard/ServiceCard";

import './ServiceList.css';
import { ServiceFilter } from "../ServiceFilter";

export const ServiceList = () => {
    const [services, setService] = useState(barberServies);

    const [filter, setFilter] = useState('all');

    const handleFilterChange = (filter) => {
        if (filter === 'all') {
            setService(barberServies);
            return;
        }

        const filteredServices = barberServies.filter(
            service => service.category === filter
        );

        setService(filteredServices);
    };

    // useEffect(() => {
    //     if (filter === 'all') {
    //         setService(fakeServices);
    //         return;
    //     }

    //     const filteredData = fakeServices.filter((service) => {
    //         return service.category === filter
    //     })

    //     setService(filteredData);
    // }, [filter]);


    return (
        <div className="services">
            <ServiceFilter handleFilterChange={handleFilterChange} />

            <div className="service-list">
                {services.map((service, index) => 
                    <ServiceCard key={index} service={service} />
                )}
            </div>
        </div>
    );
};