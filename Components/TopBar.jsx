import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {IonIcon} from "react-ion-icon";

const TopBar = () => (
    <Container>
      <Row>
            <div className="col-6">
            <div className="arrows">    
                <i className="arrow1 bi bi-chevron-left text-white"></i>
                <i className="arrow2 bi bi-chevron-right text-white"></i>
            </div>
            
                
             </div> 
            <div className="navbar-col profile-picture-button">
                <div className="">
                   <div className="profile-picture-dropdown d-flex">
                                <i className="bi bi-person-circle pr-3 text-white"></i>
                         <img src="https://picsum.photos/20" alt=""/>
                     <span className="pr-3 text-white">Diego Ziba Ba..</span>
                     <i className="bi bi-caret-down-fill"></i>
                   </div>
                  </div>

                  </div>
                  </Row>
    </Container>
)
export default TopBar