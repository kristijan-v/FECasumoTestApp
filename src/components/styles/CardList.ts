import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Header = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: flex-left;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardListContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const CardButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;

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

