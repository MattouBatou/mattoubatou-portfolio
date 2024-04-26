import React, { useContext, useEffect } from 'react';
import { ContentCollection } from 'assets/data/content';

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
    const { dateRange } = stats;
    const { externalUrl, contentUrl, description, content } = projectContent;

    const descriptionContent = { externalUrl, contentUrl, description };

    const globalContext = useContext(AppContext);

    const startDate = `${monthFormatter.format(dateRange.start)} ${dateRange.start.getFullYear().toString()}`;
    const endDate = dateRange.end === null ? 'now' : `${monthFormatter.format(dateRange.end)} ${dateRange.end.getFullYear().toString()}`;
    const startYear = dateRange.start.getFullYear().toString();
    const endYear = dateRange.end === null ? 'now' : dateRange.end.getFullYear().toString();
    const presentationDate = startYear === endYear ? startYear : `${startYear} - ${endYear}`



    useEffect(() => {
        globalContext.updateState({pageTitle: title, projectThumbnail: thumbnail})
    }, []);

    return (
        <div className='project-content'>
            <div className={`project-content-item project-content-item-dates`}>{presentationDate}</div>
            <div className={`project-content-item project-content-item-description full-height`}><ProjectContentDescription content={descriptionContent}/></div>
            {
                content.map((item, i) => {
                    return <ProjectContentItem item={item} index={i} key={`project-content-item_${title}_${i}`}/>
                })
            }
        </div>
    )
};