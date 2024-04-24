import React, { ReactNode, useContext, useEffect, useState } from 'react';
import ContentGridItem from 'components/Content-Grid/ContentGridItem';
import { ContentCollection } from 'assets/data/content';
import GlobalContext from 'context/GlobalContext';

interface ListProjectsProps {
    contentCollection: ContentCollection[],
}

export default function renderContentCollections(props: ListProjectsProps) {
    const {contentCollection} = props;
    const [videoThumbPlayingId, setVideoThumbPlayingId] = useState(0);

    let nodes: ReactNode[] = [];
    contentCollection.forEach((collection, collectionIndex) => {
        nodes.push(
            <ContentGridItem
                key={collection.title+collectionIndex}
                title={collection.title}
                description={collection.content.title}
                thumbnail={collection.thumbnail}
                thumbnailType={collection.thumbnailType}
                thumbnailPoster={collection.thumbnailPoster}
                thumbAlignLeft={collection.thumbAlignLeft}
                collectionId={collectionIndex}
                shouldPlay={videoThumbPlayingId === collectionIndex}
                setVideoThumbPlayingId={setVideoThumbPlayingId}
            />
        );
    });

    return <div className='projects-list content-grid'>{nodes}</div>;
};