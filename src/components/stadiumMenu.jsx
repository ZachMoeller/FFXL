import React, { Component } from "react";
import styled from "styled-components";
import { StadiumData } from "../stadiums";
import { Wrapper } from "./wrapper";

class StadiumMenu extends Component {
  render() {
    let filterStadium = (event) => {
      let search = event.target.value.toUpperCase();
      let stadiumList = document.getElementById("StadiumList");
      let stadiumLi = stadiumList.getElementsByTagName("li");
      for (let i = 0; i < stadiumLi.length; i++) {
        let stadium = stadiumLi[i];
        let stadiumName = stadium.innerText.toUpperCase();
        let teamName = stadium.id.toUpperCase();
        if (stadiumName.indexOf(search) > -1 || teamName.indexOf(search) > -1) {
          stadiumLi[i].style.display = "";
          // console.log(StadiumLi[i]);
          // console.log(search);
          // console.log(teamName);
        } else {
          stadiumLi[i].style.display = "none";
        }
      }
    };

    let searchFocusIn = () => {
      let dropDown = document.getElementById("dropDown");
      dropDown.style.visibility = "visible";
    };

    let searchBlur = () => {
      let dropDown = document.getElementById("dropDown");
      dropDown.style.visibility = "hidden";
    };

    return (
      <Wrapper>
        <StadiumInput
          type="text"
          placeholder="Search for Stadium or Team..."
          onKeyUp={filterStadium}
          onFocus={searchFocusIn}
          onBlur={searchBlur}
        />
        <DropDown id="dropDown">
          <StadiumList id="StadiumList">
            {StadiumData.map((stadium) => {
              return (
                <StadiumContainer id={stadium.Team}>
                  {stadium.Name}
                </StadiumContainer>
              );
            })}
          </StadiumList>
        </DropDown>
      </Wrapper>
    );
  }
}

const StadiumInput = styled.input`
width: 100%;
font-size: 16px;
padding 12px 20px 12px 40px;
border: 1px solid darkgrey;

background-color: grey;

::placeholder{
  color:black;
}
`;
const DropDown = styled.div`
  background-color: #757575;
  padding: 16px;
  font-size: 1rem;
  border: none;
  width: 22%;
  border: 1px solid black;
  visibility: hidden;
`;

const StadiumContainer = styled.li`
  border: 1px solid black;
  margin: 1px;
  &:hover {
    background-color: darkgrey;
    cursor: pointer;
  }
`;

const StadiumList = styled.ul`
  display: none;
  position: relative;
  display: inline-block;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export default StadiumMenu;
