import { ContentCollection, ContentType } from "./content";

const bubble_n_squeak: ContentCollection = {
    title: "Bubble 'N Squeak",
    thumbnail: '/assets/videos/content/bubble_n_squeak/video01.mp4',
    thumbnailType: ContentType.video,
    thumbAlignLeft: true,
    content: {
        title: "Bubble 'N Squeak",
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Standalone game made for the childrens home eLearning app, 'Novabods'.`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/bubble_n_squeak/video01.mp4',
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
        ],
    }
};

export default bubble_n_squeak;