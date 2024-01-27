import styled from 'styled-components';

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
  color: #1A212C;
  font-size: 24px;
  text-align: left;
  margin-bottom: 64px;
  width: 100%; 
  padding-left: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #1A212C;
  font-size: 16px;
  display: block;
  margin-bottom:26px;
  position: relative;
  display: block;

`;

export const Input = styled.input<{ success: boolean; error: string }>`
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid ${({ success, error }) => (success ? '#19AC51' : error ? '#FC484C' : '#DDE3E9')};
  color: ${({ success, error }) => (success ? '#19AC51' : error ? '#FC484C' : '#1A212C')};
  display: block;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
    font-weight: normal;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  ${({ success }) =>
    success &&
    `
    &::after {
      content: '';
      
      background-size: cover;
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  `}
`;



export const Error = styled.div`
  color: #FF5A5F;
  font-size: 12px;
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
`;

export const SubmitButton = styled.button<{ formValid?: boolean; formError?: boolean }>`
  background-color: #3B058E;
  color: #FFFFFF;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000000;
  padding: 0;

  &:hover {
    color: #666;
  }
`;

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

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-20%);
`;