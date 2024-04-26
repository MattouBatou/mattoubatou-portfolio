import React from 'react';
import { ContentItem } from 'assets/data/content';

import ProjectContent from 'components/Project/ProjectContent';

type projectItemProps = {
    itemData: ContentItem,
    thumbnail: string
}

export default function (props: projectItemProps) {
    const { itemData, thumbnail } = props;
    const { title, externalUrl, contentUrl, description} = itemData;

    const descriptionContent = {
        title, externalUrl, contentUrl, description
    };

    return (
        <div className='project-item'>
            <ProjectContent content={itemData.content} descriptionContent={descriptionContent} thumbnail={thumbnail}/>
        </div>
    )
};