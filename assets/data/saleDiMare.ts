import { ContentCollection, ContentType } from "./content";

const saleDiMare: ContentCollection = {
    title: 'Birra Moretti',
    thumbnail: '/assets/videos/content/sale_di_mare/video_thumb.mp4',
    thumbnailType: ContentType.video,
    content: {
        title: 'Birra Moretti: Sale Di Mare Game',
        externalUrl: 'https://www.birramoretti.com/gb/en/ape-game',
        contentUrl: 'https://sdm.birra-moretti.com/index.html',
        description: `Game developed for Birra Moretti for a new lager ad campaign, working through Hoopla Digital.`,
        content: [
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
            {
                content: '/assets/images/content/old_mout/content01.jpg',
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content02.jpg',
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content03.jpg',
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/images/content/old_mout/content04.jpg',
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content05.jpg',
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
        ],
    }
};

export default saleDiMare;