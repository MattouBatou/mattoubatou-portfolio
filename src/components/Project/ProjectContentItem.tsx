import React, { CSSProperties } from 'react';
import { ContentSchema, ContentType, ContentItem } from 'assets/data/content';

import ProjectContentIframe from './ProjectContentIframe';
import ProjectContentImage from './ProjectContentImage';
import ProjectContentVideo from './ProjectContentVideo';
import ProjectContentText from './ProjectContentText';
import ProjectContentTextbox from './ProjectContentTextbox';

type projectContentItemProps = {
    item: ContentSchema,
    index: number,
}

export default function (props: projectContentItemProps) {
    const { item, index } = props;

    const style: CSSProperties = {
        gridColumn: item.columns !== undefined ? `span ${item.columns}` : 0/10
    };

    if(item.contentType === ContentType.video) {
        style.display = `flex`;
    }

    const selectContentType = (item: ContentSchema) => {
        if(item.content) {
            if(item.contentType === ContentType.iframe) {
                return <ProjectContentIframe content={item.content} />
            } else if(item.contentType === ContentType.image) {
                return <ProjectContentImage content={item.content} /> 
            } else if(item.contentType === ContentType.video) {
                return <ProjectContentVideo content={item.content} />
            } else if(item.contentType === ContentType.text) {
                return <ProjectContentText content={item.content} />
            } else if(item.contentType === ContentType.textBox) {
                return <ProjectContentTextbox content={item.content} />
            }
        }
    };

    const isSpacer = item.contentType === ContentType.spacer ? 'spacer' : '';

    return (
        <div className={`project-content-item ${isSpacer}  ${item.square ? 'square' : ''} ${item.portrait ? 'portrait' : ''} ${(item.contentType === (ContentType.description | ContentType.text)) ? 'full-height' : ''}`} 
                        style={style}>{selectContentType(item)}</div>
    )
};