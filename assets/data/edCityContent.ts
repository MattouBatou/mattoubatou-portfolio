import { ContentCollection, ContentType } from "./content";

const educationCity: ContentCollection = {
    title: 'Education City',
    thumbnail: '/assets/videos/content/edcity/video01.mp4',
    thumbnailType: ContentType.video,
    content: {
        title: 'Education City',
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
                content: '/assets/videos/content/edcity/video01.mp4',
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
                content: '/assets/images/content/edcity/content01.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/edcity/content02.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/edcity/content03.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/edcity/content04.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/edcity/content05.png',
                contentType: ContentType.image,
                columns: 2,
            }
        ],
    }
};

export default educationCity;