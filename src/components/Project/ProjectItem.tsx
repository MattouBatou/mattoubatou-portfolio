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
            <div className="sticky-wrapper">
                <div className='project-details'>
                    <h2 className='project-title'>{itemData.title}</h2>
                    {(itemData.externalUrl !== null ? (<a href={itemData.externalUrl}>{new URL(itemData.externalUrl).host}</a>) : <></>)}
                    <p className='project-description'>{itemData.description}</p>
                </div>
            </div>
            
            <ProjectContent content={itemData.content}/>
        </div>
    )
};