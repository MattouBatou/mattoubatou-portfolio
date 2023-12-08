import React, { ReactNode  } from 'react';
import ContentGridItem from 'components/Content-Grid/ContentGridItem';
import { ContentCollection } from 'assets/data/content';

export default function renderContentCollections(contentCollection: ContentCollection[]) {
    let nodes: ReactNode[] = [];
    contentCollection.forEach((collection, collectionIndex) => {
        nodes.push(
            <ContentGridItem
                key={collection.title+collectionIndex}
                title={collection.title}
                description={collection.content.title}
                thumbnail={collection.thumbnail}
                collectionId={collectionIndex}
            />
        );
    });

    return <div className='projects-list content-grid'>{nodes}</div>;
};