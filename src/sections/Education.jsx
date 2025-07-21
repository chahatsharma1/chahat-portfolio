import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import College from '../assets/icons/college.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div className='section education-section'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Savitribai Phule Pune University</h4>
                            <p>Master's of Computer Applications</p>
                            <TimeStamp stamp="2023 - 2025" />
                            <p>CGPA : 7.8</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Galgotias University</h4>
                            <p>Bachelor's of Computer Applications</p>
                            <TimeStamp stamp="2020 - 2023" />
                            <p>CGPA: 8.6</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
