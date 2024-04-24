import { ContentCollection, ContentType } from "./content";

const novabods: ContentCollection = {
    title: 'Novabods',
    thumbnail: '/assets/images/content/novabods/thumbPoster.png',
    content: {
        title: 'Novabods',
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/novabods/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 6
            },
            {
                content: '/assets/images/content/novabods/content01.png',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/novabods/content02.png',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/novabods/content03.png',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/novabods/content04.png',
                contentType: ContentType.image,
                columns: 3
            }
        ],
    }
};

export default novabods;