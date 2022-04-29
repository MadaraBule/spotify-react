import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import {IonIcon} from "react-ion-icon";

const SongList = () => (
    <Container>
<section id="track-list-icons">
<div className="container-fluid">
  <div className="row ml-2">
    <div className="col-11 justify-content-start">
      <span className="ml-2"
        ><span className="hashtag-title">#</span> TITLE</span
      >
    </div>
    <div
      id="time-icon"
      className="col-1 album-col justify-content-end"
    >
      <span className="clock-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clock mr-5 ml-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
          />
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
          />
        </svg>
      </span>
    </div>
  </div>
  <hr className="hr-page" />
</div>
</section>

<section id="album-track-list">
<div className="container-fluid ml-4">
  <div className="row newrow1">
    <div id="album-track-list" className="col-5">
      <div className="ml-3 pb-4">
        <span className="track-num">1.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >20th century fox Fanfare</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">2.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Somebody To Love</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">3.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Doing All Right- ...Revisited</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">4.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Keep Yourself Alive - Live At The Rainbow</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">5.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration">Killer Queen</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">6.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Fat Bottomed Girls - Live In Paris</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">7.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Bohemain Rhaposdy</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">8.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Now I'm Here - Live At The Hammersmith Odeon</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">9.</span>
        <span className="album-song ml-4"
          ><strong className="track-decoration"
            >Creazy Little Thing Called Love</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
      <div className="ml-3 pb-4">
        <span className="track-num">10.</span>
        <span className="album-song ml-4"
          ><strong id="midnigth-protocol" className="track-decoration"
            >Midnigth protocol</strong
          ><br /><span className="singer-name">Queen</span></span
        >
      </div>
    </div>
    <div id="album-music-player" className="col-6">
      <div className="d-flex flex-column"></div>
    </div>
    <div id="track-times" className="col-1">
      <div className="ml-3 pb-5">2:56</div>
      <div className="ml-3 pb-5">4:56</div>
      <div className="ml-3 pb-5">3:16</div>
      <div className="ml-3 pb-5">3:56</div>
      <div className="ml-3 pb-5">2:59</div>
      <div className="ml-3 pb-5">4:37</div>
      <div className="ml-3 pb-5">5:56</div>
      <div className="ml-3 pb-5">4:25</div>
      <div className="ml-3 pb-5">4:25</div>
      <div className="mb-4 ml-3 pb-5">2:43</div>
    </div>
  </div>
</div>
</section>
</Container>
)
export default SongList