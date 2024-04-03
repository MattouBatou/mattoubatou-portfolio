export enum ContentType {
    spacer, // adding empty columns
    image,
    iframe,
    video,
    description
};

export type ContentSchema = {
    content: string,
    contentType: ContentType,
    columns?: number,
    rows?: number
};

export type ContentBundle = ContentSchema[];

// ContentItem
// A piece of 'content' describing a single project.
// @url: a link to the original content or an article about that content.
// @content: content will be asset urls. These could be images, gifs, videos, or links to external content intended to be loaded in an iFrame or <object>.
export interface ContentItem {
    title: string,
    externalUrl: string | null,
    contentUrl?: string | null,
    // tags: string[] - e.g. `js, svg, dom api, eLearning, game, drag n drop`
    description: string,
    content: ContentBundle
};

// ContentCollection
// A collection of content under one category, usually a company I did work for.
export interface ContentCollectionDetails {
    title: string,
    thumbnail: string,
    thumbnailType?: ContentType.image | ContentType.video,
    thumbAlignLeft?: boolean                                // left align thumbnail if true, centered if false. 
}
export interface ContentCollection extends ContentCollectionDetails {
    content: ContentItem
};

import educationCity from "./edCityContent";
import novabods from "./novabodsContent";
import bubble_n_squeak from "./bubbleNsqueak";
import vaccinatorQuest from "./vaccintorQuestContent";
import qmsKnowYourCuts from "./knowYourCutsContent";
import qmsFindTheFacts from "./findTheFactsContent";

const AllContent: ContentCollection[] = [ educationCity, bubble_n_squeak, novabods, vaccinatorQuest, qmsKnowYourCuts, qmsFindTheFacts, educationCity, novabods, qmsKnowYourCuts, qmsFindTheFacts ];

export const getContentCollection: (id: number) => Promise<ContentCollection> = async (id) => {
    const contentCollection = AllContent[id];
    return new Promise((resolve, reject) => {
        if(contentCollection) {
            resolve(AllContent[id]);
        } else {
            reject(`A content collection with id: ${id} could not be found.`);
        }
    });
}

export default AllContent;