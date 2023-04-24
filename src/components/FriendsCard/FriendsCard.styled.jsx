import styled from "styled-components";

export const Status = styled.span`
width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => p.active ? p.theme.colors.online : p.theme.colors.offline};
`;

export const Avatar = styled.img`

`;

export const Name = styled.p`
font-weight: 700;
`;