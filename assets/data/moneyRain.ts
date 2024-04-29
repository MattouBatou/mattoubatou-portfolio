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
        externalUrl: 'https://www.gameaccount.com/',
        contentUrl: 'https://www.gameaccount.com/games/money-rain',
        description: `Slot game front-end I developed for Game Account Network (GAN).`,
        content: [
            {
                content: '/assets/videos/content/money_rain/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
        ],
    }
};

export default moneyRain;