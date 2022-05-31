import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  border-left: 1px solid transparent;
  padding-left: 4px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-left: 1px solid;
  }
`;
const Date = styled.div`
  flex: 1;
  font-family: auto;
  font-size: 16px;
`;
const Tag = styled.div`
  margin-right: 38px;
  border: 1px solid;
  padding: 2px 12px;
  border-radius: 6px;
`;
const Title = styled.div`
  flex: 5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const List = ({ post }) => {
  return (
    <Link href={`posts/${post.id}`}>
      <Wrapper>
        <Date>{post.date}</Date>
        <Tag>JavaScript</Tag>
        <Title>{post.title}</Title>
      </Wrapper>
    </Link>
  );
};

export default List;
