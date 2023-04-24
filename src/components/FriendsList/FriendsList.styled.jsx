import styled from "styled-components";

export const FriendsUl = styled.ul`
display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 15px;

  margin-top: 50px;
`;

export const FriendsItem = styled.li`
width: 200px;

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 10px 15px;

  border-radius: 10px;
  box-shadow: 0px 0px 10px blue;
  background-color: #fff;
`;