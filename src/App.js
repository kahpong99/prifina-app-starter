import 'onsenui/css/onsenui-core.css';
import 'onsenui/css/onsen-css-components.css';
import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/prifina.svg";
import ons from "onsenui";
import 'onsenui/esm/elements/ons-page';
import 'onsenui/esm/elements/ons-button';
import 'onsenui/esm/elements/ons-toolbar';
import 'onsenui/esm/elements/ons-navigator';
import 'onsenui/esm/elements/ons-alert-dialog';
import 'onsenui/esm/elements/ons-alert-dialog-button';
import 'onsenui/esm/elements/ons-bottom-toolbar';

import pic from "../src/assets/diabetes_black.png"
import usericon from '../src/assets/user-icon.png';
import bloodicon from '../src/assets/blood-icon.png';
import diagnosisimage from '../src/assets/diagnosis-history.png';
import mealimage from '../src/assets/meal-history.png';
import 'bootstrap/dist/css/bootstrap.css';
import "../src/assets/style.css";
import Line from "./components/Line.js";

import * as Ons from "react-onsenui";
//import Image from "./assets/fingerpori.png";

import { usePrifina } from "@prifina/hooks";
import Faker from "@prifina/faker";

const StyledBox = styled.div`
  height: 100vh;

  padding: 50px;
  background-color: ${(props) =>
    props.colors ? props.colors.baseWhite : "#F5F8F7"};
`;
/*
const StyledImg = styled.img`
  border-radius: 50%;
`;
npm install onsenui react-onsenui --save
*/

//28w 23h
const svgWidth = "60px";
const StyledSVG = styled(Logo)`
  width: ${svgWidth};
  height: calc(${svgWidth} * 23 / 28);
`;

export const App = () => {
  const { currentUser, connector } = usePrifina({
    connectors: [Faker],
  });
  console.log("Logged in user ", currentUser);
  console.log(
    "Faker module methods ",
    connector({ name: "Faker", function: "getInfo" })
  );
  const user = connector({ name: "Faker", function: "getName" });

  console.log(currentUser, user);

  return (
      

      <Ons.Navigator
        renderPage={(route, navigator) =>
          <Ons.Page
            title={route.title}
            onPop={() => navigator.popPage()}  
          >
            
            {/* <ons-toolbar>
              <div className = "center">
                Some toolbaR
              </div>
            </ons-toolbar> */}

            {/* <div style={{ textAlign: "center" }}>
              <StyledSVG />
            </div> */}
            {/*
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <StyledImg src={Image} width={"200px"} />
            </div>
            */}
            {/* <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
            >
              Hello! {currentUser.name}
            </div>
            <div style={{ marginTop: "10px" }}>{JSON.stringify(user)}</div> */}
            <div className="header-box">
              <div className="greeting-field">
                <div className="header__greeting">
                  <div>Good Evening,</div>
                  <div className="user-fullname">{user.firstName} {user.lastName}</div>
                </div>

                <img src={usericon} className="user-icon"></img>
              </div>

              <div className="header-info">
                <div className="diabetes-reading">
                  <div className="reading-label">Average</div>
                  <div className="reading-value">100</div>
                  <div className="reading-unit">mg/dl</div>
                </div>

                {/* <div className="header-borderline"></div> */}

                <div className="diabetes-reading">
                  <div className="reading-label">Deviation</div>
                  <div className="reading-value">30</div>
                  <div className="reading-unit">mg/dl</div>
                </div>

                {/* <div className="header-borderline"></div> */}

                <div className="diabetes-reading">
                  <div className="reading-label">Hyper / Hypo</div>
                  <div className="reading-value">1 / 0</div>
                  <div className="reading-unit"></div>
                </div>

                
              </div>
          
            </div>
            {console.log(JSON.stringify(user))}
            {/* <Ons.Row className="justify-content-md-center">
              <Ons.Col className="d-flex align-items-center justify-content-center">
                <Ons.Button className = "btn btn-secondary btn-sm m-2">
                  Button
                </Ons.Button>
              </Ons.Col>
            </Ons.Row> */}

            {/* <Ons.AlertDialog>
              <div className="alert-dialog-title">Warning!</div>
              <div className="alert-dialog-content">
                An error has occurred!
              </div>
              <div className="alert-dialog-footer">
                <Ons.Button className="alert-dialog-button">
                  Cancel
                </Ons.Button>
                <Ons.Button className="alert-dialog-button">
                  Ok
                </Ons.Button>
              </div>
            </Ons.AlertDialog>
            <ons-button>button</ons-button> */}

            <div className="date-range">
              <div className="date-range__label">Select Date Range</div>
              <div className="date-range__divider"></div>
              <div className="date-range__value">12 May 2022 <br/> 12 Jun 2022</div>
              <div>TO</div>
            </div>

            <div className="graph-container">
              <Line></Line>

            </div>

            {/* <div className="diabetic-status">
              <div className="diabetic-status__label">Blood Sugar Level</div>
            style={{backgroundImage: `url(${diagnosisimage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px' }}
              <div className="diabetic-status__value">10.6%</div>
            </div> */}

            <div className="other-tools">
              <div style={{backgroundImage: `url(${diagnosisimage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px', width: '47%', backgroundPosition: '50%'}}><div className="diagnosis-history">Diagnosis History</div></div> 
              <div style={{backgroundImage: `url(${mealimage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px', width: '47%', backgroundPosition: '50%'}}><div className="meal-history">Dietary Plan</div></div> 
            </div>

            <Ons.BottomToolbar modifier="material" className="bot-toolbar">
              <Ons.Button className="diagnose-now"><img src={bloodicon} className="blood-icon"></img></Ons.Button>
            </Ons.BottomToolbar>
            

          </Ons.Page>
        }
        initialRoute={{
            title: 'First Page'
        }} 
      />


    
  );
};
