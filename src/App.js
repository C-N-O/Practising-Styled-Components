import './App.css';
import Section from './Section';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  color: salmon;
  animation: 5s ${fadeIn} ease-in;
  /* animation: 5s ${rotate} linear infinite; */
`;

//SubTitle is extending Title
const SubTitle = styled(Title)`
  font-size: 16px;
`;

function App() {
  return (
    <div>
      <Title>Progress Tracker</Title>
      <SubTitle>Timer</SubTitle>
      <Section bar='10%' text='M' day='1' />
      <Section bar='80%' text='T' day='2' />
      <Section bar='50%' text='W' day='3' />
      <Section bar='25%' text='T' day='4' />
      <Section bar='75%' text='F' day='5' />
      <Section bar='60%' text='S' day='6' />
      <Section bar='19%' text='S' day='7' />
    </div>
  );
}

export default App;
