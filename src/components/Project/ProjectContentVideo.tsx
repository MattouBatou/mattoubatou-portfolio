import React from 'react';

type projectContentImageProps = {
    content: string,
}

export default function (props: projectContentImageProps) {
    const { content } = props;

    return <video className='project-content-video' src={content} autoPlay={true} muted={true} loop={true}/>;
};