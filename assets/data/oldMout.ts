import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const oldMout: ContentCollection = {
    title: 'Old Mout Cider',
    thumbnail: 'assets/images/content/old_mout/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('11-01-2023'), end: new Date('12-01-2023')},
        workType: WorkType.freelance,
        skills: [skills.ts, skills.phaser, skills.html, skills.css, skills.webpack, skills.trello, skills.texturePacker, skills.photoshop, skills.illustrator]
    },
    content: {
        externalUrl: 'https://www.oldmoutcider.co.uk/',
        contentUrl: 'https://hoopladigital.co.uk/hooplay/',
        description: `Game developed for Old Mout Cider working through Hoopla Digital.`,
        content: [
            // Main Video
            {
                content: '/assets/videos/content/old_mout/video01.mp4',
                contentType: ContentType.video,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content01.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content02.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content03.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content04.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content05.jpg',
                contentType: ContentType.image,
                columns: 2
            },
        ],
    }
};

export default oldMout;