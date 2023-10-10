import React from 'react';
import styled from 'styled-components';
import AntTooltip from '../AntTooltip/tooltip.tsx';
import nextjs from '../../assets/icons/nextjs.svg';

const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 80vh;
    overflow-x: auto;
    @media only screen and (max-width: 768px) {
        background: #343434;
    }
`;

const TechStackItem = styled.a`
    font-size: 5rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
`;

const IMG = styled.img`
    width: 5rem;
    @media only screen and (max-width: 768px) {
        width: 2rem;
    }
`;

export default function TechStack() {
    return (
        <TechStackContainer>
            <AntTooltip title="React.js">
                <TechStackItem
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Redux">
                <TechStackItem
                    href="https://redux.js.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                        alt="redux"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Next.js">
                <TechStackItem
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG src={nextjs} />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Electron.js">
                <TechStackItem
                    href="https://www.electronjs.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
                        alt="electron"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Vue.js">
                <TechStackItem
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                        alt="vuejs"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Vuetify">
                <TechStackItem
                    href="https://vuetifyjs.com/en/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://bestofjs.org/logos/vuetify.svg"
                        alt="vuetify"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Angular">
                <TechStackItem
                    href="https://angular.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://angular.io/assets/images/logos/angular/angular.svg"
                        alt="angular"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Nest.js">
                <TechStackItem
                    href="https://nestjs.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
                        alt="nestjs"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="GraphQL">
                <TechStackItem
                    href="https://graphql.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                        alt="graphql"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Node.js">
                <TechStackItem
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Express.js">
                <TechStackItem
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                        alt="express"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title=".Net">
                <TechStackItem
                    href="https://dotnet.microsoft.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                        alt="dotnet"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="CSS3">
                <TechStackItem
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Html5">
                <TechStackItem
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Sass">
                <TechStackItem
                    href="https://sass-lang.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                        alt="sass"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Tailwind CSS">
                <TechStackItem
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                        alt="tailwind"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Less">
                <TechStackItem
                    href="https://lesscss.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/less/less-plain-wordmark.svg"
                        alt="less"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Bootstrap">
                <TechStackItem
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                        alt="bootstrap"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Javascript">
                <TechStackItem
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Typescript">
                <TechStackItem
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="C#">
                <TechStackItem
                    href="https://www.w3schools.com/cs/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                        alt="csharp"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="C++">
                <TechStackItem
                    href="https://www.w3schools.com/cpp/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                        alt="cplusplus"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Python">
                <TechStackItem
                    href="https://www.python.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                        alt="python"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Figma">
                <TechStackItem
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                        alt="figma"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Adobe XD">
                <TechStackItem
                    href="https://www.adobe.com/products/xd.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg"
                        alt="xd"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Cypress">
                <TechStackItem
                    href="https://www.cypress.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg"
                        alt="cypress"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Jest">
                <TechStackItem
                    href="https://jestjs.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                        alt="jest"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Selenium">
                <TechStackItem
                    href="https://www.selenium.dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"
                        alt="selenium"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="MongoDB">
                <TechStackItem
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                        alt="mongodb"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Microsoft SQL Server">
                <TechStackItem
                    href="https://www.microsoft.com/en-us/sql-server"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                        alt="mssql"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="MySQL">
                <TechStackItem
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                        alt="mysql"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="SQLite">
                <TechStackItem
                    href="https://www.sqlite.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                        alt="sqlite"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="GitHub">
                <TechStackItem
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                        alt="github"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Git">
                <TechStackItem
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        alt="git"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Jira">
                <TechStackItem
                    href="https://www.atlassian.com/software/jira"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original-wordmark.svg"
                        alt="jira"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Azure DevOps">
                <TechStackItem
                    href="https://azure.microsoft.com/en-in/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                        alt="azure"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Babel">
                <TechStackItem
                    href="https://babeljs.io/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                        alt="babel"
                    />
                </TechStackItem>
            </AntTooltip>

            <TechStackItem
                href="https://webpack.js.org"
                target="_blank"
                rel="noreferrer"
            >
                <IMG
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                />
            </TechStackItem>

            <AntTooltip title="Arduino">
                <TechStackItem
                    href="https://www.arduino.cc/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                        alt="arduino"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Bash">
                <TechStackItem
                    href="https://www.gnu.org/software/bash/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                        alt="bash"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Blender">
                <TechStackItem
                    href="https://www.blender.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                        alt="blender"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Chart.js">
                <TechStackItem
                    href="https://www.chartjs.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.chartjs.org/media/logo-title.svg"
                        alt="chartjs"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Graffana">
                <TechStackItem
                    href="https://grafana.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"
                        alt="grafana"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Docker">
                <TechStackItem
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                        alt="docker"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Apache Kafka">
                <TechStackItem
                    href="https://kafka.apache.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
                        alt="kafka"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Linux">
                <TechStackItem
                    href="https://www.linux.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                        alt="linux"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Nginx">
                <TechStackItem
                    href="https://www.nginx.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
                        alt="nginx"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Postman">
                <TechStackItem
                    href="https://postman.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                        alt="postman"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="TenserFlow">
                <TechStackItem
                    href="https://www.tensorflow.org"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
                        alt="tensorflow"
                    />
                </TechStackItem>
            </AntTooltip>

            <AntTooltip title="Android">
                <TechStackItem
                    href="https://developer.android.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IMG
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                        alt="android"
                    />
                </TechStackItem>
            </AntTooltip>
        </TechStackContainer>
    );
}
