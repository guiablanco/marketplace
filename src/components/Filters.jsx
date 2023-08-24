'use cleint'
import { useState, useId } from 'react';

//style
import '../styles/filters.css'

const Filters = ({onChange}) => {

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)

        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
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
                min='0'
                max='2000'
                onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Catergoría</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='laptops'>Portátiles</option>
                <option value='smartphones'>Móviles</option>

            </select>
        </div>

        </section>
    );
}

export default Filters;
