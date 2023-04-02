import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from './Map';

const ContactContainer = styled.div({
    height: '100vh',
    'scrollSnapAlign': 'center',
});

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 768px) {
        width: 300px;
    }
`;

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Contact = () => {
    const form = useRef(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g4a39sy', 'template_lnct5jm', form.current || '', 'm7-Aj_2coCbBlw2TT')
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                },
                (error) => {
                    console.log(error.text);
                    setSuccess(false);
                }
            );
    };
    return (
        <ContactContainer>
            <Content>
                <Left>
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea
                            placeholder="Message"
                            name="message"
                            rows={10}
                        />
                        <Button type="submit">Send</Button>
                        {success &&
                            "Thanks you for reaching out, I will get back to you at the soonest :)"}
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Content>
        </ContactContainer>
    );
};

export default Contact;
