import React from 'react';
import styled from "styled-components";

const Spinner = styled.div`
  width: 100px;
  color:  #1F2833;
  align-self: center;
  font-size: 1.2rem;
  margin-top: 30px;
`

const LoadingSpinner = () => (
  <Spinner>
    <i className="fa fa-spinner fa-spin" /> Loading...
  </Spinner>
);

export default LoadingSpinner;