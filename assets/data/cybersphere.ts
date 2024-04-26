import { ContentCollection, ContentType } from "./content";

const cybersphere: ContentCollection = {
    title: "Beat 'em up Game Engine",
    thumbnail: '/assets/images/content/cybersphere/thumbPoster.png',
    content: {
        title: "Beat 'em up Game Engine",
        externalUrl: 'https://play.date',
        contentUrl: '',
        description: `Beat em up game engine for the Playdate handheld console.`,
        content: [    
            // Main video
            {
                content: '/assets/videos/content/cybersphere/video1.gif',
                contentType: ContentType.image,
                columns: 4
            },
        ],
    }
};

export default cybersphere;