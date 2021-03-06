import React from "react";
import { MutationFn } from "react-apollo";
import styled from "../../typed-components";
import { VioletButton } from "../Button";

const Container = styled.div`
  text-align: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  max-width: 600px;
  height: 530px;
  z-index: 9;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
`;

const Title = styled.h4`
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

const Data = styled.span`
  color: ${props => props.theme.violetColor};
`;

const Passenger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const CenteredButton = styled(VioletButton)`
  display: block;
  margin: 0 auto;
`;

interface IProps {
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  passengerName: string;
  passengerPhoto: string;
  acceptRideFn: MutationFn;
  id: number;
}

const RidePopUp: React.FC<IProps> = ({
  pickUpAddress,
  dropOffAddress,
  price,
  distance,
  passengerName,
  passengerPhoto,
  acceptRideFn,
  id
}) => (
  <Container>
    <Title>Pick up Address</Title>
    <Data>{pickUpAddress}</Data>
    <Title>Drop off Address</Title>
    <Data>{dropOffAddress}</Data>
    <Title>Price</Title>
    <Data>${price}</Data>
    <Title>Distance</Title>
    <Data>{distance}</Data>
    <Title>Passenger:</Title>
    <Passenger>
      <Image src={passengerPhoto} />
      <Data>{passengerName}</Data>
    </Passenger>
    <CenteredButton onClick={() => acceptRideFn({ variables: { rideId: id } })}>
      Accept Ride
    </CenteredButton>
  </Container>
);

export default RidePopUp;
