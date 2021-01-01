import React from 'react'
import Card from '../../comp/js/Card'
import { Modal2 } from '../../comp/js/Modal2.js'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



//path issues resolved with absolute path
import profile from '../../imgs/NIST.png'
import NIST from '../../imgs/orientation.png'
import orientation from '../../imgs/profile.png'

import styled from 'styled-components'

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


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seen: false,
            items: [
                {
                    id: 0,
                    text: 'I am studying statistics at University of Waterloo',
                    selected: false,
                    showModal: false
                },

                {
                    id: 1,
                    text: 'I am an aspiring programmer',
                    selected: false,
                    showModal: false
                },

                {
                    id: 2,
                    text: 'I am a history buff',
                    selected: false,
                    showModal: false
                }

                {
                    id: 3,
                    text: 'I am a cooking enthusiast',
                    selected: false,
                    showModal: false
                }

            ]

        }

    }

    handleCardClick = (id, card) => {
        //spread operator automatically iterates all props object
        let items = [...this.state.items];

        // toggling onclick on and off of the cards
        items[id].selected = items[id].selected ? false : true;

        // for loop through the item array so that only one card is selected at once
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        // actually setting state
        this.setState({
            items
        });
    }


    makeItems = (items) => {
        // rendering an array of objects into cards
        // give it an onclick event with e

        return items.map(item => {
            return <Slide item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-around">

                        {this.makeItems(this.state.items)}


                    </Row>

                </Container>




            </div>
        )
    }

}

export default Carousel