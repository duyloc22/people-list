import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: white;
    border-radius: 3%;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
`;
export const Header = styled.h1`
    align-self: flex-start;
    font-size: 1.5rem;
    margin-bottom: 20px;
`;
export const Button = styled.button`
    align-self: flex-start;
    background: #000;
    color: #fff;
    margin-top: 30px;
    padding: 0.75em 1.5em;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
`;
export const PersonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`;
