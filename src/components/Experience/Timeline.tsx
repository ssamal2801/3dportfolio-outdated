import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import { HashIcon } from '@primer/octicons-react';
import './index.scss';

const TimelineWrapper = styled.div`
    height: 100vh;
    @media only screen and (max-width: 768px) {
        padding: 2rem;
        height: auto;
    }
`;

const JobTitle = styled.h3`
    font-size: 1.5rem;
    color: #da4ea2;
`;
const Location = styled.h4`
    color: #cd6a6a;
`;
const Skills = styled.p``;

const Timeline = () => {
    const linkedin = 'https://www.linkedin.com/in/ssamal2801/';
    const jobs = [
        {
            date: 'June 2022 - Present',
            icon: HashIcon,
            jobTitle: 'Software Developer',
            location: 'Sienci Labs, Waterloo, ON',
            skills: 'React.js, Redux.js, JavaScript, Typescript, Chart.js, Three.js, Node.js, Express.js, Socket.io, Storybook, HTML5, CSS3, SCSS, LESS / Stylus, Electron, Jest, React Material UI',
        },
        {
            date: 'Jan 2022 - April end, 2022',
            icon: HashIcon,
            jobTitle: 'Software Developer',
            location: 'Conestoga Applied Research, Waterloo, ON',
            skills: 'Vue.js, JavaScript, HTML, CSS, SCSS, Node.js, Typescript, MySQL, SQL, REST API, Jest',
        },
        {
            date: 'Sept 2021 - Dec end, 2021',
            icon: HashIcon,
            jobTitle: 'Student Software Developer (Co-Op)',
            location: 'Conestoga Smart Labs, Cambridge, ON',
            skills: 'Babylon.js, Web.gl, Vue.js, JavaScript, HTML, CSS, SCSS, Node.js, MySQL, SQL, REST API',
        },
        {
            date: 'Aug 2018 - Jul 2020 & Jun 2017 - Feb 2018',
            icon: HashIcon,
            jobTitle: 'Customer Experience Specialist',
            location: 'Etech Global, Gandhinagar, IN',
            skills: 'Vue.js, JavaScript, HTML, CSS, SCSS, Node.js, MySQL, SQL, REST API, Postman',
        },
    ];
    return (
        <TimelineWrapper>
            <VerticalTimeline animate={true} className="timeline">
                {jobs.map((job) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work job"
                        contentStyle={{
                            background: '#012741',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  #012741',
                        }}
                        date={job.date}
                        iconStyle={{
                            background: '#012741',
                            color: '#fff',
                        }}
                        icon={<job.icon />}
                        key={job.date}
                    >
                        <JobTitle className="vertical-timeline-element-title" onClick={() => window.open(linkedin)}>
                            {job.jobTitle}
                        </JobTitle>
                        <Location className="vertical-timeline-element-subtitle">
                            {job.location}
                        </Location>
                        <Skills onClick={() => window.open(linkedin)}>{job.skills}</Skills>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </TimelineWrapper>
    );
};

export default Timeline;
