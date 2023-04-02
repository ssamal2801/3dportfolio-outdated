import styled from 'styled-components';
import Timeline from './Timeline';

const ExperienceContainer = styled.div({
    height: '100vh',
    'scrollSnapAlign': 'center',
});

const Experience = () => {
    return (
        <ExperienceContainer>
            <Timeline></Timeline>
        </ExperienceContainer>
    );
};

export default Experience;
