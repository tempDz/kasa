import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import arrowImage from "../../assets/fleche.png";


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
  background-color: #ff6060;
  color: #ffffff;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  margin:0;
`;

const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #FF6060;
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



function Accordion({ title, children, width  }) {
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
