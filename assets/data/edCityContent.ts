import { ContentCollection, ContentType } from "./content";

const educationCity: ContentCollection = {
    title: 'Education City',
    thumbnail: '/assets/images/content/edcity/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-07-2014'), end: new Date('01-04-2017')}
    },
    content: {
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
        content: [
            {
                content: '/assets/videos/content/edcity/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/edcity/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/edcity/content02.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content03.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content04.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content05.png',
                contentType: ContentType.image,
                columns: 4,
            }
        ],
    }
};

export default educationCity;