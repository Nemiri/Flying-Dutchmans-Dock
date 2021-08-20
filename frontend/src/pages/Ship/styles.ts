import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 24px;

  h1 {
    padding-bottom: 24px;
  }

  button {
    height: 2em;
    width: 10em;

    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    background: #1C64F2;
    border-radius: 4px;
    
    &:disabled {
      background-color: #dde0ec;
      
      &:hover {
        background-color: #dde0ec;
      }
    }

    &:hover {
      background-color: #133f96;
    }

    color: white;
  }

  #delete{
    height: 2em;
    width: 10em;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    background: #FF0000;
    border-radius: 4px;
    margin-top: 15px;
    
    &:disabled {
      background-color: #dde0ec;
      
      &:hover {
        background-color: #dde0ec;
      }
    }

    &:hover {
      background-color: #B90E0A;
    }

    color: white;
  }
`;

export const ShipAndCargo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 32px;

  height: 44vh;
  width: 49%;
  background-color: white;

  border-radius: 8px;
  border: solid #dde0ec 1px;
  
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h2, p {
      align-self: start;
    }
  }

  #general-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;
    max-height: 100%;

    #cells {
      width: 100%;
    }

    .cell {
      margin: 8px 0;
      width: 100%;
      text-align: center;

      h3 {
        padding-bottom: 16px;
      }
    }

    hr {
      width: 100%;
      border: none;
      height: 1px;
      background-color: #dfe0eb;
    }
  }
  
  #add-cargo {
    align-self: end;
  }
`;

export const Certificate = styled.div`
  padding: 32px;
  margin-top: 1.25rem;

  height: 36vh;
  width: 100%;
  background-color: white;

  border-radius: 8px;
  border: solid #dde0ec 1px;

  .certificated {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    h2,
    p {
      margin-left: 16px;
    }
  }

  svg {
    width: 64px;
    height: 64px;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;

    #checklist-container {
      height: 100%;
      overflow: scroll;
    }
  }

  hr {
    border: none;
    background-color: #dde0ec;
    height: 1px;
    width: 100%;
  }

  #certification-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  
  .checklist {
    margin: 8px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .checkbox {
    margin: 8px 16px 8px 0;
    width: 1.7em;
    height: 1.7em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: solid #dde0ec 3px;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .checkbox:checked {
    border: none;
    background-color: #3751ff;
  }
`;
