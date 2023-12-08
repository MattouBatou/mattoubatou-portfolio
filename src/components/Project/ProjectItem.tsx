import React from 'react';
import { ContentItem } from 'assets/data/content';

import ProjectContent from 'components/Project/ProjectContent';

type projectItemProps = {
    itemData: ContentItem
}

export default function (props: projectItemProps) {
    const { itemData } = props;

    return (
        <div className='project-item'>
            <ProjectContent content={itemData.content}/>

            <div className="sticky-wrapper">
                <div className='project-details'>
                    <div className='project-title'>{itemData.title}</div>
                    {(itemData.externalUrl !== null ? (<a href={itemData.externalUrl}>{new URL(itemData.externalUrl).host}</a>) : <></>)}
                    <div className='project-description'>{itemData.description}</div>
                </div>
            </div>
        </div>
    )
};