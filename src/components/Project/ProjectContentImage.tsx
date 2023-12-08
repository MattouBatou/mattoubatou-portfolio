import React from 'react';

type projectContentImageProps = {
    content: string,
}

export default function (props: projectContentImageProps) {
    const { content } = props;

    return <img className='project-content-image'  src={content}/>;
};