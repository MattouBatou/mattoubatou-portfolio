import React from 'react';

type projectContentIframeProps = {
    content: string,
}

export default function (props: projectContentIframeProps) {
    const { content } = props;

    return<iframe className='project-content-iframe'  src={content}/>;
};