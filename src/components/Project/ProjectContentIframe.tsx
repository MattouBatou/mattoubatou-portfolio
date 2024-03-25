import React from 'react';

type projectContentIframeProps = {
    content: string,
}

export default function (props: projectContentIframeProps) {
    const { content } = props;

    return <div className='project-content-item'>
        <iframe className='project-content-iframe'  src={content}/>
    </div>;
};