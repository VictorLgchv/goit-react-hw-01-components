import styled from 'styled-components';

export const Profile = styled.div`
    width: 300px;
    margin: 30px auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px blue;
    font-family: Consolas;  
`;

export const Description = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 50px 0px;
`;

export const Avatar = styled.img`
display: block;
  height: 150px;
  max-width: 100%;
  border-radius: 50%;
`;

export const Name = styled.p`
margin: 0;

font-weight: 900;
`;

export const Tag = styled.p`
margin: 0;

font-weight: 900;
`;

export const Location = styled.p`
margin: 0;

  color: #858585;
`;

export const Stats = styled.ul`
display: flex;
  padding: 0;
    margin: 0;
  list-style: none;
  height: 50px;
  background-color: #e1e1e1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #adadad;

  li{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3)
  }

  li:not(:last-child){
    border-right: 1px solid #adadad;
  }
`;

export const Label = styled.span`
color: #858585;
`;

export const Quantity = styled.span`
font-weight: 900;
`;