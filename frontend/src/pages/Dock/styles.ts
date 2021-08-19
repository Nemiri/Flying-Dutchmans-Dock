import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;

  #scroller {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  #containerHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

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
      background: #1C64F2;
      border-radius: 8px;

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
`;

export const Table = styled.table`
  width: 100%;
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
    &:hover {
      background-color: var(--pw-background);
    }
  }

  td {
    padding: 24px;
    height: 4vh;
  }

  #delete {
    height: 2em;
    width: 6em;
    margin-top: 3px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    background: #B33A3A;
    border-radius: 4px;

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

  button {
    height: 2em;
    width: 6em;

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
`;
