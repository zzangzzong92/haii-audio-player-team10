import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 30);
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      {String(Math.floor(timeElapsed / 1000)).padStart(2, '0')}:
      {String(Math.floor((timeElapsed % 1000) / 10)).padStart(2, '0')}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #abb1bd;
  font-size: 20px;
  font-weight: 600;
`;

export default Timer;
