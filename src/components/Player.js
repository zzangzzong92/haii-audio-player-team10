import styled from 'styled-components';
import Timer from './Timer';
import Product from './Product';
import Modal from './Modal';

import { SettingIcon } from 'utils/icons';

const Player = ({
  isRecording,
  handleOnRecording,
  handleOffRecording,
  audioInfo,
  changeRecordTime,
  maxRecordTime,
  isSetting,
  toggle,
}) => {
  return (
    <Wapper>
      <Header>
        <Icon>
          <SettingIcon onClick={toggle} />
        </Icon>
      </Header>
      <Content>
        {audioInfo &&
          audioInfo.map(item => <Product key={item.url} item={item} />)}
      </Content>
      <Footer>
        <IconWapper
          onClick={isRecording ? handleOnRecording : handleOffRecording}
        >
          {isRecording ? '🔴' : '⬛'}
          <TimerWapper>{!isRecording && <Timer />}</TimerWapper>
        </IconWapper>
      </Footer>
      {!isRecording && (
        <RecModal>
          <RecWapper>🔴 Recording...</RecWapper>
        </RecModal>
      )}
      {isSetting && (
        <Modal
          toggle={toggle}
          maxRecordTime={maxRecordTime}
          changeRecordTime={changeRecordTime}
        />
      )}
    </Wapper>
  );
};

export default Player;

const Wapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 500px;
  height: 1000px;

  border: 1px solid white;
  border-radius: 40px;
  background-color: #1b1b1b;
`;

const Header = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 10%;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background-color: black;
`;

const Icon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  color: white;
  font-size: 35px;

  :hover {
    animation: 1.5s animation infinite linear;
  }

  @keyframes animation {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80%;

  overflow: scroll;
`;

const TimerWapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 15%;

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: black;
`;

const IconWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  font-size: 30px;
`;

const RecModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;

  height: 85%;
  width: 100%;

  backdrop-filter: blur(1px);
`;

const RecWapper = styled.div`
  color: black;
  font-weight: 900;
  font-size: 35px;

  color: white;

  animation: motion 1s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 20px;
    }
  }
`;
