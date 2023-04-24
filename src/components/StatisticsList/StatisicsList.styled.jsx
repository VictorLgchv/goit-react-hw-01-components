import styled from "styled-components";

export const Stats = styled.section`
width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 10px blue;
`;

export const Title = styled.h2`
width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0px;
`;

export const StatList = styled.ul`
width: 100%;
  display: flex;
`;

export const StatListItem = styled.li`
width: calc(100% / 5);
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
padding: 10px 0;
`;