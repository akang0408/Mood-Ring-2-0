import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// body {
//     font-family: 'Assistant', sans-serif;
//     background-image: url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
//     background-size: cover;
//     background-position: center center;
//     text-align: center;
//     background-repeat: no-repeat;
//   }


const mainDivOne = createGlobalStyle`
  text-align: center;
  width: 80%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

const h1 = createGlobalStyle`
  color: rgb(208, 209, 236);
`;

const mainDivTwo = createGlobalStyle`
  text-align: center;
  width: 100%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
  
  h1 {
    color: rgb(208, 209, 236);
  }
`;

const bottomHandles = createGlobalStyle`
  display: inline-block;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  opacity: 0.8;
  padding: 20px;
  text-decoration: none;
  color: rgb(208, 209, 236);
`;

const createForm = createGlobalStyle`
  clear: both;
  text-align: right;
  width: 50%;
  height: 300px;
  margin: auto;
  font-family: 'Assistant', sans-serif;
`;

const Quote = createGlobalStyle`
  font-style: italic;
  font-family: 'Assistant', sans-serif;
  margin-top: 80px;
  width: 60%;
`;


// const SubmitButton = createGlobalStyle`
// margin: auto;
// text-decoration: none;
// border-radius: 20px;
// opacity: 0.6%
// font-size: 20px;
// &:focus {
//   outline: none;
// `;