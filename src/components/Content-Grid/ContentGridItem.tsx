import React, { useEffect, useState } from 'react';
import { ContentCollectionDetails } from 'assets/data/content';
import { useNavigate } from 'react-router-dom';

type Props = Spread<ContentCollectionDetails, { collectionId: number }>;

export default function ContentGridItem({ 
    title, thumbnail, collectionId}: Props) {

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [hovering, setHovering] = useState(false);

    const onItemHover = ()=> {
        setHovering(true);
    };

    const onItemOut = ()=> {
        setHovering(false);
    };

    const onItemClick = () => {
        navigate(`${collectionId}`);
    };

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 80 * collectionId);
    }, []);

    return (
        <div onPointerUp={onItemClick} onPointerEnter={onItemHover} onPointerOut={onItemOut} className={`content-collection content-grid-item ${active ? 'active' : ''}`}>   
            <div className={`content-collection-thumbnail ${hovering ? 'hovering' : ''}`} style={{backgroundImage: `url(${thumbnail})`}}/>
        </div>
    );
}