import React from "react";
import styled from "../../typed-components";

const Container = styled.button`
  font-family: "Jura", sans-serif;
  border-radius: 20px;
  min-width: 150px;
  background-color: ${props => props.theme.violetColor};
  color: white;
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.8;
    &:hover {
    }
  }
`;

interface IProps {
  onClick: any;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IProps> = ({
  onClick,
  disabled = false,
  className,
  children
}) => (
  <Container
    type={"submit"}
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Container>
);

export default Button;
