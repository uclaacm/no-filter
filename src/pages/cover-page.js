import '../App.css';
import React, { Component } from "react";
import cover from '../img/Cover.png';

export default class CoverPage extends Component {
        render() {
            return (
                <div class="bPage">
                  <img src={cover} id="coverImage" alt="no filter learning lab landing page"/>
                  
                </div>
            )
        }
}
