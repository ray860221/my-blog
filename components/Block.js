import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 28px 0;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 56px;
  letter-spacing: 2px;
  border-bottom: 1px solid #666;
  margin-bottom: 36px;
`;
const ShowMore = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

const Block = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
      <ShowMore>MORE...</ShowMore>
    </Wrapper>
  );
};

export default Block;
