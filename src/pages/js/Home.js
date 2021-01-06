import React, { useState } from 'react'
import Hero from '../../comp/js/Hero'
import styled from 'styled-components';
import '../../comp2/css/Card2.css'
import Card2 from'../../comp2/js/Card2.js'

function Home(props) {
    return (
        <div>
            <Hero title={props.title} text={props.text} />
            <Card2/>
        </div>
    )
}

export default Home