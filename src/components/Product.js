import styled from 'styled-components';

const Product = ({ item }) => {
  const { name, createAt, url } = item;
  return (
    <Wapper>
      <Info>
        <Title>{name}</Title>
        <CreateAt>{createAt}</CreateAt>
      </Info>
      <audio controls>
        <source src={url} />
      </audio>
    </Wapper>
  );
};

export default Product;

const Wapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 15px;

  border-bottom: 2px solid black;
  color: ${({ theme }) => theme.colors.white};
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 5px;
`;

const Title = styled.div``;

const CreateAt = styled.div``;
