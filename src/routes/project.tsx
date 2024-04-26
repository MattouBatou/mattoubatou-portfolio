import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContentCollection, getContentCollection } from 'assets/data/content';

import ProjectItem from 'components/Project/ProjectItem';

type projectParams = {
    contentId: number,
};

export async function loader({ params }: any): Promise<ContentCollection> {
    const typedParams = params as unknown as projectParams;
    const project = await getContentCollection(typedParams.contentId);
    return project;
}

export default function () {
    const project = useLoaderData() as ContentCollection;

    if(!project) {
        return <></>;
    }

    return (
        <div className="project-container">
            <ProjectItem itemData={project.content} thumbnail={project.thumbnail}/>
        </div>
    )
};