import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContentCollection, getContentCollection } from 'assets/data/content';

import ProjectItem from 'components/Project/ProjectItem';

type projectParams = {
    contentId: number,
};

export async function loader({ params }: any): Promise<ContentCollection> {
    const typedParams = params as unknown as projectParams;
    const projectContent = await getContentCollection(typedParams.contentId);
    return projectContent;
}

export default function () {
    const projectContent = useLoaderData() as ContentCollection;

    if(!projectContent) {
        return <></>;
    }

    return (
        <div className="project-container">
            <ProjectItem contentCollection={projectContent}/>
        </div>
    )
};