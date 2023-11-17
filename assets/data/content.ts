export enum ContentType {
    image,
    iframe,
    imageUrl,
    videoUrl
};

// ContentItem
// A piece of 'content' describing a single project.
// @url: a link to the original content or an article about that content.
// @content: content will be asset urls. These could be images, gifs, videos, or links to external content intended to be loaded in an iFrame or <object>.
export interface ContentItem {
    title: string,
    url: string | null,
    // tags: string[] - e.g. `js, svg, dom api, eLearning, game, drag n drop`
    description: string,
    contentType: ContentType,
    content: string | string[]
};

// ContentCollection
// A collection of content under one category, usually a company I did work for.
export interface ContentCollectionDetails {
    title: string,
    url: string,
    thumbnail: string,
}
export interface ContentCollection extends ContentCollectionDetails {
    content: ContentItem | ContentItem[]
};

const educationCity: ContentCollection = {
    title: `Education City`,
    url: `educationcity.com`,
    thumbnail: 'assets/images/thumbnails/educationcityLogo.jpg',
    content: [
        {
            title: 'Custom Game Framework DOM + SVG',
            url: 'https://firstlook.educationcity.com/content/Activity/index/25839',
            description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
            contentType: ContentType.iframe,
            content: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        },
        {
            title: 'Test Questionaire framework',
            url: 'https://firstlook.educationcity.com/content/Assessment/index/41668',
            description: 'Questionaire framework',
            contentType: ContentType.iframe,
            content: 'https://firstlook.educationcity.com/content/Assessment/index/41668'
        }
    ]
};

const AllContent: ContentCollection[] = [ educationCity, educationCity, educationCity, educationCity, educationCity, educationCity, educationCity, educationCity ];
export default AllContent;