import '../App.css';
import React, { Component } from "react";
import cover from '../img/Cover.png';
import { Link } from "react-router-dom";

export default class CoverPage extends Component {
        render() {
            return (
                <div class="bPage">
                  <img src={cover} id="coverImage" alt="Welcome to our learning lab on filters in CNNs!"/>
                  <Link to="/1" id="startButton">
                   get started
                  </Link>
                </div>
            )
        }
}
