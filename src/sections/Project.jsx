import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Project() {
    return (
        <div className='section projects-section'>
            <h2>Projects</h2>
            <Holder>
                <ProjectCard>
                    <img src={'trading.png'} alt='Trading' />
                    <Content>
                        <h3>TradeX</h3>
                        <p>A full-stack trading app where users can explore coins, manage wallets, and place real-time orders. Built with Spring Boot + React, integrated with CoinGecko & Gemini APIs for chatbot functionality, JWT-secured, and fully deployed on GCP with Docker.</p>
                        <Tags>
                            <Tag hashtag="Java" />
                            <Tag hashtag="Spring Boot" />
                            <Tag hashtag="React" />
                            <Tag hashtag="Tailwind CSS" />
                            <Tag hashtag="MySQL" />
                        </Tags>
                    </Content>
                    <CardActions visit="https://trading-project-1001-ffdf1.web.app" source="https://github.com/chahatsharma1/trading-platform" />
                </ProjectCard>
                <ProjectCard>
                    <img src={'premier.png'} alt='Premier' />
                    <Content>
                        <h3>Premier Zone</h3>
                        <p>A fun Spring Boot + React app that shows stats for your favorite Premier League players. Clean UI, live search, and smooth user experience — perfect for football fans who love data and are premier league fans.</p>
                        <Tags>
                            <Tag hashtag="Java" />
                            <Tag hashtag="Spring Boot" />
                            <Tag hashtag="React" />
                            <Tag hashtag="PostgreSQL" />
                            <Tag hashtag="Docker" />
                        </Tags>
                    </Content>
                    <CardActions visit="https://premier-league-1001.web.app" source="https://github.com/chahatsharma1/premier-league-zone" />
                </ProjectCard>
                <ProjectCard>
                    <img src={'library.png'} alt='Library' />
                    <Content>
                        <h3>Library Management System</h3>
                        <p>A simple but fast library tool with a Spring Boot backend and a React+Vite frontend. Includes sortable tables, live search and is deployed with Docker using Cloud Run & Firebase.</p>
                        <Tags>
                            <Tag hashtag="Java" />
                            <Tag hashtag="Spring Boot" />
                            <Tag hashtag="React" />
                            <Tag hashtag="Tailwind CSS" />
                            <Tag hashtag="PostgreSQL" />
                        </Tags>
                    </Content>
                    <CardActions visit="https://library-management-1001.web.app" source="https://github.com/chahatsharma1/digital-library" />
                </ProjectCard>
                <ProjectCard>
                    <img src={'portfolio.png'} alt='Portfolio' />
                    <Content>
                        <h3>Chahat's Personal Portfolio</h3>
                        <p>A modern, responsive portfolio website built with React and Vite showcasing my skills, projects, and professional journey. Features include theme toggling, smooth navigation, and custom components.</p>
                        <Tags>
                            <Tag hashtag="JavaScript" />
                            <Tag hashtag="React" />
                            <Tag hashtag="Vite" />
                        </Tags>
                    </Content>
                    <CardActions source="https://github.com/chahatsharma1/chahat-portfolio" />
                </ProjectCard>
            </Holder>
        </div>
    )
}