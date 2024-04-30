import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const qmsFindTheFacts: ContentCollection = {
    title: `Find the Facts`,
    thumbnail: '/assets/images/content/find_the_facts/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-07-2020'), end: new Date('01-07-2020')},
        workType: WorkType.freelance,
        skills: [skills.js, skills.construct, skills.html, skills.css, skills.trello, skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: {
            url: 'https://farmingfoodsteps.co.uk/',
        },
        contentUrl: {
            url: 'https://farmingfoodsteps.co.uk/lesson-one/game',
            name: 'Play!',
        },
        description: 
        `Made for Quality Meat Scotland's "Find the Facts" educational resources for primary schools.
        Spin the Wheel to answer true or false questions about Scottish meat production.`,
        content: [
            {
                content: '/assets/videos/content/find_the_facts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content04.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content05.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content06.png',
                contentType: ContentType.image,
                columns: 4
            }
    ],
    },
}

export default qmsFindTheFacts;