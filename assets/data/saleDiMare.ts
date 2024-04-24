import { ContentCollection, ContentType } from "./content";

const saleDiMare: ContentCollection = {
    title: 'Birra Moretti',
    thumbnail: '/assets/images/content/sale_di_mare/thumbPoster.jpg',
    content: {
        title: 'Birra Moretti: Sale Di Mare',
        externalUrl: 'https://www.birramoretti.com/gb/en/ape-game',
        contentUrl: 'https://sdm.birra-moretti.com/index.html',
        description: `Game developed for Birra Moretti for a new lager ad campaign, working through Hoopla Digital.`,
        content: [
            // Main video content with project description
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/sale_di_mare/video01.mp4',
                contentType: ContentType.video,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            // Images content
            //// Portrait
            {
                content: '/assets/images/content/sale_di_mare/portrait/content1.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content2.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content3.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content4.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content5.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/sale_di_mare/portrait/content6.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            //// Landscape
            {
                content: '/assets/images/content/sale_di_mare/landscape/content1.jpg',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content2.jpg',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content3.jpg',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content4.jpg',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content5.jpg',
                contentType: ContentType.image,
                columns: 3
            },
            {
                content: '/assets/images/content/sale_di_mare/landscape/content6.jpg',
                contentType: ContentType.image,
                columns: 3
            },
        ],
    }
};

export default saleDiMare;