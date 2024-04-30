import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const bubble_n_squeak: ContentCollection = {
    title: "Bubble 'N Squeak",
    thumbnail: '/assets/images/content/bubble_n_squeak/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-10-2016'), end: new Date('01-011-2016')},
        workType: WorkType.fullTime,
        skills: [
            skills.js, skills.phaser, skills.html, skills.css, skills.canvas, skills.jquery, skills.webpack, 
            skills.trello, skills.jira, skills.confluence, 
            skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: {
            url: 'https://educationcity.com',
            name: 'Education City',
        },
        contentUrl: {
            url: 'https://firstlook.educationcity.com/content/Activity/index/25839',
            name: 'Game Demo',
        },
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