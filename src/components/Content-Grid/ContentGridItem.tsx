import React from 'react';
import { ContentCollectionDetails} from '../../../assets/data/content';

export default function ContentGridItem(contentCollectionDetails: ContentCollectionDetails) {

return (
    <div className="content-collection content-grid-item" style={{backgroundImage: `url(${contentCollectionDetails.thumbnail})`}}>
        <h2>{contentCollectionDetails.title}</h2>
        <a href={contentCollectionDetails.url}>link</a>
    </div>
    );
}