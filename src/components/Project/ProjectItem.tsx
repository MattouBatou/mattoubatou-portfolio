import React from 'react';
import { ContentCollection, ContentItem } from 'assets/data/content';

import ProjectContent from 'components/Project/ProjectContent';

type projectItemProps = {
    contentCollection: ContentCollection
}

export default function (props: projectItemProps) {
    const { contentCollection } = props;

    return (
        <div className='project-item'>
            <ProjectContent contentCollection={contentCollection}/>
        </div>
    )
};