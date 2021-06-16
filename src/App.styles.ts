import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background-color: #100b61;
  }


  body {
    margin: 0;
    display: flex;
    justify-content: center;
}

* {
    font-family: Helvetica, sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(243, 207, 252);
  border-radius: 16px;
  margin-top: 25%;
  padding: 30px;
  > p {
    color: #fff;
  }

  .score {
    font-size: 25px;
    text-align: center;
    margin: 20px 0;
    background-color: rgb(215, 207, 252);
    padding: 10px;
    border-radius: 10px;
  }

  h1 {
    color: #fff;
    font-weight: 400;
    background-size: 100%;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    font-size: 20px;
    color: rgb(135, 121, 237);
    background: rgb(215, 207, 252);
    border: none;
    border-radius: 10px;
    height: 50px;
    margin: 10% 35%;
    padding: 0 50px;
  }
  .start {
    max-width: 200px;
  }

  .lds-dual-ring {
    display: inline-block;
    margin-left: 200px;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
  }

`;



