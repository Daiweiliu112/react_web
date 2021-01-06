import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import I4H_group from '../../imgs/I4H_group.jpg'
import I4H_group2 from '../../imgs/I4H_group2.jpg'
import NN_group from '../../imgs/NN_group.png'


function Programmer() {
    return (
        <div>
            <h1> Hobby in Coding</h1>
            <br />
            <br />
            <br />
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block_UW'>
                    <body>
                        With my major in statistics, I need to use software such as R and SAS. As I continued to use these software, I
                        begin develop an interest in computer science. I started to take computer science classes on my own volition and
                        went to Hackathons to further develop my interest.
                        <br />
                        <br />
                        These are the coding related event I have partcipated in!

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

                            src={I4H_group}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={I4H_group2}
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
                        <h1>Innovation for Health</h1>
                        <br />
                        <body>
                            During this hackathon, 30 teams will tackle the leading issues in healthcare and bio-technology.
                            The hackathon lasted a month compared to the hackathon which only last 24 hours. The extra time went
                            into designing our product and business model before diving into actual development.
                            <br />
                            <br />
                            It is during this
                            competition that <strong>NIST</strong> came to be. You can check out the details about the project in my Project section!
                        </body>
                    </div>
                </div>


            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Carousel slide={false} fade={true} >
                    <Carousel.Item >
                        <img

                            src={NN_group}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <div className='block_UW2'>
                        <h1>Neuro Nexus</h1>
                        <br />
                        <body>
                            This is a sister hackathon to the Innovation for Health and had a similar set up. It is also done mostly 
                            remotly due to COVID quarantine. Despite the unfavorable conditions, we were ranked as 
                            <strong> Top 3 in industry out of 30 teams.</strong>
                            <br />
                            <br />
                            In this project, we were able to bring our challenge champion's vision of <strong>Tech for Teletherapy</strong> into fruition.
                            You can check out the details in the Project section!
                        </body>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default Programmer