import styled from "styled-components";

export const StyledInput = styled.input`
    text-align: center;
    padding-top: 1rem;
    width: 100%;
    height: 5rem;
    font-weight: 600;
    font-size: 1.4rem;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    background: #f6f6f68a;
    color: #111;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    outline: none;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
