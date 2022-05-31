import styled from 'styled-components';
import Header from '../components/Header';
import Block from '../components/Block';
import List from '../components/List';
import { getAllPostData } from '../src/posts';

export async function getStaticProps() {
  const postData = await getAllPostData();
  return {
    props: {
      postData,
    },
  };
}

const Wrapper = styled.div``;
const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Home = ({ postData }) => {
  const navItems = ['HOME', 'POSTS', 'PROFILE'];

  return (
    <Wrapper>
      <Header navItems={navItems} nowPage={'HOME'} />
      <Content>
        <Block title={'POST'}>
          {postData.map((post) => (
            <List post={post} />
          ))}
        </Block>
      </Content>
    </Wrapper>
  );
};

export default Home;
