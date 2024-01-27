import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #49dad7;
  border-radius: 16px;
  padding: 1em;
  width: 320px;
  height: 200px;
  position: relative;
  font-family: 'CustomFont1', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;


export const BackgroundPattern = styled.div`
  border-radius: 24px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url('/pics/visa-card-background.svg');
  background-size: cover;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  img {
    width: 60px;
    height: auto;
  }
`;


export const EditButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: 24px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const CardNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  
  color: #444E5D;
  position: absolute;
  bottom: 32px;
  left: 24px;
  font-family: 'CustomFont2', sans-serif;
`;


export const CardHolder = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  position: absolute;
  bottom: 64px;
  left: 24px;
`;


export const Expiry = styled.div`
font-size: 20px;
font-weight: bold;
color: #FFFFFF;
position: absolute;
top: 24px;
right: 24px;
padding: 24px 16px; 
`;

export const CVC = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 24px 100px; 
`;
