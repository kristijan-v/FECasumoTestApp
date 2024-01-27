import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  background-color: #ffffff;
  padding: 16px;
  text-align: left;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 40px;
  padding-top: 140px; /* Increased padding to account for header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;


export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
 
`;


export const CardButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;


export const Heading = styled.h2`
  color: #3B058E;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 4px;
  
`;

export const Description = styled.p`
  color: #798291;
  font-size: 15px;
  margin-bottom: 16px;
`;

export const CardButton = styled.button`
  background-color: #4C00C2;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  font-weight:
  transition: background-color 0.3s;
  display: inline-block;
  white-space: nowrap;
  min-width: 350px;
`;

