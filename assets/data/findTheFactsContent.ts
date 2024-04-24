import { ContentCollection, ContentType } from "./content";

const qmsFindTheFacts: ContentCollection = {
    title: `Find the Facts`,
    thumbnail: '/assets/images/content/find_the_facts/thumbPoster.jpg',
    content: {
        title: 'Find the Facts',
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-one/game',
        description: 
        `Made for Quality Meat Scotland's "Find the Facts" educational resources for primary schools.
        Spin the Wheel to answer true or false questions about Scottish meat production.`,
        content: [
            {
                content: '/assets/images/content/find_the_facts/thumbPoster.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 4,
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1
            },
            {
                content: '/assets/videos/content/find_the_facts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1
            },
            {
                content: '/assets/images/content/find_the_facts/content01.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/find_the_facts/content02.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/find_the_facts/content03.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/find_the_facts/content04.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/find_the_facts/content05.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/find_the_facts/content06.png',
                contentType: ContentType.image,
                columns: 2
            }
    ],
    },
}

export default qmsFindTheFacts;