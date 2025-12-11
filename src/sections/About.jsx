import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {
    return (
        <div className='about-section section'>
            <h2>About</h2>
            <p>
                I am a passionate <strong>Software Developer</strong> with a focus on building fast, scalable, and secure web applications. I enjoy crafting clean, user-friendly interfaces with React, while architecting robust backends using Spring Boot. From developing JWT-secured authentication systems to deploying Dockerized apps on Google Cloud, I take pride in owning the full development lifecycle.
            </p>
            <p>
                Currently, I’m expanding my skills in DevOps, cloud architecture, and system design - aiming to build not just apps, but resilient platforms. I thrive on solving real-world problems, collaborating on projects, and continuously leveling up through hands-on learning.
            </p>
            <p>
                Whether it is designing intuitive UIs, managing cloud deployments, or optimizing APIs for performance - I’m always excited to take on the next challenge.
            </p>
            <p>Let’s build something great! ✨</p>
            <a href="https://drive.google.com/file/d/1cqewPGruaw6sh3dorjFe6-PG4_cDZBvR/view?usp=sharing" target='_blank'>
                <Button1>
                    <SvgIcon icon={Pdf} />
                    Resume
                </Button1>
            </a>
        </div>
    );
}