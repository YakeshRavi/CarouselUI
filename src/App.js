import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 500px; 
    max-height: 90vh; 
    overflow: hidden;
    border: 1px solid transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Image = styled.div`
    display: flex;
    transition: transform 0.5s;
    height: 100%; 
`;

const PrevNextButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: aquamarine;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: snow;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-style: double;
    cursor: pointer;
    font-size: 3rem;
    z-index: 2;
    ${(props) => props.left && 'left: 10px;'}
    ${(props) => props.right && 'right: 10px;'}
`;

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const LoginButton = styled.button`
    background-color: lightgray;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    border-radius: 10px;
    border: 1px solid transparent;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-size: 2rem;
    margin-right: 10px;
`;

const Carouselui = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const defaultImages = [
        "http://softnenterprise.com/wp-content/uploads/2020/08/softn-enterprises-aboutus.jpg",
        "http://softnenterprise.com/wp-content/uploads/2020/08/softn-enterprise-logo-1.png",
        "https://assets-global.website-files.com/60c234273a10637102110259/63c5c7479cbdefdb29bf9b0c_Agilis_Team_6.jpg",
        "https://assets-global.website-files.com/60c234273a10637102110259/63c5bf23712921b9b6bf2f7b_Agilis_Team_4.png",
        "https://assets-global.website-files.com/60c234273a10637102110259/60c23fdc95f1e720764b7118_Agilis_chemicals_Logo.png"
    ];

    const afterLoginImages = [
        "https://assets-global.website-files.com/60c234273a10637102110259/66180a1668ddf94b36611cf2_Hero%20Image-p-800.png",
        "https://assets-global.website-files.com/60c234273a10637102110259/634d55b2007b7f7cd594134c_westlake-chemical-partners-lp-p-500.jpeg",
        "https://assets-global.website-files.com/60c234273a10637102110259/63c5bedd4fa37e2e9c6658e2_Agilis_Team_1-p-800.png",
        "https://assets-global.website-files.com/60c234273a10637102110259/63c5c50c46467c1413f9c8c7_Agilis_Team_3.jpg",
        "https://assets-global.website-files.com/60c234273a10637102110259/6618068844ea2961cf61910c_Nagase-America-LLC-p-500.png",
    ];

    const imagesToShow = isLoggedIn ? afterLoginImages : defaultImages;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesToShow.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <CarouselContainer>
                <PrevNextButton left onClick={prevImage}>{'<'}</PrevNextButton>
                <PrevNextButton right onClick={nextImage}>{'>'}</PrevNextButton>
                <Image style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {imagesToShow.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} style={{ width: '100%', flex: '0 0 auto' }} />
                    ))}
                </Image>
            </CarouselContainer>
            <ButtonContainer>
                {isLoggedIn ? (
                    <LoginButton onClick={handleLogout}>LOGOUT</LoginButton>
                ) : (
                    <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
                )}
            </ButtonContainer>
        </>
    );
};

export default Carouselui;
