import React from 'react';
import { ContentCollectionDetails } from 'assets/data/content';
import { Link } from 'react-router-dom';

type Props = Spread<ContentCollectionDetails, { description: string, collectionId: number }>;

export default function ContentGridItem({ title, thumbnail, description, collectionId }: Props) {

return (
    <Link to={`project/${collectionId}`} className="content-collection content-grid-item">
        <div className="content-collection-details">
            <h2>{title}</h2>
            <div className="content-collection-description">{description}</div>
        </div>
        <div className="content-collection-thumbnail" style={{backgroundImage: `url(${thumbnail})`}}/>
    </Link>
    );
}