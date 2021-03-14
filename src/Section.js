import React from 'react';
import styled from 'styled-components';

const currDay = new Date().getDay();

const SectionStyle = styled.div`
  margin: 10px;
  border: ${({ day }) =>
    currDay === Number(day) ? '3px solid skyblue' : '3px solid grey'};
  width: 200px;
  border-radius: 8px;
  display: flex;

  &:hover {
    background-color: greenyellow;
  }
`;

const WeekDay = styled.div`
  border-right: 3px solid silver;
  padding: 5px;
  width: 50px;
  height: 100%;
  text-align: center;
  color: green;
  font-size: 25px;
  font-weight: 700;
`;

const WeekEnd = styled(WeekDay)`
  color: blue;
  background-color: orange;
  border-radius: 5px 0 0 5px;
`;

const ProgressBarSection = styled.div`
  width: 250px;
`;

const ProgressBar = styled.div`
  width: ${({ bar }) => (bar ? bar : '0%')};
  text-align: right;
  font-size: 12px;
  height: 100%;

  background-color: ${({ bar }) => {
    if (bar < '25%') return 'rgb(179, 68, 88)';

    if (bar >= '25%' && bar < '75%') return 'rgb(191, 171, 55)';

    if (bar >= '75%') return 'rgb(92, 143, 69)';
  }};
`;

const Section = ({ text, bar, day }) => {
  return (
    <SectionStyle day={day}>
      {text === 'S' ? <WeekEnd>{text}</WeekEnd> : <WeekDay>{text}</WeekDay>}

      <ProgressBarSection>
        <ProgressBar bar={bar}>{bar}</ProgressBar>
      </ProgressBarSection>
    </SectionStyle>
  );
};

export default Section;
