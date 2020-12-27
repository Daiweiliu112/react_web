import React, { useState } from 'react'
import Hero from '../../comp/js/Hero'
import styled from 'styled-components';
import '../../comp2/css/Card2.css'
import Card2 from'../../comp2/js/Card2.js'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
function Home(props) {
    return (
        <div>
            <Hero title={props.title} text={props.text} />
            <Card2/>
        </div>
    )
}

export default Home