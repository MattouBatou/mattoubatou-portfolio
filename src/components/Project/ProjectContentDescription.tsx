import { ContentItem } from 'assets/data/content';
import React from 'react';

type projectContentDescriptionProps = {
    description: string
}

export default function (props: projectContentDescriptionProps) {
    const { description } = props;

    return <div className='project-details project-content-text'>
    <p className='project-description'>{description}</p>
</div>;
};