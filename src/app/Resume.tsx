import { breakpoints, measures } from "../tokens";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function Resume() {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <HeaderInfo>
            <h1>Brendan J Best</h1>
            <span style={{ marginTop: measures.small }}>
              <a
                href="https://www.linkedin.com/in/brendan-best"
                target="_blank"
              >
                find me on LinkedIn <i className="fa-brands fa-linkedin"></i>
              </a>
            </span>
          </HeaderInfo>
          {/* <HeaderInfo>
            <span>(651) 302-2969</span>
            <span>Remote / Greenville, WI </span>
            <span>
              <a href="mailto:visarts@gmail.com">visarts@gmail.com</a>
            </span>
          </HeaderInfo>*/}
        </HeaderContainer>
      </Header>
      <Content>
        <Section>
          <SectionHeader>Summary</SectionHeader>
          <SectionContent>
            Experienced Software Engineering Manager with over 10 years of
            expertise in leading cross-functional teams, delivering scalable
            full-stack applications, and driving technical innovation. Proven
            track record in modernizing legacy systems, improving team
            productivity, and aligning engineering efforts with business goals.
            Specialized experience in Typescript, ReactJS, and NodeJS.
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>MAJOR ACHIEVEMENTS</SectionHeader>
          <SectionContent>
            <ul>
              <li>
                Managed the redesign and rewrite of an online ticketing software
                and implemented a responsive, mobile-friendly version that added
                on-the-go access to staff managers and reduced bugs by 99%.
              </li>
              <li>
                Led an engineering team to the deployment of a healthcare portal
                that facilitated 100's of 1000's of users' critical needs and
                improved user engagement on the global health insurance portal.
              </li>
              <li>
                Created a product-specific recommendations UI for the
                Bestbuy.com search feature which drove an increase of .5M in
                sales every month.
              </li>
            </ul>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>EXPERIENCE</SectionHeader>
          <SectionContent>
            <SectionItem>
              <ResumeExpHeader
                role="Principle Software Engineering Consultant"
                company="Boston Scientific"
                date="February 2024 &mdash; present"
                location="Remote"
              />
              <ul>
                <li>
                  Engineered an application for oncology departments,
                  modernizing treatment orders, leading to a reduction of 50% in
                  processing time and refining patient care by reducing barriers
                  to purchases.
                </li>
                <li>
                  Conducted bi-weekly stakeholder meetings, validating alignment
                  on project updates while producing detailed reports speeding
                  up the approval process for software components by 1 month.
                </li>
                <li>
                  Created a component framework for the front-end application,
                  enabling rapid deployment of new features and eliminating code
                  redundancy; realized zero critical errors in penetration
                  testing.
                </li>
                <li>
                  Produced a NestJS backend for accurate dosage calculations and
                  secure transfer with upstream data sources, contributing to
                  the precision of treatment plans for hundreds of patients
                  every month.
                </li>
                <li>
                  Implemented a unit testing framework using Vitest and React
                  Testing Library, in coordination with Quality Engineering,
                  achieving 100% test coverage verified through automated tools
                  while demonstrating ongoing testing efforts to leadership.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="Software Engineering Manager"
                company="Madison Square Garden Entertainment"
                date="December 2022 &mdash; February 2024"
                location="Remote"
              />
              <ul>
                <li>
                  Managed and mentored 7 software engineers on 2 teams covering
                  4 projects, resulting in enriched communication between teams,
                  augmented management of shared resources, and a 30%
                  improvement in job satisfaction scores.
                </li>
                <li>
                  Administered sessions with engineers and managers to
                  facilitate the migration of 2 projects from Azure to AWS,
                  reducing cloud costs for those projects by 15% and reducing
                  downtime to near zero.
                </li>
                <li>
                  Rebuilt the employee ticketing application, transitioning from
                  AngularJS to a NextJS / NodeJS stack, while implementing a
                  responsive design; gained a 90% drop in errors and improved
                  load times for 1000's of users.
                </li>
                <li>
                  Developed onboarding and training documentation, resulting in
                  a streamlined integration process for new engineers and
                  decreasing ramp up time for new hires by nearly 40 hours per
                  individual.
                </li>
                <li>
                  Led 20 interviews with engineering candidates; resulted in 10
                  successful hires; aligned with HR and management to simplify
                  the evaluation process and reduce hiring times from 4 weeks to
                  2.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="Lead Software Engineer"
                company="Optum / United Healthcare"
                date="January 2020 &mdash; December 2022"
                location="Remote"
              />
              <ul>
                <li>
                  Initiated and orchestrated the architectural planning,
                  engineering development, testing framework, and deployment
                  activities for the Pharmacies and Prescriptions portal,
                  driving a 100% increase in traffic to the global application,
                  based on direct user feedback.
                </li>
                <li>
                  Collaborated with senior engineers to develop the portal with
                  a NextJS framework, using ReactJS and Typescript to improve
                  bundle size and reduce load times for end users by nearly 50%.
                </li>
                <li>
                  Coordinated teams across 3 countries and 5 time zones,
                  improving communication efficacy by leading daily sync
                  meetings and establishing communication channels that led to a
                  significant reduction in bugs, and meaningfully accelerated
                  delivery timelines.
                </li>
                <li>
                  Liaised between project managers and 3rd-party vendors,
                  leading to the addition of critical features to that increased
                  revenue potential by keeping users on the application 20%
                  longer on average.
                </li>
                <li>
                  Directed every production release while troubleshooting
                  pipeline issues using Jenkins and GitHub actions; achieved
                  zero downtime for end users during critical release sessions,
                  ensuring uninterrupted service.
                </li>
                <li>
                  Employed monitoring strategies with tools like Datadog to
                  facilitate rapid issue detection and resolution processes
                  while ensuring the platform maintained an uptime rate
                  exceeding 99.9%.
                </li>
                <li>
                  Led 15 interviews with engineering candidates resulting in 5
                  new team members and boosting work capacity on the project by
                  100%; the team was then able to meet nearly every deadline
                  enacted by leadership.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="Senior Engineer"
                company="Target Corp."
                date="November 2017 &mdash; December 2019"
                location="Minneapolis, MN"
              />
              <ul>
                <li>
                  Designed and engineered an interactive dashboard using Redux
                  and ReactJS, visualizing customer behavior, and enabling the
                  implementation of targeted marketing campaigns, producing a
                  25% increase in click-through rates for email and mobile
                  engagements.
                </li>
                <li>
                  Developed an advanced analytics tool for the TV marketing
                  team, enabling real-time campaign performance tracking that
                  granted dozens of stakeholders throughout the organization
                  100% increase of visibility into TV advertisement analytics.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="UI Developer"
                company="Optum / United Healthcare"
                date="March 2017 &mdash; October 2017"
                location="Eden Prairie, MN"
              />
              <ul>
                <li>
                  Produced the frontend architecture for a standardized global
                  header across 20+ client portals, enhancing UI consistency and
                  brand integrity; minimized user confusion by streamlining
                  navigation pathways for seamless customer interactions.
                </li>
                <li>
                  Boosted website responsiveness and modularity resulting in up
                  to 50% reduction of client load for users and ensuring cross
                  compatibility for older browsers.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="UI Engineer"
                company="Best Buy Inc."
                date="March 2016 &mdash; March 2017"
                location="Richfield, MN"
              />
              <ul>
                <li>
                  Launched advanced search features that shortened user journeys
                  from initial click to transaction completion, directly
                  contributing increased sales via search from 1.5m to 2m every
                  month.
                </li>
                <li>
                  Migrated legacy code to a streamlined publishing process for
                  the search suite of features, enhancing overall performance
                  and reducing keystroke lag times by 300ms during peak traffic
                  periods.
                </li>
                <li>
                  Launched an advanced tracking product for user behavior on
                  Bestbuy.com, enabling real-time analytics for the Customer
                  Recommendations team which directly resulted in enhanced
                  product offerings based on data analysis from 1M+ user
                  sessions.
                </li>
              </ul>
            </SectionItem>
            <SectionItem>
              <ResumeExpHeader
                role="Frontend Developer"
                company="Thomson Reuters"
                date="September 2014 &mdash; December 2016"
                location="Eagan, MN"
              />
              <ul>
                <li>
                  Bootstrapped a user-friendly application that synthesized over
                  300 APIs, revolutionizing the customer service process:
                  enabled representatives to streamline complex data queries
                  through a user-friendly UI portal, cutting customer issue
                  resolution time by 80%.
                </li>
                <li>
                  Engaged with product users to gather comprehensive feedback on
                  reported issues, enabling the identification of critical
                  usability enhancements that led to a 30% reduction in
                  user-reported bugs during the development cycle.
                </li>
              </ul>
            </SectionItem>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>Skills</SectionHeader>
          <SectionContent>
            <ul>
              <li>
                Architecture: Planning, design, documentation-based
                organization, agile implementation.
              </li>
              <li>
                Technical development: ReactJS, NextJS, NodeJS, NestJS,
                JavaScript ES6+, Yarn, NPM.
              </li>
              <li>
                Continuous delivery: Azure Web DevOps, OpenShift, GitHub /
                Gitlab, Adobe Experience Manager.
              </li>
              <li>
                Design: CSS, Figma, Styled Components, Emotion, SASS, Adobe
                Photoshop, Adobe InDesign.
              </li>
            </ul>
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>Education</SectionHeader>
          <SectionContent>
            EDUCATION Master of Science Information and Communications
            Technology University of Wisconsin – Stout, December 2020 Bachelor
            of Arts Communications / Electronic Media University of Wisconsin –
            Green Bay, May 2012.
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>Certifications</SectionHeader>
          <SectionContent>
            Certified ScrumMaster Scrum Alliance Awarded February 2, 2025
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
}

type TResumeExpHeaderProps = {
  role: string;
  company: string;
  date: string;
  location: string;
};

const ResumeExpHeader = ({
  role,
  company,
  date,
  location,
}: TResumeExpHeaderProps) => {
  return (
    <SectionItemHeader>
      <div>
        <span>{role}</span>
        <span>{company}</span>
        <span>{location}</span>
      </div>
      <span>{date}</span>
    </SectionItemHeader>
  );
};

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: ${measures.medium};
  padding: ${measures.medium};
  background-color: #468189;
  color: white;

  border-bottom: 2rem solid #9dbebb;
  a {
    color: #edf5b0;
    font-size: 0.85rem;
    text-decoration: none;
  }

  ${breakpoints.mobile(css`
    padding: ${measures.small};
    margin-bottom: ${measures.small};
  `)}
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${breakpoints.mobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)};
`;

const Content = styled.div`
  padding-bottom: 4rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  margin: 0 auto;
  max-width: 800px;

  ${breakpoints.mobile(css`
    padding: 0 ${measures.small};
  `)}
`;

const SectionHeader = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  margin: 1rem 0;

  ul {
    padding-inline-start: 1rem;
  }
  ul > li {
    margin-bottom: 1rem;
    list-style-type: square;
  }
`;

const SectionItem = styled.div`
  margin: 2rem 0;
  background-color: mintcream;
  padding: ${measures.medium};
  color: rgba(20, 20, 20, 0.75);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid white;
  transition: color 0.3s;
  :hover {
    color: rgba(20, 20, 20, 1);
  }

  ${breakpoints.mobile(css`
    padding: ${measures.small};
  `)}
`;

const SectionItemHeader = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
  }
`;
