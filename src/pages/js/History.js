import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { VscGithubInverted } from 'react-icons/vsc';

import WW2_china_37 from '../../imgs/WW2_china_37.png'
import WW2_china_38 from '../../imgs/WW2_china_38.png'
import WW2_china_39 from '../../imgs/WW2_china_39.png'
import WW2_china_40 from '../../imgs/WW2_china_40.png'
import WW2_china_41 from '../../imgs/WW2_china_41.png'
import WW2_china_42 from '../../imgs/WW2_china_42.png'
import WW2_china_43 from '../../imgs/WW2_china_43.png'
import WW2_china_44 from '../../imgs/WW2_china_44.png'
import WW2_china_45 from '../../imgs/WW2_china_45.png'

import WW2_china_cumu from '../../imgs/WW2_china_cumu.png'
import WW2_china_total from '../../imgs/WW2_china_total.png'

function History() {
    return (
        <div>
            <h1>WW2 Data Hobby Project</h1>
            <br />
            <br />
            <br />
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block_hist'>
                    <body>
                        <h3>What is this project?</h3>
                        This project is a visualization of the combatant casualties during WW2 in the chinese theater of war.
                        It plots data from both Japanese and Chinese military's perspective for compare and contrast.
                        <br />
                        <br />
                        <h3>How is this project made?</h3>
                        I gathered the data from 23 major battles fought from 1937 to 1945 and made them into an excel sheet.
                        Then I used R and the shiny library to plot them.
                        <br />
                        <a href="https://github.com/Daiweiliu112/Hobby-Projects.git" target="_blank" rel="noopener noreferrer"> <VscGithubInverted />
                        Check out the repository
                        </a>
                        <br />
                        <br />
                        <h3>What is the goal of this project?</h3>
                        To examine the disparity of Japanese and Chinese reports of casualties. To visualize the casualties across
                        the 23 major battles and match them with other events occuring at the time.




                    </body>
                </div>

            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img
                            src={WW2_china_37}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_38}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_39}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_40}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_41}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_42}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_43}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_44}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_45}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_UW2'>
                        <h1>Casualties by Year</h1>
                        <br />
                        <body>
                            This section shows the casualties of chinese and japanese combatant from 1937 to 1945. There are two bar graph
                            for both Japan and China to take account of different casualty report by the two forces.
                            <br />
                            <br />
                            <strong>Limitation:</strong> Since this is not an academic project and purely a hobby project for me to practice
                            R shiny, the data were collected from Wikipedia pages without further research into their sources. There are instances
                            where I could only find report from one side. In this case, both CR(Chinese Record) and JR(Japanese Record)
                            will equal to whichever record I could find.

                        </body>
                    </div>
                </div>
            </div>


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img
                            src={WW2_china_cumu}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={WW2_china_total}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_UW2'>
                        <h1>Cumulative and Total caualties</h1>
                        <br />
                        <body>
                            This section shows two cumulative graph. The first shows the year specific casualties in a line graph.
                            The second shows the total casualties over the years from 1937 to 1945.

                        </body>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default History