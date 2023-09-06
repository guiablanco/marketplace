'use cleint'
import { useState, useId } from 'react';

//style
import '../styles/filters.css'
import useFilters from '@/hooks/useFilters';

const Filters = () => {
    const {filters, setFilters} = useFilters();
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    

    return (
        <section className="filters">

        <div>
            <label htmlFor={minPriceFilterId}>Precio desde:</label>
            <input
                type="range"
                id={minPriceFilterId}
                value={filters.minPrice}          
                min='0'
                max='2000'
                onChange={handleChangeMinPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Catergoría</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='groceries'>Comida</option>
                <option value='home-decoration'>Deco-Hogar</option>
                <option value='smartphones'>Móviles</option>
                <option value='laptops'>Portátiles</option>
                <option value='skincare'>Cuidado Facial</option>
                <option value='fragrances'>Perfumería</option>

            </select>
        </div>

        </section>
    );
}

export default Filters;
