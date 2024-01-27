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
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: 90vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    max-width: 90%;
    top: auto;
    bottom: 20px;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h2`
  color: #1A212C;
  font-size: 24px;
  text-align: left;
  margin-bottom: 24px;
  width: 100%; 
  padding-left: 32px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  color: #1A212C;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid #DDE3E9;
  color: #798291;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3B058E;
  }
`;

export const SubmitButton = styled.button`
  background-color: #4C00C2;
  color: #FFFFFF;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  width: 100%;
  &:hover {
    background-color: #4B169E;
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  color: #D3D8E1;
  border: none;
  font-weight: bold;
  padding: 16px 24px;
  cursor: pointer;
  margin-top: 4px;
  width: 100%; 
  
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000000;
  position: absolute;
  top: 16px;
  right: 24px;
  }
`;

export const CardPreviewWrapper = styled.div`
transform-origin: center;
margin-bottom: 34px;
`;