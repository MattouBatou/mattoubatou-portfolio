import React, { ReactNode } from 'react';
import ContentGridItem from 'components/Content-Grid/ContentGridItem';
import { ContentCollection } from 'assets/data/content';

interface ListProjectsProps {
    contentCollection: ContentCollection[],
}

export default function renderContentCollections(props: ListProjectsProps) {
    const {contentCollection} = props;

    let nodes: ReactNode[] = [];
    contentCollection.forEach((collection, collectionIndex) => {
        nodes.push(
            <ContentGridItem
                key={collection.title+collectionIndex}
                title={collection.title}
                thumbnail={collection.thumbnail}
                collectionId={collectionIndex}
            />
        );
    });

    return <div className='projects-list content-grid'>{nodes}</div>;
};