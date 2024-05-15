import React, { ReactElement, ReactNode, useContext, useEffect } from 'react';
import { ContentCollection, SkillObject, WorkType } from 'assets/data/content';

import ProjectContentItem from './ProjectContentItem';
import AppContext from 'context/AppContext';
import ProjectContentDescription from './ProjectContentDescription';
import { monthFormatter } from 'utils/dates';

type projectContentProps = {
    contentCollection: ContentCollection
}

export default function (props: projectContentProps) {
    const { contentCollection } = props;
    const { title, thumbnail, stats, content: projectContent} = contentCollection;
    const { dateRange, workType, skills } = stats;
    const { externalUrl, contentUrl, description, content } = projectContent;

    const globalContext = useContext(AppContext);

    const startYear = dateRange.start.getFullYear().toString();
    const endYear = dateRange.end === null ? 'now' : dateRange.end.getFullYear().toString();
    const presentationDate = startYear === endYear ? startYear : `${startYear} - ${endYear}`

    const externalUrlObj = externalUrl !== null ? new URL(externalUrl.url) : null;
    const contentUrlObj = contentUrl && contentUrl !== null ? new URL(contentUrl.url) : null;

    const renderSkills = () => {
        if(skills) {
            const nodes: ReactNode[] = [];
            for(let skillIndex = 0; skillIndex < skills.length; skillIndex++) {
                const skill: SkillObject = skills[skillIndex];
                if(skill) {
                    if(!skill.skillType) console.log(skill);
                    nodes.push(<div className={`skill-tag skill-tag-${skill.skillType}`} key={`skill-tag-${skill.skillType}-${title}-${skillIndex}`}>{skill.skill}</div>);
                }
            }

            return <div className={`project-content-item project-content-item-stats project-content-item-skills`}>{nodes}</div>
        }

        return <></>;
    };

    useEffect(() => {
        globalContext.updateState({pageTitle: title, projectThumbnail: thumbnail})
    }, []);

    return (
        <div className='project-content'>
            <div className={`project-content-item project-content-item-stats project-content-item-dates`}>{presentationDate}</div>
            <div className={`project-content-item project-content-item-stats project-content-item-workType`}>{workType}</div>
            {(externalUrlObj != null ? (<a href={externalUrlObj.href} target={"_blank"} className={`project-content-item project-content-item-stats project-content-item-url`}>{externalUrl.name ? externalUrl.name : externalUrlObj.host.replace('www.', '')}</a>) : <></>)}
            {(contentUrlObj != null ? (<a href={contentUrlObj.href} target={"_blank"} className={`project-content-item project-content-item-stats project-content-item-url`}>{contentUrl?.name ? contentUrl.name : contentUrlObj.host.replace('www.', '')}</a>) : <></>)}
            {renderSkills()}
            <div className={`project-content-item project-content-item-description full-height`}><ProjectContentDescription description={description}/></div>
            {
                content && content.map((item, i) => {
                    return <ProjectContentItem item={item} index={i} key={`project-content-item_${title}_${i}`}/>
                })
            }
        </div>
    )
};