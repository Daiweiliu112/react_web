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
  grid-template-columns: 1fr 1fr;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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
export const Modal3 = ({ showModal3, setShowModal3, props }) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal3 ? 1 : 0,
        transform: showModal3 ? `translateY(0%)` : `translateY(0%)`


    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal3(false)

        }
    }
    console.log(setShowModal3);


    return (
        <>
            {showModal3 ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal3={showModal3}>
                            <ModalContent>
                                <h1>Modal3</h1>
                                <p>This is Modal3</p>
                            </ModalContent>
                        </ ModalWrapper >
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};

export default Modal3

