import React from 'react';

type projectContentDescriptionProps = {
    content: string
}

export default function (props: projectContentDescriptionProps) {
    const { content } = props;

    return (
        <div className='project-content-textbox'>
            <p>{content}</p>
        </div>
    );
};