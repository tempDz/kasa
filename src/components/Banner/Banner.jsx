import React from "react";
import styled from "styled-components";
import banner from "../../assets/banner.png";
import about from "../../assets/about small.png";
import { useLocation } from "react-router-dom";
import { COLORS, STYLES } from '../../styles/styles';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1240px;
  height: 25vh;
  margin: 0 auto;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    width: 335px;
    height: ${(props) => (props.pathname === "/about" ? "223px" : "111px")};
    border-radius: 10px;
    justify-content: ${(props) =>
      props.pathname === "/about" ? "center" : "flex-start"};
  }
  
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // filter: brightness(40%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.visible {
    opacity: 0.8;
  }

`;

const BannerText = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
  &.visible {
    transform: translateY(0);
  }

  @media screen and (max-width: 480px) {
    width: 217px;
    height: 48px;
    top: 28.04%;
    right: 32.53%;
  } 
`;

const Title = styled.h1`
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: min(4vw, 48px);
  line-height: 142.6%;
  color: #ffffff;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  } 
`;

function Banner() {
  const { pathname } = useLocation();
  const bannerImage = pathname === "/" ? banner : about;
  const [visible, setVisible] = React.useState(false);
  const onImageLoad = React.useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <BannerContainer pathname={pathname}>
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