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
`;

export const ShipAndCargo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 55vh;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 32px;
  margin-right: 10px;
  
  height: 48vh;
  width: 50%;
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
  margin-top: 20px;
  
  height: 100%;
  width: 100%;
  background-color: white;
  
  border-radius: 8px;
  border: solid #dde0ec 1px;
`