import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

export const Title = styled.h2`
  font-family: 'CustomFont1', sans-serif;
  color: #32325D;
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'CustomFont1', sans-serif;
  color: #6B7C93;
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
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
  margin-top: 10px; /* Added margin for spacing */

  &:hover {
    background-color: #535BFE;
  }
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


