import styled from "styled-components";

export const TableTr = styled.tr`
display: flex;
    width: 100%;
   &:nth-child(odd){
    background-color: #cccccc;
   }
`;

export const TableTd = styled.td`
padding: 10px 0;
text-align: center;
  width: calc(100% / 3);
  border-top: 1px solid rgb(173, 173, 173);
  &:not(:last-child){
    border-right: 1px solid #adadad;
`;