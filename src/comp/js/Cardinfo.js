import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Modal } from '../../comp/js/Modal.js'
import GlobalStyle from '../../comp/js/GlobalStyle.js'

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
function Cardinfo(props) {

    //declaring a state variable called showModal, intialize with false
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };
    console.log(showModal)

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })


    return (
        <animated.div className="my-card-info" style={style}>
            <p className="my-card-title">{props.title}</p>
            <p className="my-card-text">{props.text}</p>
            <Button onClick={openModal}>I'm a modal</Button>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <GlobalStyle />
        </animated.div>

    )
}

export default Cardinfo