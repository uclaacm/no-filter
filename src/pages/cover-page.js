import '../App.css';
import React, { Component } from "react";
import cover from '../img/Cover.png';
import { Link } from "react-router-dom";

export default class CoverPage extends Component {
        render() {
            return (
                <div class="bPage">
                  <img src={cover} id="coverImage" alt="no filter learning lab landing page"/>
                  <Link to="/1" id="startButton">
                   get started
                  </Link>
                </div>
            )
        }
}
