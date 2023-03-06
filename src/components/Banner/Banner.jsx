import React from "react";
import styled from "styled-components";
import banner from "../../assets/banner.png";
import about from "../../assets/about.png";
import { useLocation } from "react-router-dom";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1240px;
  height: 25vh;
  margin: 50px auto;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.visible {
    opacity: 0.8;
  }
`;

const BannerText = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
  &.visible {
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: min(4vw, 48px);
  line-height: 142.6%;
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
`;

function Banner() {
  const { pathname } = useLocation();
  const bannerImage = pathname === "/" ? banner : about;
  const [visible, setVisible] = React.useState(false);
  const onImageLoad = React.useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <BannerContainer>
      <BannerImage
        src={bannerImage}
        alt="Banner"
        className={visible ? "visible" : ""}
        onLoad={onImageLoad}
      />
      {pathname !== "/about" && (
        <BannerText className={visible ? "visible" : ""}>
          <Title>Chez vous, partout et ailleurs</Title>
        </BannerText>
      )}
    </BannerContainer>
  );
}


export default Banner;
