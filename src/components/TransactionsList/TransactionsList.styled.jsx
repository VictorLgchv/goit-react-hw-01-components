import styled from "styled-components";

export const Table = styled.table`
margin: 0 auto;
    margin-top: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: blue 0px 0px 10px;
    overflow: hidden;
    background-color: white;
`;

export const TableThead = styled.thead`
width: 100%;

`;

export const TableTr = styled.tr`
display: flex;

`;

export const TableTh = styled.th`
width: calc(100% / 3);
padding: 10px 0;
background-color: blueviolet;
color: white;

  &:not(:last-child){
  border-right: 1px solid #adadad;
}
`;

export const TableTbody = styled.tbody`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
`;