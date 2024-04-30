import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const novabods: ContentCollection = {
    title: 'Novabods',
    thumbnail: '/assets/images/content/novabods/thumbPoster.png',
    stats: {
        dateRange: { start: new Date('01-01-2016'), end: new Date('01-04-2017')},
        workType: WorkType.fullTime,
        skills: [
                skills.js, skills.phaser, skills.pixi, skills.easel, skills.html, skills.css, skills.canvas, skills.jquery, skills.angular, skills.webpack, 
                skills.trello, skills.jira, skills.confluence, 
                skills.svg, skills.texturePacker, skills.photoshop, skills.illustrator, skills.inkScape]
    },
    content: {
        externalUrl: {
            url: 'https://educationcity.com',
            name: 'Education City',
        },
        contentUrl: {
            url: 'https://www.educationcity.com/blog/educationcity-invites-you-to-play-novabods/',
            name: 'App article',
        },
        description: 
`Novabods was a gamified eLearning platform for primary school level children for use at home on mobile and desktop devices.

Novabods is no longer available.
`,
        content: [
            {
                content: '/assets/videos/content/novabods/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content04.png',
                contentType: ContentType.image,
                columns: 4
            }
        ],
    }
};

export default novabods;