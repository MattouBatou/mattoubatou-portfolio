import React, { useContext, useEffect } from 'react';
import { ContentBundle, ContentItem } from 'assets/data/content';

import ProjectContentItem from './ProjectContentItem';
import GlobalContext from 'context/GlobalContext';

type projectContentProps = {
    content: ContentBundle,
    descriptionContent: Omit<ContentItem, 'content'>;
}

export default function (props: projectContentProps) {
    const { content, descriptionContent } = props;

    const globalContextData = useContext(GlobalContext);
    const setAppTitle = () => globalContextData.updateState({pageTitle: descriptionContent.title});

    useEffect(()=>{
        console.log("PROJECT SET APP TITLE");
        setAppTitle();
    }, []);

    return (
        <div className='project-content'>
            {
                content.map((item, i) => {
                    return <ProjectContentItem item={item} index={i}  descriptionContent={descriptionContent} key={`project-content-item_${descriptionContent.title}_${i}`}/>
                })
            }
        </div>
    )
};