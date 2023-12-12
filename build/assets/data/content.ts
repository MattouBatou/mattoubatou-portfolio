export enum ContentType {
    image,
    iframe,
    video
};

export type ContentSchema = {
    content: string,
    contentType: ContentType,
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
}
export interface ContentCollection extends ContentCollectionDetails {
    content: ContentItem
};

const educationCity: ContentCollection = {
    title: 'Education City',
    thumbnail: '/assets/images/thumbnails/EducationCity01-thumb.png',
    content: {
        title: 'Custom Game Framework DOM + SVG',
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
        content: [{
            content: '/assets/images/thumbnails/EducationCity01-thumb.png',
            contentType: ContentType.image,
        }, {
            content: '/assets/images/thumbnails/EducationCity01-thumb.png',
            contentType: ContentType.image
        }],
    }
};

const qmsKnowYourCuts: ContentCollection = {
    title: `Know Your Cuts`,
    thumbnail: '/assets/images/thumbnails/knowYourCuts-thumb.png',
    content: {
        title: 'HTML5 Game - Canvas',
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-five/game',
        description: 
        `Made for Quality Meat Scotland's "Farming Foodsteps" educational resources for primary schools.
        Drag and drop game to learn the names of different cuts of meat.`,
        content: [{
            content: '/assets/images/thumbnails/knowYourCuts-thumb.png',
            contentType: ContentType.image
        }],
    },
}

const AllContent: ContentCollection[] = [ educationCity, qmsKnowYourCuts, educationCity, educationCity, educationCity, educationCity, educationCity, educationCity ];

export const getContentCollection: (id: number) => Promise<ContentCollection> = async (id) => {
    const contentCollection = AllContent[id];
    console.log(contentCollection, id);
    return new Promise((resolve, reject) => {
        if(contentCollection) {
            resolve(AllContent[id]);
        } else {
            reject(`A content collection with id: ${id} could not be found.`);
        }
    });
}

export default AllContent;