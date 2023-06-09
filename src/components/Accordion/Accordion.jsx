import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import arrowImage from "../../assets/fleche.png";
import { COLORS, STYLES } from '../../styles/styles';

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  width: ${props => props.width ? `${props.width}%` : '100%'};
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);

  @media screen and (max-width: 768px) {
    height: 30px;
    img {
      width: 15px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-family: ${STYLES.FONT_FAMILY};
  font-style: normal;
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: 24px;
  line-height: 142.6%;
  margin:0;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Text = styled.span`
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT_MEDIUM};
  font-size: 16px;
  line-height: 140%;
  color: ${COLORS.RED};
`;

const AccordionContent = styled.div`
  padding: 0 20px;
  border-radius: 5px;
  background-color: #f7f7f7;
  overflow: hidden;
  max-height: ${props => props.maxHeight}px;
  transition: max-height 0.3s ease-out;
  ${props => !props.isOpen && `
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  `}
`;

function Accordion({ title, children, width }) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <AccordionWrapper width={width}>
      <AccordionHeader isOpen={isOpen} onClick={toggleAccordion}>
        <Title>{title}</Title>
        <img src={arrowImage} alt="flèche" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }} />
      </AccordionHeader>
      <AccordionContent isOpen={isOpen} maxHeight={maxHeight} ref={contentRef}>
        <Text>{children}</Text>
      </AccordionContent>
    </AccordionWrapper>
  );
}

export default Accordion;
