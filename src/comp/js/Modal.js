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
export const Modal = ({ showModal, setShowModal, props }) => {
    console.log(showModal)
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(0%)`


    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)

        }
    }
    console.log(setShowModal);

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalContent>
                              <br/>
                              <h1>My interest in history</h1>
                                <p><strong>Why do I like history</strong>
                                <br/>
                                While history might have been a boring subject for some when they were in school, it was an intriguing
                                  topic for me. It is fascinating to read about the significant events in the past and how they have impact the current
                                  cultures,technologies and politics. It is also an enjoyable change of pace from my usual dealing of numbers and data.
                                  <br/>
                                  <br/>
                                  <strong>Combining my interests</strong>
                                  <br/>
                                  I have also combined my passion for history and interest in statistics into a hobby project. I attemped to gather
                                  data regarding combatant casulties in the Chinese theater of war during the World War 2. I then plotted the data 
                                  in the time span of 1937 to 1945 to see the trend in casualties and match them with historic events occuring at the time.
                                  The main goal of the project is to compare the Japanese reported casualties and the Chinese reported casualties for further analysis.
                                  <br/>
                                  <br/>
                                  You can check out the more about this in the Project section!
                                </p>
                            </ModalContent>
                        </ ModalWrapper >
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};

