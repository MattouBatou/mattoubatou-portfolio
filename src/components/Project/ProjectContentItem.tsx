import React, { CSSProperties } from 'react';
import { ContentSchema, ContentType } from 'assets/data/content';

import ProjectContentIframe from './ProjectContentIframe';
import ProjectContentImage from './ProjectContentImage';
import ProjectContentVideo from './ProjectContentVideo';

type projectContentItemProps = {
    item: ContentSchema,
    index: number
}

export default function (props: projectContentItemProps) {
    const { item, index } = props;

    const style: CSSProperties = {
        gridColumn: item.columns !== undefined ? `span ${item.columns}` : 0/4
    };

    if(item.contentType === ContentType.image) {
        style.backgroundImage = `url(${item.content})`;
    }

    if(item.contentType === ContentType.video) {
        style.display = `flex`;
    }

    const selectContentType = (item: ContentSchema) => {
        if(item.contentType === ContentType.spacer) {
            return;
        } else if(item.contentType === ContentType.iframe) {
            return <ProjectContentIframe content={item.content} />
        } else if(item.contentType === ContentType.image) {
            return <ProjectContentImage content={item.content} /> 
        } else if(item.contentType === ContentType.video) {
            return <ProjectContentVideo content={item.content} />
        } 
    };

    return (
        <div className='project-content-item' style={style}>{selectContentType(item)}</div>
    )
};