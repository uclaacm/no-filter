import '../App.css';
import React, { Component } from "react";
import cover from '../img/Cover.png'

export default class CoverPage extends Component {
        render() {
            return (
                <div class="b_page">
                  <img src={cover}/>  
                </div>
            )
        }
}
