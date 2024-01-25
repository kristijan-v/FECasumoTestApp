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
  margin-bottom: 4px;
`;

export const Input = styled.input<{ success: boolean }>`
  font-family: 'CustomFont1', sans-serif;
  font-size: 16px;
  padding: 16px;
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid ${({ success }) => (success ? '#4CAF50' : '#DDE3E9')};
  
  display: block;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  ${({ success }) =>
    success &&
    `
    border-color: #4CAF50;
  `}

  /* Position the success icon */
  position: relative;

  /* Style for the success icon */
  & > svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    fill: #4CAF50; /* Icon color for the success state */
  }
`;



export const Error = styled.div`
  color: #FF5A5F;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #666EE8;
  color: #FFFFFF;
  border: none;
  padding: 15px 20px;
  border-radius: 4px;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 999; /* Place the overlay below the popup but above other content */
  display: flex;
  justify-content: center;
  align-items: center;
`;
