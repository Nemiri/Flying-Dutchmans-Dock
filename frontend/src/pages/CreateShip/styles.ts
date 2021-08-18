import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Form = styled.form`
  padding: 32px;
  width: 100%;
  background-color: white;
  
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: start;
  align-items: center;

  button {
    position: relative;
    height: 2rem;
    width: 8rem;

    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    background: #c5c7cd;
    border-radius: 12px;
    
    &:hover {
      background-color: #1C64F2;
    }

    p {
      color: white;
    }
  }
  
  select {
    margin-top: 8px;
    height: 32px;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: solid #9FA2B4 2px;

    font-weight: normal;
    outline: none;

    &::placeholder {
      font-weight: normal;
    }

    &:focus {
      border-color: #1C64F2;
    } 
  }
  
  input {
    margin-top: 8px;
    width: 100%;
    border: none;
    border-bottom: solid #9FA2B4 2px;

    outline: none;
    
    &::placeholder {
      font-weight: normal;
    }
    
    &:focus {
      border-color: #1C64F2;
    }
  }
  
  .input-div {
    margin: 16px;
  }
`