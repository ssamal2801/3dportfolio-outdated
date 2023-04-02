import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import { HashIcon } from '@primer/octicons-react';

const TimelineWrapper = styled.div`
  height: 100vh;
  @media only screen and (max-width: 768px) {
        padding:2rem;
  }
`;

const Timeline = () => {
    return (
        <TimelineWrapper>
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                    }}
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<HashIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<HashIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Francisco, CA
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                    }}
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<HashIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                    }}
                    icon={<HashIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Francisco, CA
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </TimelineWrapper>
    );
};

export default Timeline;
