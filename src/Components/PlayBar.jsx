import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import {IonIcon} from "react-ion-icon";

const PlayBar = () => (
    <footer>
    <Container  style={{color:"white", width:"100%", backgroundColor:"#282828"}}>
    <div className="current-song">
            <div>
                <img src="/assets/images/global/Bildschirmfoto_2022-03-28_um_13.42.07.png" alt=""
                    className ="player-song-picture"/>
            </div>
            <div>
                <div className="artist">
                    <h5 className="player-song-name">Current Song</h5>
                    <span className="player-song-artist">Artist</span>
                </div>
                <div className="actions">
                    <a href="#" className="music-like-btn d-flex">
                        <i className="bi bi-heart fa"></i>
                    </a>
                    <a href="#" className="d-flex">
                        <i className="bi bi-x-lg fa"></i>
                    </a>
                    <a href="#" className="d-flex">
                        <i className="bi bi-pip fa"></i>
                    </a>
                </div>
            </div>
        </div>
        <audio className="audio-play" src="
        /music/surprise.mp3">
        </audio>
        <div className="player-controls">
            <div className="player-controls_buttons">
                <a href="#" className="music-shuffle-btn">
                    <i className="bi bi-shuffle fa"></i>
                </a>
                <a href="#" className="music-prev-btn">
                    <i className="bi bi-skip-start-fill fa-lg"></i>
                </a>
                <a href="#" className="music-play-btn">
                    <i className="bi bi-play-fill fa-2x"></i>
              
                </a>
                <a href="#" className="music-pause-btn">
                    <i className="bi bi-pause-fill fa-2x"></i>
        
                </a>
                <a href="#" className="music-next-btn">
                    <i className="bi bi-skip-end-fill fa-lg"></i>
                </a>
                <a href="#" className="music-repeat-btn">
                    <i className="bi bi-arrow-repeat fa-lg"></i>
                </a>
            </div>
            <div className="progress-container">
                <span className="player-song-seconds">0:00</span>
                <div className="progress-background">
                    <div className="progress-bar" id="song-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <span>3:00</span>
            </div>
        </div>
        <div className="volume-controls mx-2">
            <a href="#" className="d-flex">
                <i className="bi bi-mic fa"></i>
            </a>
            <a href="#" className="d-flex">
                <i className="bi bi-view-list fa"></i>
            </a>
            <a href="#" className="d-flex">
                <i className="bi bi-laptop fa"></i>
            </a>
            <a href="#" className="d-flex">
                <i className="bi bi-volume-up fa"></i>
            </a>
            <div className="volume-progress-container">
                <div className="progress-background mx-1">
                    <div className="progress-bar" id="volume-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>
            <i className="bi bi-arrows-angle-expand fa"></i>
        </div>
</Container>
</footer>
);


export default PlayBar ;