import { useState, useEffect } from "react";
import { fakeServices, serviceCatgories } from './data';

export const ServiceList = () => {
    const [services, setService] = useState([]);

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (filter === 'all') {
            setService(fakeServices);
            return;
        }

        const filteredData = fakeServices.filter((service) => {
            return service.category === filter
        })

        setService(filteredData);
    }, [filter]);


    return (
        <div>
            <select
                name="categories"
                id="categories"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All</option>

                {serviceCatgories.map((category, index) => (
                    <option value={category} key={index}>{category}</option>
                ))}
            </select>

            <div>
                {services.map((service) => (
                    <p>{JSON.stringify(service.services)}</p>
                ))}
            </div>
        </div>
    );
};