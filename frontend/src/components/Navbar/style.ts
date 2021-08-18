import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--pb-background);
  height: 100vh;
  width: 350px;
`;

export const LogoAndTitle = styled.div`
  height: 18vh;
  margin: 32px 0;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  text-align: center;
  align-items: center;

  h3 {
    color: var(--w-text);
  }

  svg {
    color: #1c64f2;
    margin-top: 1em;
    width: 72px;
    height: 72px;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  list-style-type: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 20px;
    width: 100%;

    background-color: var(--pb-background);
    border: none;

    cursor: pointer;

    p {
      padding-left: 1em;
      color: var(--w-text);
      font-weight: normal;
      font-size: 1.2em;
    }

    svg {
      color: var(--w-text);
    }

    &:hover,
    &:focus {
      border-left-style: solid;
      border-color: var(--wh-text);

      p {
        color: var(--wh-text);
      }

      svg {
        color: var(--wh-text);
      }

      background-color: var(--pbh-background);
    }
  }
`;
