import { ContentCollection, ContentType } from "./content";

const bubble_n_squeak: ContentCollection = {
    title: "Bubble 'N Squeak",
    thumbnail: '/assets/images/content/bubble_n_squeak/thumbPoster.jpg',
    content: {
        title: "Bubble 'N Squeak",
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Standalone game made for the childrens home eLearning app, 'Novabods'.`,
        content: [
            {
                content: '/assets/videos/content/bubble_n_squeak/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/bubble_n_squeak/content01.png',
                contentType: ContentType.image,
                columns: 4
            }
        ],
    }
};

export default bubble_n_squeak;