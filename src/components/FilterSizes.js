import React from 'react';
import size from '../img/size.png';
import './style/FilterSizes.css';


class FilterSizes extends React.Component {
    render () {
        return (
        <section className = "grey section">
            <div className="card">
                <h2>Click the buttons to see what's up</h2>
                <div class="popup-container">
                    <div className="popup" id="one"></div>
                    <div className="popup" id="two"></div>
                    <div className="popup" id="three"></div>
                    <div className="popup filler" id="filler-one"></div>
                    <div className="popup" id="four"></div>
                    <div className="popup filler" id="filler-two"></div>
                    <div className="popup" id="five"></div>
                    <img src={size} alt="Filters and layers of a CNN" id="size-img"/>
                </div>
            </div>
        </section>
        );
    }
}

export default FilterSizes;

