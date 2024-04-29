import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const vaccinatorQuest: ContentCollection = {
    title: 'Vaccinator Quest',
    thumbnail: '/assets/images/content/vaccinator_quest/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('03-01-2020'), end: new Date('04-01-2020')},
        workType: WorkType.freelance,
        skills: [skills.js, skills.construct, skills.html, skills.css, skills.jquery, skills.trello, skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: 'https://www.one.org/stories/vaccinator-quest-game-gavi/',
        contentUrl: 'https://www.one.org/stories/vaccinator-quest-game-gavi/',
        description: `Description`,
        content: [
            {
                content: '/assets/videos/content/vaccinator_quest/content01.mp4',
                contentType: ContentType.video,
                columns: 4,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/vaccinator_quest/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/vaccinator_quest/content03.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content04.png',
                contentType: ContentType.image,
                columns: 4
            },
        ],
    }
};

export default vaccinatorQuest;