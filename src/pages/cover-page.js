import '../App.css';
import React, { Component } from "react";
import cover from '../img/Cover.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CoverPage extends Component {
        render() {
            return (
                <div class="bPage">
                  <img src={cover} id="coverImage"/>
                  
                </div>
            )
        }
}
