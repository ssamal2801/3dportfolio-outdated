import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import TechStack from './TechStack';
import './styles.scss';

const ContactContainer = styled.div`
    height: 100vh;
    @media only screen and (max-width: 768px) {
        scroll-snap-align: none;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

const Left = styled.div`
    width: 60%;
    padding: 2rem;
    margin: auto;
`;

const Right = styled.div`
    padding: 2rem;
    margin: auto;
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 2rem;
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

const Contact = () => {
    const form = useRef(null);
    const [success, setSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!formData.name) {
            setFormErrors({ ...formErrors, name: 'error' });
            return;
        }
        if (!formData.email.match(emailFormat)) {
            setFormErrors({ ...formErrors, email: 'error' });
            return;
        }
        if (!formData.message) {
            setFormErrors({ ...formErrors, message: 'error' });
            return;
        }
        emailjs
            .sendForm(
                'service_g4a39sy',
                'template_lnct5jm',
                form.current || '',
                'm7-Aj_2coCbBlw2TT'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                    e.target.reset();
                    setFormErrors({ name: '', email: '', message: '' });
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
                    <h3>Languages and Tools</h3>
                    <TechStack />
                </Left>
                <Right>
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input
                            className={formErrors.name ? 'error' : ''}
                            placeholder={
                                formErrors.name
                                    ? 'Name cannot be empty'
                                    : 'Name'
                            }
                            name="name"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                });
                            }}
                            onClick={() =>
                                setFormErrors({
                                    ...formErrors,
                                    name: '',
                                })
                            }
                        />
                        <Input
                            className={formErrors.email ? 'error' : ''}
                            placeholder={
                                formErrors.email
                                    ? 'Invalid email address'
                                    : 'Email'
                            }
                            name="email"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                });
                            }}
                            onClick={() =>
                                setFormErrors({
                                    ...formErrors,
                                    email: '',
                                })
                            }
                        />
                        <TextArea
                            className={formErrors.message ? 'error' : ''}
                            placeholder={
                                formErrors.message
                                    ? 'Message cannot be empty'
                                    : 'Message'
                            }
                            name="message"
                            rows={10}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                });
                            }}
                            onClick={() =>
                                setFormErrors({
                                    ...formErrors,
                                    message: '',
                                })
                            }
                        />
                        <Button type="submit">Send</Button>
                        {success &&
                            'Thanks you for reaching out, I will get back to you at the soonest :)'}
                    </Form>
                </Right>
            </Content>
        </ContactContainer>
    );
};

export default Contact;
