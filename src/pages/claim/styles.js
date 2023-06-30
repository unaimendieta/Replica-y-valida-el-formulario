import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
    width: 100vw;
    background: #FF7979;
    background-image: url("../../images/bg-intro-desktop.png");
    padding: 125px 165px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 45px;
`;
const TextContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 50px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.521px;
`;
const Caption = styled.p`
    color: #FFF;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
`;
const FormContainer = styled.section`
     height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
const OfferContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #5E54A4;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
`;
const Offer = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.268px;
`;
const OfferSpan = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.268px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
    gap: 20px;
    padding: 40px;
`;
const InputContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const Input = styled.input`
    padding-left: 35px;
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: 1px solid #DEDEDE;
    background: #FFF;
    color: #3D3B48;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.25px;
    &.error{
        border: 2px solid #FF7979;
    }
`;
const Icon = styled.img`
    display: ${props => props.show ? "inital" : "none"};
    position: absolute;
    right: 27px;
    top: 16px;
    height: 24px;
    width: 24px;
`;
const Error = styled.p`
    display: ${props => props.show ? "inital" : "none"};
    width: 100%;
    color: #FF7979;
    text-align: right;
    font-size: 11px;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
`;
const SubmitButton = styled.input`
    width: 100%;
    height: 56px;
    border-radius: 5px;
    background: #77E2B3;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    color: #FFF;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
`;
const TermsText = styled.p`
    color: #BAB7D4;
    text-align: center;
    font-size: 11px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
`;
const TermsTextUrl = styled.a`
    color: #FF7979;
    text-align: center;
    font-size: 11px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    text-decoration: none;
`;

export {MainContainer,Caption,Error,Form,FormContainer,Icon,Input,InputContainer,Offer,OfferContainer,OfferSpan,SubmitButton,TermsText,TermsTextUrl,TextContainer,Title};