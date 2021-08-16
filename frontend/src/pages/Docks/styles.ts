import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  overflow: scroll;
  
  width: 92.5%;

  h1, h2 {
    padding: 18px 0;
  }
  
  #table-header {
    width: 77.5vw;
    position: absolute;
    background: var(--pw-background);
  }
`

export const Table = styled.table`
  max-height: 85vh;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  
  margin-top: 172px;

  text-align: left;

  border-collapse: collapse;
  
  font-weight: normal;
  
  th {
    font-weight: normal;
    color: #9FA2B4;
    padding: 24px 24px 0 24px;
    height: 2vh;
    border-bottom: 2px solid var(--pw-background);
  }
  
  td {
    padding: 24px;
    height: 5vh;
  }
`