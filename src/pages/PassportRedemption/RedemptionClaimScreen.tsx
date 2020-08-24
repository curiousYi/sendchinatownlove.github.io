import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { InputContainer, Button, FinePrint } from './TrackScreen';

import {
  getOneSponsor,
  getLocationById,
} from '../../utilities/api/interactionManager';

// delete before push or change into proper imports
enum ScreenName {
  Track,
  Redemption,
  Dashboard,
  Passport,
  Claim,
}

interface Props {
  setCurrentScreenView: Function;
}

const PassportRedemptionClaim = ({ setCurrentScreenView }: Props) => {
  const { sponsor_seller_id } = useParams();
  const [selectedReward, setSelectedReward] = useState({
    id: '',
    name: '',
    location: {
      address1: '',
      address2: '',
      borough: '',
      state: '',
      zip_code: '',
    },
    logo_url: '',
    reward: '',
  });

  const fetchData = async () => {
    try {
      const sponsorResponse = await getOneSponsor(sponsor_seller_id);
      const locationResponse = await getLocationById(sponsorResponse.data.id);
      setSelectedReward({
        ...sponsorResponse.data,
        location: locationResponse.data,
      });
    } catch (error) {
      console.error('passport error: ' + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [timeLeft, setTimeLeft] = useState(60 * 5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (!timeLeft) setCurrentScreenView(ScreenName.Redemption);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const sec = time % 60;
    time = (time - sec) / 60;
    const min = time % 60;

    const pad = (val) => val.toString().padStart(2, '0');
    return `${pad(min)}:${pad(sec)}`;
  };

  return (
    <Container>
      <Shadow>
        <InputContainer className="top shadow">
          <Content>
            <Text className="header">{selectedReward.reward}</Text>
            <img src={'logo_url'} alt="reward-logo" width="260px" />
            <br />
            <div>
              <Text className="">{selectedReward.name}</Text>
              {selectedReward && selectedReward.location && (
                <>
                  <Text className="finePrint">
                    {selectedReward.location.address1},{' '}
                    {selectedReward.location.address2}
                  </Text>
                  <Text className="finePrint">
                    {selectedReward.location.borough},{' '}
                    {selectedReward.location.state}{' '}
                    {selectedReward.location.zip_code}
                  </Text>
                </>
              )}
            </div>
          </Content>
        </InputContainer>
        <InputContainer className="bottom shadow">
          <Content>
            <Text className="finePrint red">
              Offer must be used in:
              <span className="bold"> {formatTime(timeLeft)}</span>
            </Text>
          </Content>
        </InputContainer>
      </Shadow>

      <Margin>
        <FinePrint className="center bold red">
          Please show this screen to the host when you are placing your order.
        </FinePrint>
        <Button
          value="redemption-selected-button"
          className="button--red-filled"
          onClick={() => setCurrentScreenView(ScreenName.Redemption)}
        >
          MARK AS USED
        </Button>
      </Margin>
    </Container>
  );
};

export default PassportRedemptionClaim;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin-top: 30px;
`;

const Content = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 15px;
  line-height: 75%;
  text-align: center;

  &.header {
    font-size: 30px;
  }

  &.finePrint {
    font-weight: normal;
    line-height: 25%;
  }

  &.red {
    color: #a8192e;
  }

  .bold {
    font-weight: bold;
  }
`;

const Shadow = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Margin = styled.div`
  margin: 20px;
`;