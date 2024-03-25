import React from 'react';

type projectContentImageProps = {
    content: string,
}

export default function (props: projectContentImageProps) {
    const { content } = props;

    return <div className='project-content-item'>
            <img className='project-content-image'  src={content}/>
    </div>;
};