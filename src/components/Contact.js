import React from 'react';
import './css/contact.css'; 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import white_arrow from '../image/white_arrow.jpg';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const res = await fetch("https://api.web3form.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                console.log("Success", data);
                setResult(data.message);
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("An error occurred while sending the form.");
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <FaEnvelope className="contact-icon" /></h3>
                <p>
                    Feel free to reach out through the contact form or find our contact 
                    information below. Your feedback, questions, and suggestions are 
                    important to us as we strive to provide exceptional service to our 
                    university community.
                </p>
                <ul>
                    <li><FaEnvelope className="contact-icon" /> college@gmail.com</li>
                    <li><FaPhoneAlt className="contact-icon" /> +91 123-423-7596</li>
                    <li><FaMapMarkerAlt className="contact-icon" /> KPHB colony Kukatpally Hyderabad <br /> Telangana State</li>
                </ul>
            </div>

            <div className='contact-col1'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name="name" placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="text" name="phone" placeholder='Enter your mobile number' required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
                </form>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Contact;
