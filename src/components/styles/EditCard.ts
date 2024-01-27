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
  font-family: 'CustomFont1', sans-serif;
  color: #1A212C;
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: 'CustomFont1', sans-serif;
  color: #1A212C;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-family: 'CustomFont1', sans-serif;
  font-size: 16px;
  padding: 12px;
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid #DDE3E9;
  color: #1A212C;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3B058E;
  }
  &::placeholder {
    color: #999;
  }
`;

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
  margin-top: 20px;
  width: 100%;
  &:hover {
    background-color: #4B169E;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%; 
  &:hover {
    background-color: #ff7875;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'CustomFont1', sans-serif;
  font-size: 24px;
  cursor: pointer;
  color: #000000;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    color: #666;
  }
`;