import { ContentItem } from 'assets/data/content';
import React from 'react';

type projectContentDescriptionProps = {
    content: Omit<ContentItem, 'content'>
}

export default function (props: projectContentDescriptionProps) {
    const { title, externalUrl, contentUrl, description } = props.content;

    const externalUrlObj = externalUrl !== null ? new URL(externalUrl) : null;
    const contentUrlObj = contentUrl && contentUrl !== null ? new URL(contentUrl) : null;

    return <div className='project-details'>
    {/* <h2 className='project-title'>{title}</h2> */}
    {(externalUrlObj != null ? (<a href={externalUrlObj.href} target={"_blank"}>{externalUrlObj.host}</a>) : <></>)}<br/>
    {(contentUrlObj != null ? (<a href={contentUrlObj.href} target={"_blank"}>{contentUrlObj.host + contentUrlObj.pathname}</a>) : <></>)}
    <p className='project-description'>{description}</p>
</div>;
};