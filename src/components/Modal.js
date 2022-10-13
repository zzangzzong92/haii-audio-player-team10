import styled from 'styled-components';
import { ArrowIcon } from 'utils/icons';

const Modal = ({ toggle, maxRecordTime, changeRecordTime }) => {
  return (
    <Overlay>
      <Wapper>
        <Content>
          <Icon>
            <ArrowIcon onClick={toggle} />
          </Icon>
          <Description>
            <h1>Recording Time Setting</h1>
            <input type="number" onChange={changeRecordTime} />
            <h2>{maxRecordTime} sec</h2>
          </Description>
        </Content>
      </Wapper>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  width: 100%;
  bottom: 50;

  animation: fadeIn 0.9s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const Content = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 30px;

  background-color: #2d2d2d;
`;

const Icon = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  color: white;
  font-size: 30px;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 60px;

  height: 100%;
  width: 100%;

  color: white;
  text-align: center;
  font-weight: 700;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 30px;
  }
`;
