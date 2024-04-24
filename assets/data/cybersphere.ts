import { ContentCollection, ContentType } from "./content";

const cybersphere: ContentCollection = {
    title: 'Cybersphere',
    thumbnail: '/assets/videos/content/cybersphere/videoThumb.gif',
    thumbnailPoster: '/assets/images/content/cybersphere/thumbPoster.png',
    thumbnailType: ContentType.image,
    content: {
        title: 'Cybersphere',
        externalUrl: 'https://play.date',
        contentUrl: '',
        description: `Beat em up game engine for the Playdate handheld console.`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/cybersphere/video1.gif',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            // Description
            {
                content: '',
                contentType: ContentType.description,
                columns: 6
            },
        ],
    }
};

export default cybersphere;