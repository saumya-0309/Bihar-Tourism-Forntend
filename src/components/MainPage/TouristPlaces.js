import { Container } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TouristPlaces = () => {
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div style={{ background:'linear-gradient(174deg, rgba(239,222,255,1) 0%, rgba(241,252,225,1) 51%, rgba(255,254,224,1) 100%)', paddingTop: '10px' }}>
            <Container>
                <div>
                    <div className='display-4 font-weight-normal'>Tourist Places</div>
                    <div className='h5'>The Land of Buddhist Culture and Tourism</div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-1 mb-lg-0">
                        <Link to={'/blog/80-feet-buddha'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    src="/80-feet-buddha.jpg"
                                    class="w-100 shadow-1-strong rounded mb-3"
                                    alt="Boat on Calm Water"
                                />
                                {hovered === 1 && (
                                    <div className="overlay">
                                        <div className="overlay-text">80 Feet Buddha</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                        <Link to={'/blog/mahabodhi-temple'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    src="/mahabodhi-temple.jpg"
                                    class="w-100 shadow-1-strong rounded mb-3"
                                    alt="Wintry Mountain Landscape"
                                    height={'430px'}
                                />
                                {hovered === 2 && (
                                    <div className="overlay">
                                        <div className="overlay-text">Mahabodhi Temple</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>

                    <div class="col-lg-4 mb-1 mb-lg-0">
                        <Link to={'/blog/gol-ghar'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    src="/golghar.jpg"
                                    class="w-100 shadow-1-strong rounded mb-3"
                                    alt="Mountains in the Clouds"
                                />
                                {hovered === 3 && (
                                    <div className="overlay">
                                        <div className="overlay-text">Gol Ghar</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                        <Link to={'/blog/metta-buddharam-temple'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    src="/buddharam.jpg"
                                    class="w-100 shadow-1-strong rounded mb-3"
                                    alt="Boat on Calm Water"
                                />
                                {hovered === 4 && (
                                    <div className="overlay">
                                        <div className="overlay-text">Metta Buddharam Temple</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-4 mb-1 mb-lg-0">
                        <Link to={'/blog/nalanda-ruins'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(5)}
                                onMouseLeave={handleMouseLeave}>
                            <img
                                src="/nalanda-ruins.jpg"
                                class="w-100 shadow-1-strong rounded mb-3"
                                alt="Waves at Sea"
                            />
                            {hovered === 5 && (
                                <div className="overlay">
                                    <div className="overlay-text">Nalanda Ruins</div>
                                </div>
                            )}
                            </div>
                        </Link>
                        <Link to={'/blog/shanti-stoop'}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(6)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    src="/santistoop.jpg"
                                    class="w-100 shadow-1-strong rounded mb-3"
                                    alt="Yosemite National Park"
                                    height={'400px'}
                                />
                                {hovered === 6 && (
                                    <div className="overlay">
                                        <div className="overlay-text">Shanti Stoop</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TouristPlaces;