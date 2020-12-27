import React from 'react'
import ReactPlayer from "react-player"


function Project1() {
    return (
        <div>
            <h1>Tech for Teletherapy</h1>

            <br />
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div className='block3'>
                    <body>

                        This project is from the 2020 Neuro Nexus hackathon based in Calgary and Edmonton.
                        <br />
                        <br />
                        <h3>My role in the project</h3>
                        <ul>
                            <li>Software Team Lead</li>
                            <li>Managing the django database and server</li>
                            <li>Supervision of team member's code for successful integration</li>
                            <li>Created the customization function for the web application</li>
                        </ul>

                    </body>
                </div>
            </div>
            <h3 style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>This is our 1 minute pitch video</h3>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ReactPlayer
                    url = 'https://youtu.be/zHXHlL4x61o'
                    width={800}
                    height={600}
                />
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
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=AWH19rbASBE'
                    width={800}
                    height={600}
                />
                <div className='block'>
                    <h1>Interactive Voice Games</h1>
                    <br />
                    <body>The web application includes a series of preset games that
                    test the precision of pronounciation. Once the word is pronounced
                    correctly, the game will give visual and sound feedback.
                    <br />
                        <br />
                    There is a also non-verbal version that responses to any sound for the
                    patients that struggles to pronounce the correct word.
                    <br />
                        <br />
                    This is done through a web speech API on chrome and javascript.
                    </body>
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
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=eEZFCMIPHFo'
                    width={800}
                    height={600}
                />

                <div className='block'>
                    <h1>Customizable Game</h1>
                    <br />
                    <body>The voice game also allows customization by the clinician. The clinician
                    can upload their own images and input the words they would like their patient
                    to practice on.
                    <br />
                        <br />
                    This is done through python and the django database and only open to clinican accounts.
                    </body>
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
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=YxXsBJ1BZfU'
                    width={800}
                    height={600}
                />

                <div className='block'>
                    <h1>Data Collection</h1>
                    <br />
                    <body>The clinician can also record the details of a session for later use. Currently, the website export the data
                    directly into the clinician's device. We are currently working to set up the django database to collect data instead.
                    Once the database is set up, we hope to implement data analysis function to advise the clinician.
                    <br />
                        <br />
                    The export to csv function is done by javascript.
                    </body>
                </div>




            </div>




        </div>

    )
}

export default Project1