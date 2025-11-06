import { useState } from "react";
import { barberServiceCategory } from '../../statics/barber-service-category';


export const ServiceFilter = (props) => {
    const [filter, setFilter] = useState('all');

    const handleOnChange = (event) => {
        const newFilter = event.target.value;

        setFilter(newFilter);
        props.handleFilterChange(newFilter);
    };

    return (
        <select
            name="service-filter"
            id="service-filter"
            value={filter}
            onChange={handleOnChange}
        >
            <option value="all">All</option>

            {barberServiceCategory.map((category, index) => (
                <option value={category} key={index}>{category}</option>
            ))}
        </select>
    );
};