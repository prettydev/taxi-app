import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "../../typed-components";

const Container = styled.div`
  height: 100%;
`;

const SLink = styled(Link)`
  display: block;
  margin-left: 15px;
  margin-bottom: 25px;
  font-size: 22px;
  font-weight: 400;
`;

const Header = styled.div`
  background-color: ${props => props.theme.violetColor};
  height: 20%;
  margin-bottom: 30px;
  padding: 0 15px;
  color: white;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  overflow: hidden;
  background-color: grey;
`;

const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 25px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Rating = styled.h5`
  font-size: 18px;
  line-height: 20px;
  color: white;
`;

const Text = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  align-items: center;
`;

interface IToggleProps {
  isDriving: boolean;
}

const ToggleDriving = styled<IToggleProps, any>("button")`
  -webkit-appearance: none;
  background-color: ${props =>
    props.isDriving ? props.theme.orangeColor : props.theme.blueColor};
  width: 80%;
  margin-left: 10%;
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-family: "Jura", sans-serif;
  box-shadow: ${props =>
    props.isDriving
      ? css`0 2px 25px ${props.theme.orangeColor}`
      : css`0 2px 25px ${props.theme.blueColor}`};
  transition: 0.3s;
  &:hover {
    background-color: ${props => props.theme.violetColor};
    box-shadow: 0 2px 25px ${props => props.theme.violetColor};
  }
`;

const MenuPresenter: React.FC = () => (
  <Container>
    <Header>
      <Grid>
        <Link to={"/edit-account"}>
          <Image
            src={
              "https://scontent.fiev22-2.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129a/p128x128/78024629_421554868471770_4379210489645760512_n.png?_nc_cat=101&_nc_oc=AQmk0a3oLcjRLRxaOI8i1Z5zx_hIrD94Sbo7SZte4YwfjqxWOM8PJJB2IMPf5claA2I&_nc_ht=scontent.fiev22-2.fna&oh=d8ecd571d1977081fa231f188bfda6a2&oe=5E84BDA4"
            }
          />
        </Link>
        <Text>
          <Name>Nuybur Shumshushmekov</Name>
          <Rating>Rating: 4.5</Rating>
        </Text>
      </Grid>
    </Header>
    <SLink to={"/trips"}>My Trips</SLink>
    <SLink to={"/settings"}>Settings</SLink>
    <ToggleDriving isDriving={false}>
      {true ? "Stop driving" : "Start driving"}
    </ToggleDriving>
  </Container>
);

export default MenuPresenter;
