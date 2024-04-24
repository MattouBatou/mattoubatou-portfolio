import React, {RefObject, useEffect, useRef } from 'react';
import { ContentCollectionDetails, ContentType } from 'assets/data/content';
import { useNavigate } from 'react-router-dom';

type Props = Spread<ContentCollectionDetails, { description: string, collectionId: number, shouldPlay: boolean, setVideoThumbPlayingId: Function }>;

export default function ContentGridItem({ 
    title, thumbnail, thumbnailType, thumbnailPoster = '', 
    thumbAlignLeft, description, collectionId, shouldPlay = false, setVideoThumbPlayingId}: Props) {

    const posterRef = useRef() as RefObject<HTMLDivElement>;
    const vidRef = useRef() as RefObject<HTMLVideoElement>;
    const navigate = useNavigate();

    useEffect(() => {
        if(shouldPlay) {
            playThumbVideo();
        } else {
            stopThumbVideo();
        }
        
    }, [shouldPlay]);

    useEffect(() => {
        if(shouldPlay) {
            playThumbVideo();
        }
    }, []);

    const onVideoPointerEnter = ()=>{
        setVideoThumbPlayingId(collectionId);
    };

    const onItemClick = () => {
        navigate(`${collectionId}`);
    };

    const playThumbVideo = () => {
        if( vidRef && vidRef.current) {
            if (!getIsPlaying()) {
                vidRef.current.currentTime = 0;
                vidRef.current.play();
            }
        }

        setVideoThumbPlayingId(collectionId);
    }

    const stopThumbVideo = () => {
        if(vidRef && vidRef.current && getIsPlaying()) {
            vidRef.current.pause();
        }
    }

    // Use to prevent errors when trying to call video.play() or .pause()
    const getIsPlaying = () => {
        if( vidRef && vidRef.current) {
            const video = vidRef.current;
            return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
        }
    }

    return (
        <div onPointerUp={onItemClick} onPointerEnter={onVideoPointerEnter} className="content-collection content-grid-item">
            <div className="content-collection-details">
                <div className="content-collection-details-title">{title}</div>
            </div>
            {
                ((!thumbnailType || thumbnailType === ContentType.image) && 
                    <div className="content-collection-thumbnail" style={{backgroundImage: `url(${thumbnail})`}}/>)
            }
            {
                ((thumbnailType && thumbnailType === ContentType.video) && 
                    <video 
                        ref={vidRef}
                        src={thumbnail}
                        className='content-collection-thumbnail-video'
                        preload='auto' playsInline muted loop style={thumbAlignLeft ? {left: 0, transform: 'translateX(0)'} : {}}
                    />
                )
            }
            {
                (thumbnailPoster) &&
                <div ref={posterRef} className={`content-collection-poster ${shouldPlay ? 'active' : ''}`} style={{backgroundImage: `url(${thumbnailPoster})`}}></div>
            }
        </div>
    );
}