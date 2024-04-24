import React, { RefObject, useEffect, useRef } from 'react';

type projectContentImageProps = {
    content: string,
}

export default function (props: projectContentImageProps) {
    const { content } = props;

    const vidRef = useRef() as RefObject<HTMLVideoElement>;

    useEffect(() => {
        if(vidRef && vidRef.current){
            vidRef.current.play();
        }
    }, []);

    return <video ref={vidRef} className='project-content-video' src={content} preload='auto' controls playsInline autoPlay muted loop/>;
};