import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  padding: 24px;

  h1 {
    padding-bottom: 24px;
  }
`;

export const ShipAndCargo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

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
    width: 35%;
  }

  #general-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    overflow: scroll;
    max-height: 100%;

    .cell {
      margin: 16px 0;
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
      background-color: #DFE0EB;
    }
  }
`

export const Certificate = styled.div`
  padding: 32px;

  height: 36vh;
  width: 100%;
  background-color: white;

  border-radius: 8px;
  border: solid #dde0ec 1px;

  #checklist-container {
    height: 75%;
    overflow: scroll;
  }
  
  button {
    position: relative;
    height: 60%;
    
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    background: #C5C7CD;
    border-radius: 12px;
    
    p {
      color: white;
    }
  }

  hr {
    border: none;
    background-color: #dde0ec;
    height: 1px;
    width: 100%;
  }

  #header {
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
    background-color: #3751FF;
  }
`