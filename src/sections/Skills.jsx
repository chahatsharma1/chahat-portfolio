import SkillCard from '../components/SkillCard'

export default function Skills() {

    return (
        <div className='skills-section section'>
            <h2>Skills</h2>
            <SkillCard heading='Language' hcolor="var(--clr-accent1)" skills={[
                { 'name': 'Java', 'icon': 'java' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'SQL', 'icon': 'azuresqldatabase' }
            ]} />

            <SkillCard heading='Backend' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'Spring Boot', 'icon': 'spring' },
                { 'name': 'Hibernate', 'icon': 'hibernate' },
                { 'name': 'OAuth', 'icon': 'oauth' },
                { 'name': 'Maven', 'icon': 'maven' },
                { 'name': 'JUnit', 'icon': 'junit' },
                { 'name': 'Mockito', 'icon': '/mockito.svg' },
                { 'name' : 'Apache Kafka', 'icon' : 'apachekafka'}
            ]} />

            <SkillCard heading='Frontend' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'ShadCN', 'icon': '/shadcn.png'}
            ]} />

            <SkillCard heading='Database' hcolor="var(--clr-accent4)" skills={[
                { 'name': 'MySQL', 'icon': 'mysql' },
                { 'name': 'Postgresql', 'icon': 'postgresql' },
                { 'name': 'MongoDB', 'icon': 'mongodb' },
                { 'name': 'Redis', 'icon': 'redis' },
            ]} />

            <SkillCard heading='Devops' hcolor="var(--clr-accent5)" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub', 'icon': 'github' },
                { 'name': 'GitHub Actions', 'icon': 'githubactions' },
                { 'name': 'Docker', 'icon': 'docker' },
                { 'name': 'Kubernetes', 'icon': 'kubernetes' },
                { 'name': 'Google Cloud', 'icon': 'googlecloud' },
                { 'name': 'AWS', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { 'name': 'Microsoft Azure', 'icon': 'azure' },
                { 'name': 'Firebase', 'icon': 'firebase' },
            ]} />
            <SkillCard heading='Tools' hcolor="var(--clr-accent6)" skills={[
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Intellij IDEA', 'icon': 'intellij' },
                { 'name': 'Swagger', 'icon': 'swagger' },
            ]} />
            <SkillCard heading='Automation' hcolor="var(--clr-sec)" skills={[
                { 'name': 'OpenAI', 'icon': 'https://simpleicons.org/icons/openai.svg' },
                { 'name': 'Gemini', 'icon': 'https://simpleicons.org/icons/googlegemini.svg' },
            ]} />

        </div>
    )
}
