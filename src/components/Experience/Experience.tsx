import styled from 'styled-components';
import Timeline from './Timeline';

const ExperienceContainer = styled.div`
    min-height: 100vh;
    scroll-snap-align: center;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      overflow: visible;
    }
`;

const Experience = () => {
    return (
        <ExperienceContainer>
            <Timeline></Timeline>
        </ExperienceContainer>
    );
};

export default Experience;
