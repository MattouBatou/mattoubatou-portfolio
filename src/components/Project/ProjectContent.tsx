import React from 'react';
import { ContentBundle, ContentType } from 'assets/data/content';

import ProjectContentIframe from './ProjectContentIframe';
import ProjectContentImage from './ProjectContentImage';

type projectContentProps = {
    content: ContentBundle,
}

export default function (props: projectContentProps) {
    const { content } = props;

    return (
        <div className='project-content'>
            {
                content.map(item => {
                    if(item.contentType === ContentType.iframe) {
                        return <ProjectContentIframe content={item.content} />
                    } else if(item.contentType === ContentType.image) {
                        return <ProjectContentImage content={item.content} />
                    }

                    return item.content
                })
            }
        </div>
    )
};