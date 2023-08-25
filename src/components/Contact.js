import React, { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            const result = await response.json();

            if (response.status === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
                setFormDetails(formInitialDetails);
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            setStatus({ success: false, message: 'An error occurred, please try again later.' });
        } finally {
            setButtonText("Send");
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img src={contactImg} alt="Contact US" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Get in Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Enter Your Name:" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-2">
                                    <input type="email" value={formDetails.email} placeholder="Enter Your Email:" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-3">
                                    <input type="text" value={formDetails.lastName} placeholder="Enter Your Last Name:" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-4">
                                    <input type="tel" value={formDetails.phone} placeholder="Enter Your Phone:" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col xs={12}>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message:" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message && (
                                    <Col xs={12}>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
