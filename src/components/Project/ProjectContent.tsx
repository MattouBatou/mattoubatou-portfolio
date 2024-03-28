import React from 'react';
import { ContentBundle, ContentType } from 'assets/data/content';

import ProjectContentItem from './ProjectContentItem';

type projectContentProps = {
    content: ContentBundle,
}

export default function (props: projectContentProps) {
    const { content } = props;

    return (
        <div className='project-content'>
            {
                content.map((item, i) => {
                    return <ProjectContentItem item={item} index={i}/>
                })
            }
        </div>
    )
};