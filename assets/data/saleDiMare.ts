import { ContentCollection, ContentType, WorkType } from "./content";
import skills from "constants/skills";

const saleDiMare: ContentCollection = {
    title: 'Birra Moretti',
    thumbnail: '/assets/images/content/sale_di_mare/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-01-2024'), end: new Date('02-01-2024')},
        workType: WorkType.freelance,
        skills: [skills.ts, skills.phaser, skills.html, skills.css, skills.webpack, skills.trello, skills.texturePacker, skills.photoshop, skills.illustrator]
    },
    content: {
        externalUrl: {
            url: 'https://www.birramoretti.com/gb/en/ape-game',
        },
        contentUrl: {
            url: 'https://sdm.birra-moretti.com/index.html',
            name: 'Play!'
        },
        description: `Game developed for Birra Moretti for a new lager ad campaign, working through Hoopla Digital.`,
        content: [
            // Main video content with project description
            {
                content: '/assets/videos/content/sale_di_mare/video01.mp4',
                contentType: ContentType.video,
                columns: 2,
                portrait: true
            },
            // Images content
            //// Portrait
            {
                content: '/assets/images/content/sale_di_mare/portrait/content1.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content2.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content3.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content5.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content6.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            //// Landscape
            // row 1
            {
                content: '/assets/images/content/sale_di_mare/landscape/content1.jpg',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content2.jpg',
                contentType: ContentType.image,
                columns: 4
            },
            // row 2
            {
                content: '/assets/images/content/sale_di_mare/landscape/content3.jpg',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content4.jpg',
                contentType: ContentType.image,
                columns: 4
            },
            // row 3
            {
                content: '/assets/images/content/sale_di_mare/landscape/content5.jpg',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content6.jpg',
                contentType: ContentType.image,
                columns: 4
            },
        ],
    }
};

export default saleDiMare;