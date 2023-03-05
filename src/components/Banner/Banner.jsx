import React from "react";
import banner from '../../assets/banner.png';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1240px;
  height: 50vh;
  margin: 50px auto;
  background-color: black;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 80%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: min(4vw, 48px);
  line-height: 142.6%;
  color: #FFFFFF;
  margin: 0;
  white-space: nowrap;
`;



function Banner() {
  return (
    <BannerContainer>
      <BannerImage src={banner} alt="Banner" />
      <BannerText>
        <Title>Chez vous, partout et ailleurs</Title>
      </BannerText>
    </BannerContainer>
  );
}

export default Banner;
