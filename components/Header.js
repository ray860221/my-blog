import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d0dded;
`;
const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  max-width: 800px;
  margin: 0 auto;
`;
const NavTitle = styled.div`
  font-size: 32px;
  letter-spacing: 4px;
  margin-right: 40px;
  cursor: pointer;
`;

const NavItem = styled.div`
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid;
  }
`;

const PageTitle = styled.div`
  padding: 20px 0 100px 0;
  max-width: 800px;
  margin: 0 auto;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 5px;
`;

const Header = ({ navItems, nowPage }) => {
  return (
    <Wrapper>
      <NavBar>
        <NavTitle>Ray's Blog</NavTitle>
        {navItems.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))}
        {/* <Link href={'/posts'}>
                    <NavItem>Post</NavItem>
                </Link> */}
      </NavBar>
      <PageTitle>{nowPage}</PageTitle>
    </Wrapper>
  );
};

export default Header;
