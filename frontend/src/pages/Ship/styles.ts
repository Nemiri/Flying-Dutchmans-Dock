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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShipAndCargo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 55vh;
`

export const ShipInfo = styled.div`
  margin-right: 10px;
  
  height: 48vh;
  width: 50%;
  background-color: white;

  border-radius: 8px;
  border: solid #dde0ec 1px;
`

export const CargoInfo = styled.div`
  margin-left: 10px;
  
  height: 48vh;
  width: 50%;
  background-color: white;

  border-radius: 8px;
  border: solid #dde0ec 1px;
`

export const Certificate = styled.div`
  margin-top: 20px;
  
  height: 100%;
  width: 100%;
  background-color: white;
  
  border-radius: 8px;
  border: solid #dde0ec 1px;
`