import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: fixed;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    max-width: 90%;
    left: 50%;
    top: auto;
    bottom: 20px;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h2`
  font-family: 'CustomFont1', sans-serif;
  color: #1A212C;
  font-size: 24px;
  text-align: center;
  margin-bottom: 56px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'CustomFont1', sans-serif;
  color: #1A212C;
  font-size: 16px;
  display: block;
  margin-bottom:26px;
  position: relative;
  display: block;

`;


export const Input = styled.input`
  font-family: 'CustomFont1', sans-serif;
  font-size: 16px;
  padding: 15px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid #DDE3E9;
  background-color: transparent;
  display: block;
  width: 100%;
  box-sizing: border-box;
  color: #798291;

  &:focus {
    outline: none;
  }`


export const SubmitButton = styled.button`
background-color: #3B058E;
color: #FFFFFF;
border: none;
padding: 15px 20px;
border-radius: 50px;
font-family: 'CustomFont1', sans-serif;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;
margin-top: 20px; /* Adjust the top spacing as needed */
`;


export const CloseButton = styled.button`
position: absolute;
top: 20px;
right: 20px;
background-color: transparent;
border: none;
font-family: 'CustomFont1', sans-serif;
font-size: 24px;
cursor: pointer;
color: #000000;
padding: 0;

&:hover {
  color: #666;
}
`;
