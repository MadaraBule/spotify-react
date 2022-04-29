import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Col } from 'react-bootstrap';
import {IonIcon} from "react-ion-icon";
// import './navstyle.css';

const NavBar = () => (
    <Container style={{color:"grey" ,backgroundColor:"#282828"}}>
       <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" style={{height: "25px"}} />
        <ul>
            <li className="list-group-item list-group-item-action active"  style={{backgroundColor:"#282828"}}>
                    <i className="bi bi-house-door-fill fa-2x"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto">
                        Home
                    </span>
            </li>
            <li className="list-group-item list-group-item-action" style={{backgroundColor:"#282828"}}>
                    <i className="bi bi-search fa-2x"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                        Search
                    </span>
            </li>
            <li className="list-group-item list-group-item-action"  style={{backgroundColor:"#282828"}}>
                <a href="/pages/artist.html" className="d-flex">
                    <i className="bi bi-music-note-list fa-2x"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                        Your Library
                    </span>
                </a>
            </li>
            <li className="list-group-item list-group-item-action mt-4"  style={{backgroundColor:"#282828"}}>
                <a href="/index.html" className="d-flex">
                    <i className="bi bi-plus-square-fill fa-2x"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto">
                        Create Playlist
                    </span>
                </a>
            </li>
            <li className="list-group-item list-group-item-action"  style={{backgroundColor:"#282828"}}>
                <a href="/index.html" className="d-flex">
                    <i className="bi bi-suit-heart-fill fa-2x heart"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto">
                    Liked Songs
                    </span>
                </a>
            </li>
            <hr />
            <li>
               <Col>
                    <ol>
                        <li> Bohemian Rhapsody</li>
                        <li>Your Top Songs 2020</li>
                        <li>In Love with you</li>
                        <li>This is Rod Stewart</li>
                        <li>Franchise ft. Young Thug</li>
                        <li>Your Top Songs 2019</li>
                        <li>Palleggio</li>
                        <li>This is Joe Bonamassa</li>
                        <li>Jun19</li>
                        <li>Jack 30th Party 2</li>
                        <li>Jack 30th Party</li>
                        <li>This is Opeth</li>
                        <li>Metal Ballads</li>
                        <li>New Playlist</li>
                        <li>Your Top Songs 2019</li>
                        <li>Legends Never Die</li>
                        <li>Lofi Coders</li>
                        <li>Coding Mode</li>
                        <li>invisible cloud 2022</li>
                        <li>Chill Lofi Study Beats</li>
                    </ol>
                    </Col>
            </li>
            <li className="list-group-item list-group-item-action"  style={{backgroundColor:"#282828"}}>
                <a href="/index.html" className="d-flex">
                    <i className="bi bi-box-arrow-down fa-2x install"> </i>
                    <span className=" justify-content-center text-center mx-3 my-auto install">
                        Install App
                    </span>
                </a>
            </li>
        </ul>
    `;   
    </Container>
)
export default NavBar