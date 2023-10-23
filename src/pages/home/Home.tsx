import HomeBody from 'pages/home/HomeBody';
import HomeHeader from 'pages/home/HomeHeader';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  background-color: var(--Background-White);
  // padding: 0 12px;
  // position: relative;
`;
export default Home;
