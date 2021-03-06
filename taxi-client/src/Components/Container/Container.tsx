import React from "react";
import { fadeIn } from "../../animations";
import bgImage from "../../images/bg.jpg";
import styled from "../../typed-components";

const MainContainer = styled.div`
  height: 100vh;
  background: url(${bgImage}) center no-repeat;
  background-size: cover;
`;

const CenteredFlex = styled.div`
  width: 80%;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VisibleContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  position: relative;
  width: 100%;
  max-width: ${props => props.maxWidth};
  min-height: ${props => (props.minHeight ? props.minHeight : "none")};
  max-height: ${props => (props.maxHeight ? props.maxHeight : "none")};
  background-color: white;
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
    0 -14px 28px rgba(255, 255, 255, 0.22);
  padding: ${props => (props.padding ? props.padding : "0")};
  border-radius: 10px;
  text-align: ${props => (props.textAlign ? props.textAlign : "inherit")};
  overflow: auto;
`;

interface IProps {
  padding?: string;
  minHeight?: string;
  maxHeight?: string;
  textAlign?: string;
  maxWidth?: string;
}

const Container: React.FC<IProps> = ({
  padding = "0",
  minHeight = "none",
  textAlign,
  children,
  maxWidth,
  maxHeight
}) => {
  return (
    <MainContainer>
      <CenteredFlex>
        <VisibleContainer
          textAlign={textAlign}
          minHeight={minHeight}
          padding={padding}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        >
          {children}
        </VisibleContainer>
      </CenteredFlex>
    </MainContainer>
  );
};

export default Container;
export { MainContainer as Layout };
