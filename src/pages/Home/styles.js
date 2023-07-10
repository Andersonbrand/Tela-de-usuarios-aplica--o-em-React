import styled from "styled-components";
import Background from "../../assets/background-1.svg";


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;

`;

export const Image = styled.img`
    margin-top: 30px;

`;

export const InputLabel = styled.p`
    letter-spacing:-0.408px;
    color: #EEEEEE;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-left: 25px;

`;

export const Input = styled.input`
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 50px;
    font-size: 20px;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 34px;

`;