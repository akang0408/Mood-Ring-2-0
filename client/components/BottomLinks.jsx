/****************************\
*                            *
*  Bottom Links: Our Git     *
*  Hub handles that display  *
*  on the bottom of the page *
*                            *
\****************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

class BottomLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="linksDiv">
        <h1 style={{ textAlign: 'center' }}>Made By: </h1>
        <bottomHandles href="https://github.com/null267" target="_blank">
          @null267 
        </bottomHandles>
        <bottomHandles href="https://github.com/akang0408" target="_blank">
          @akang0408
        <bottomHandles>
        <bottomHandles href="https://github.com/kelvinscuesta" target="_blank">
          @kelvinscuesta
        </bottomHandles>
        <bottomHandles href="https://github.com/sophjean" target="_blank">
          @sophjean
        </bottomHandles>
      </div>
    );
  }
}

export default BottomLinks;
