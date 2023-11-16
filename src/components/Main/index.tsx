import React, { ReactNode } from 'react';

import Content from '../../../assets/data/content';

export default function Main() {
    let renderContentCollections = () => {
        let node: ReactNode[] = [];
        Content.forEach((collection) => {
            node.push(
                <div className="content-collection" style={{backgroundImage: `url(${collection.thumbnail})`}}>
                    <h2>{collection.title}</h2>
                    <a href={collection.url}>link</a>
                </div>
            );
        });

        return node;
    };

    return(
        <main className="app-main">
            {renderContentCollections()}
        </main>
    );
}