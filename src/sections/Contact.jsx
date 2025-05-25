import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className='section contact-section'>
            <h2>Contact</h2>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Get In Touch</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                Have questions? Ping me with a <a href="https://www.linkedin.com/in/chahat10/">linkedin</a> DM or email at <a href='mailto:chahats2002@gmail.com'>chahats2002@gmail.com</a>.
            </p>
        </div >
    )
}
