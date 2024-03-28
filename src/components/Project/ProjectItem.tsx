import React from 'react';
import { ContentItem } from 'assets/data/content';

import ProjectContent from 'components/Project/ProjectContent';

type projectItemProps = {
    itemData: ContentItem
}

export default function (props: projectItemProps) {
    const { itemData } = props;

    const externalUrl = itemData.externalUrl !== null ? new URL(itemData.externalUrl) : null;
    const contentUrl = itemData.contentUrl && itemData.contentUrl !== null ? new URL(itemData.contentUrl) : null;

    return (
        <div className='project-item'>
            <div className="sticky-wrapper">
                <div className='project-details'>
                    <h2 className='project-title'>{itemData.title}</h2>
                    {(externalUrl != null ? (<a href={externalUrl.href}>{externalUrl.host}</a>) : <></>)}<br/>
                    {(contentUrl != null ? (<a href={contentUrl.href}>{contentUrl.host + contentUrl.pathname}</a>) : <></>)}
                    <p className='project-description'>{itemData.description}</p>
                </div>
            </div>

            <ProjectContent content={itemData.content}/>
        </div>
    )
};