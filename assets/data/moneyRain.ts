import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const moneyRain: ContentCollection = {
    title: 'Money Rain',
    thumbnail: '/assets/images/content/money_rain/thumb.jpg',
    stats: {
        dateRange: { start: new Date('01-03-2021'), end: new Date('01-03-2022')},
        workType: WorkType.fullTime,
        skills: [
            skills.ts, skills.pixi, skills.react, skills.html, skills.css, skills.webpack, skills.mocha, skills.chai,
            skills.jira, skills.confluence, 
            skills.texturePacker, skills.photoshop, skills.illustrator]
    },
    content: {
        externalUrl: {
            url: 'https://www.gameaccount.com/',
        },
        contentUrl: {
            url: 'https://www.gameaccount.com/games/money-rain',
            name: 'Game Info',
        },
        description: `HTML5 canvas game developed for Incredible Technologies while working full-time at GAN using Typescript and Pixi.js.`,
        content: [
            {
                contentType: ContentType.spacer,
                columns: 2,
            },
            {
                content: '/assets/videos/content/money_rain/video01.mp4',
                contentType: ContentType.video,
                columns: 8
            },
            {
                contentType: ContentType.spacer,
                columns: 2,
            },
            {
                contentType: ContentType.spacer,
                columns: 2,
            },
            {
                content: `Novel slot animations use 3D planes to give the appearance of individual slots “flipping” over to partially reveal potential slot symbols before eventually landing on a slot symbol (using Pixi.js plugin ‘pixi-projection’).`,
                contentType: ContentType.textBox,
                columns: 4
            },
            {
                content: `PixiJS Particle-emitter was used for particle effects (coins and money when they fly around on a win).`,
                contentType: ContentType.textBox,
                columns: 4
            },
        ],
    }
};

export default moneyRain;