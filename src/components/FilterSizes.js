import React from 'react';
import size from '../img/size.png';


class FilterSizes extends React.Component {
    render () {
        return (
        <section className = "grey section">
            <div className="card">
                <img src={size} alt="Filters and layers of a CNN" id="size-img"/>
            </div>
        </section>
        );
    }
}

export default FilterSizes;

