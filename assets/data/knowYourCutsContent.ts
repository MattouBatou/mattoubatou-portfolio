import { ContentCollection, ContentType } from "./content";

const qmsKnowYourCuts: ContentCollection = {
    title: `Know Your Cuts`,
    thumbnail: '/assets/videos/content/know_your_cuts/video01.mp4',
    thumbnailType: ContentType.video,
    content: {
        title: 'Know Your Cuts Game',
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-five/game',
        description: 
        `Made for Quality Meat Scotland's "Farming Foodsteps" educational resources for primary schools.
        Drag and drop game to learn the names of different cuts of meat.`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1
            },
            {
                content: '/assets/videos/content/know_your_cuts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 6,
            },
            {
                content: '/assets/images/content/know_your_cuts/content01.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/know_your_cuts/content02.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/know_your_cuts/content03.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/know_your_cuts/content04.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/know_your_cuts/content05.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/know_your_cuts/content06.png',
                contentType: ContentType.image,
                columns: 2
            }
        ],
    },
}

export default qmsKnowYourCuts;