import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  background-color: #cdcdcd;
`;
const NavBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
`;
const NavTitle = styled.div`
  font-size: 32px;
  margin-right: 40px;
`;

const NavItem = styled.div`
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
`;
const Title = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 60px;
  padding: 48px 0 120px 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavTitle>Ray's Blog</NavTitle>
        <NavItem>Home</NavItem>
        <NavItem>Post</NavItem>
        <NavItem>About</NavItem>
        {/* <Link href={'/posts'}>
                    <NavItem>Post</NavItem>
                </Link> */}
      </NavBar>
      <Title>Home</Title>
    </Wrapper>
  );
};

export default Header;
