import React, { ReactNode } from 'react';

import Content from 'assets/data/content';

import ContentGridItem from 'components/Content-Grid/ContentGridItem';

export default function Main() {
    let renderContentCollections = () => {
        let node: ReactNode[] = [];
        Content.forEach((collection, collectionIndex) => {
            node.push(
                <ContentGridItem
                    key={collection.title+collectionIndex}
                    title={collection.title}
                    url={collection.url}
                    thumbnail={collection.thumbnail}
                />
            );
        });

        return node;
    };

    return(
        <main className="app-main content-grid">
            {renderContentCollections()}
        </main>
    );
}