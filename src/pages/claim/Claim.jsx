import { useState } from "react";
import { Caption, Error, Form, FormContainer, Icon, Input, InputContainer, MainContainer, Offer, OfferContainer, OfferSpan, SubmitButton, TermsText, TermsTextUrl, TextContainer, Title } from "./styles";

const Claim = () => {
	const [values,setValues]=useState({
		firts_name:{value:"",error:""},
		last_name:{value:"",error:""},
		email:{value:"",error:""},
		password:{value:"",error:""}
	})
	return (
	<>
        <MainContainer>
            <TextContainer>
                <Title>Learn to code by watching others</Title>
                <Caption>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </Caption>
            </TextContainer>
            <FormContainer>
                <OfferContainer>
                    <Offer><OfferSpan>Try it free 7 days</OfferSpan> then $20/mo. thereafter</Offer>
                </OfferContainer>
                <Form onSubmit={(event)=>handleSubmit(event,values)}>
                    <InputContainer>
                        <Input className={values.firts_name.error!=="" && "error"} name="firts_name" type="text" placeholder="First Name" onChange={event=>handleChange(values,setValues,event)}/>
                        <Icon show={values.firts_name.error!==""} src="../../images/icon-error.svg"/>
                        <Error show={values.firts_name.error!==""}>{values.firts_name.error}</Error>
                    </InputContainer>
                    <InputContainer>
                        <Input className={values.last_name.error!=="" && "error"}  name="last_name" type="text" placeholder="Last Name" onChange={event=>handleChange(values,setValues,event)}/>
                        <Icon show={values.last_name.error!==""} src="../../images/icon-error.svg"/>
                        <Error show={values.last_name.error!==""}>{values.last_name.error}</Error>
                    </InputContainer>
                    <InputContainer>
                        <Input className={values.email.error!=="" && "error"}  name="email" type="text" placeholder="Email Address" onChange={event=>handleChange(values,setValues,event)}/>
                        <Icon show={values.email.error!==""} src="../../images/icon-error.svg"/>
                        <Error show={values.email.error!==""}>{values.email.error}</Error>
                    </InputContainer>
                    <InputContainer>
                        <Input  className={values.password.error!=="" && "error"} name="password" type="password" placeholder="Password" onChange={event=>handleChange(values,setValues,event)}/>
                        <Icon show={values.password.error!==""} src="../../images/icon-error.svg"/>
                        <Error show={values.password.error!==""}>{values.password.error}</Error>
                    </InputContainer>
                    <SubmitButton type="submit" value="CLAIM YOUR FREE TRIAL"/>
                    <TermsText>By clicking the button, you are agreeing to our <TermsTextUrl>Terms and Services</TermsTextUrl></TermsText>
                </Form>
            </FormContainer>
        </MainContainer>
	</>
	);
};
const handleChange = (values,setValues,event) =>{
    let error = ""
	const {name,value} = event.target;
    switch (name) {
        case "firts_name":
                error=checkName(value,"First Name");
            break;
        case "last_name":
                error=checkName(value,"Last Name");
            break;
        case "email":
                error=checkEmail(value);
            break;
        case "password":
                error=checkPassword(value);
            break;
    
        default:
            break;
    }
	setValues({...values, [name]: {value, error}});
}
const handleSubmit = (event) =>{
    event.preventDefault();
}
const checkName =(value,field) =>{
    let error = "";
    if (value==="") {
        error = field + " cannot be empty"
    }
    else if (/[0-9]/.test(value)) {
        error = field + " cannot contain numbers"
    }
    return error;
}
const checkEmail =(value) =>{
    let error = "";
    if (value==="") {
        error = "Email cannot be empty"
    }
    else if (!value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        error = "Looks like this is not an email"
    }
    return error;
}
const checkPassword =(value) =>{
    let error = "";
    if (value==="") {
        error = "Password cannot be empty"
    }else if (value.length<8) {
        error = "Password is too short"
    }else if (!value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{8,16}$/)) {
        error = "Password has to contain at least one number and one special character"
    }
    return error;
}

export default Claim;
