import React, { useContext, useEffect } from 'react';
import { ContentBundle, ContentItem } from 'assets/data/content';

import ProjectContentItem from './ProjectContentItem';
import AppContext from 'context/AppContext';
import ProjectContentImage from './ProjectContentImage';
import ProjectContentDescription from './ProjectContentDescription';

type projectContentProps = {
    content: ContentBundle,
    descriptionContent: Omit<ContentItem, 'content'>;
    thumbnail: string
}

export default function (props: projectContentProps) {
    const { content, descriptionContent, thumbnail } = props;

    const globalContext = useContext(AppContext);

    useEffect(() => {
        globalContext.updateState({pageTitle: descriptionContent.title, projectThumbnail: thumbnail})
    }, []);

    return (
        <div className='project-content'>
            <div className={`project-content-item project-content-item-description full-height`}><ProjectContentDescription content={descriptionContent}/></div>
            {
                content.map((item, i) => {
                    return <ProjectContentItem item={item} index={i} key={`project-content-item_${descriptionContent.title}_${i}`}/>
                })
            }
        </div>
    )
};