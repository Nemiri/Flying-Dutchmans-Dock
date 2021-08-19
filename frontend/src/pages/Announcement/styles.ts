import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 82.5vw;
  background-color: var(--pw-background);

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

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
      background: #c5c7cd;
      border-radius: 8px;

      &:hover {
        background-color: #1C64F2;
      }
      
      color: white;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  border: solid #dde0ec 1px;
  border-radius: 4px;
  width: 24%;
  height: 100%;
  background-color: white;
`

export const Table = styled.div`
  background-color: white;
  border: solid #dde0ec 1px;
  width: 100%;
  padding: 32px;
  height: 60vh;
  overflow-y: scroll;

  #data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`