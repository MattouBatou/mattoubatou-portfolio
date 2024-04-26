import { ContentCollection, ContentType } from "./content";

const qmsKnowYourCuts: ContentCollection = {
    title: `Know Your Cuts`,
    thumbnail: '/assets/images/content/know_your_cuts/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-06-2020'), end: new Date('01-06-2020')}
    },
    content: {
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-five/game',
        description: 
        `Made for Quality Meat Scotland's "Farming Foodsteps" educational resources for primary schools.
        Drag and drop game to learn the names of different cuts of meat.`,
        content: [
            {
                content: '/assets/videos/content/know_your_cuts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content01.png',
                contentType: ContentType.image,
                columns: 4
            },

            {
                content: '/assets/images/content/know_your_cuts/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content04.png',
                contentType: ContentType.image,
                columns: 4
            },

            {
                content: '/assets/images/content/know_your_cuts/content05.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content06.png',
                contentType: ContentType.image,
                columns: 4
            }
        ],
    },
}

export default qmsKnowYourCuts;