import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  #scroller {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  
  #header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      position: relative;
      height: 2.5rem;
      width: 16rem;

      border: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      background: #c5c7cd;
      border-radius: 8px;

      &:hover {
        background-color: #1C64F2;
      }
      
      color: white;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  background-color: white;

  text-align: left;
  font-weight: normal;

  border: solid #dde0ec 1px;
  border-collapse: collapse;
  border-radius: 8px;

  tbody {
    max-height: 72vh;
    overflow-y: scroll;
  }

  th {
    font-weight: normal;
    color: #9fa2b4;
    padding: 24px 24px 0 24px;
    height: 2vh;
    border-bottom: 2px solid var(--pw-background);
  }

  tr {
    cursor: pointer;

    &:hover {
      background-color: var(--pw-background);
    }
  }

  td {
    padding: 24px;
    height: 4vh;
  }
`;
