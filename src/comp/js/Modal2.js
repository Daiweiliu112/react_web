import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const Background = styled.div`

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 20 fr 2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  margin-left:3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

// did not put curly brace around showModal, setShowModal, causing the popup to always appear
export const Modal2 = ({ showModal2, setShowModal2, props }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal2 ? 1 : 0,
    transform: showModal2 ? `translateY(0%)` : `translateY(0%)`


  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal2(false)

    }
  }
  console.log(setShowModal2);


  return (
    <>
      {showModal2 ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal2={showModal2}>
              <ModalContent>
                <h1>My work as a tutor</h1>
                <p> I work part time as a tutor for Tutor Doctor. I tutor from grade 11 math to first year university computer science.
                  <br/>
                  <strong>Why am I passionate about tutoring.</strong>
                  <br/>
                  I gained my passion for tutoring during my first year of math degree at University of Waterloo. I found the tutorial
                  center in MC building extremely  helpful and aided me through many hardships during my first year. Thus, I hoped that I 
                  can also help struggling students by teaching them about the mistake I have made and the strategies I have formulated.
                  <br/>
                  <br/>
                  <strong>Moving forward</strong>
                  <br/>
                  I have recieved many positive feedback from families and also have recieved recommendation by the student I tutored.
                  However, my own study schedule limits the number of students I am able to work with, especially when approaching exam season.
                  Thus, it is my goal to teach my students to study and problem solve independently. I believe my job as a tutor is to make sure
                  my students no longer need my help.
                  
                </p>

              </ModalContent>
            </ ModalWrapper >
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

