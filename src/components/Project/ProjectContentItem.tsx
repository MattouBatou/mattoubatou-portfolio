import React, { CSSProperties } from 'react';
import { ContentSchema, ContentType, ContentItem } from 'assets/data/content';

import ProjectContentIframe from './ProjectContentIframe';
import ProjectContentImage from './ProjectContentImage';
import ProjectContentVideo from './ProjectContentVideo';
import ProjectContentDescription from './ProjectContentDescription';

type projectContentItemProps = {
    item: ContentSchema,
    index: number,
    descriptionContent: Omit<ContentItem, 'content'>
}

export default function (props: projectContentItemProps) {
    const { item, index, descriptionContent } = props;

    const style: CSSProperties = {
        gridColumn: item.columns !== undefined ? `span ${item.columns}` : 0/4
    };

    if(item.contentType === ContentType.video) {
        style.display = `flex`;
    }

    const selectContentType = (item: ContentSchema) => {
        if(item.contentType === ContentType.iframe) {
            return <ProjectContentIframe content={item.content} />
        } else if(item.contentType === ContentType.image) {
            return <ProjectContentImage content={item.content} /> 
        } else if(item.contentType === ContentType.video) {
            return <ProjectContentVideo content={item.content} />
        } else if(item.contentType === ContentType.description) {
            return <ProjectContentDescription content={descriptionContent} />
        }
    };

    const isSpacer = item.contentType === ContentType.spacer ? 'spacer' : '';

    return (
        <div className={`project-content-item ${isSpacer}`} style={style}>{selectContentType(item)}</div>
    )
};