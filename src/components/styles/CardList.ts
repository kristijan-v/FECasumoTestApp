import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  letter-spacing: 0.5px;
  background-color: #FFFFFF;
  padding: 16px 16px 8px;
  text-align: left;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`;


export const ContentContainer = styled.div`
flex-grow: 1;
padding: 40px;
padding-top: 140px;
padding-bottom: 120px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`;

export const CardListAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 24px
  padding-bottom: 100px;

`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 32px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const Heading = styled.h2`
  color: #4C00C2;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-top: 24px;
  padding-left: 32px;
`;

export const Description = styled.p`
  color: #798291;
  font-size: 15px;
  margin-top: 4px;
  padding-left: 32px;
  `

export const CardButton = styled.button`
  background-color: #4C00C2;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  display: inline-block;
  white-space: nowrap;
  min-width: 350px;
`;

export const LogoWrapper = styled.div`
position: absolute;
top: 24px;
right: 56px;

`;
