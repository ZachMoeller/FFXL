import React, { Component } from "react";
import styled from "styled-components";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <FfxlLogo>Logo</FfxlLogo>
          <NavigationWrapper>
            <LinkedButton>Weather</LinkedButton>
            <LinkedButton>Rookies</LinkedButton>
            <LinkedButton>Make a League</LinkedButton>
          </NavigationWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 15px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
`;

const FfxlLogo = styled.h2`
  color: #d3d3d3;
`;

const LinkedButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    background-color: #000;
    cursor: pointer;
    color: #d3d3d3;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 25px;
  padding-right: 10px;
`;

export default NavBar;
