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
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
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