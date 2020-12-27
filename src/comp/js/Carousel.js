import React from 'react'
import Card from '../../comp/js/Card'
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
                    title: 'Tech for Teletherapy',
                    text: 'Improving online speech therapy',
                    selected: false,
                    imgSrc: profile,
                    showModal: true
                },

                {
                    id: 1,
                    title: 'NIST V1',
                    text: 'Raspberry Pi verion',
                    selected: false,
                    imgSrc: NIST,
                    showModal: false
                },

                {
                    id: 2,
                    title: 'NIST V2',
                    text: 'Android mobile version',
                    selected: false,
                    imgSrc: orientation,
                    showModal: false
                }

            ]

        }

    }
    openModal = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].seleted ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items        })

        this.setState(prevState => {
            return {
                
                showModal: !prevState
            }

        })


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
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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