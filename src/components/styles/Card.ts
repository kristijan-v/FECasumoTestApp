import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #3B058E;
  border-radius: 24px;
  padding: 20px;
  width: 320px;
  position: relative;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 16px;
`;

export const BackgroundPattern = styled.div`
  border-radius: 24px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url('/pics/card-background-shape.svg');
  background-size: cover;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  img {
    width: 100px;
    height: 32px;
  }
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  img {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

export const CardNumber = styled.div`
  letter-spacing: 2px;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-start;
`;

export const CardHolder = styled.div`
  font-size: 0.9em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-start;
`;

export const Expiry = styled.div`
  font-size: 0.8em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-end;
`;

export const CVC = styled.div`
  font-size: 0.8em;
  color: #FFFFFF;
  z-index: 999;
  align-self: flex-end;
`;
