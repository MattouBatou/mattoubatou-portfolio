import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const { aseprite, C, cMake, hacknplan, js, playdate, shell, texturePacker, tiled } = skills;

const cybersphere: ContentCollection = {
    title: "Beat 'em up Game Engine",
    thumbnail: '/assets/images/content/cybersphere/thumbPoster.png',
    stats: {
        dateRange: { start: new Date('01-01-2023'), end: null},
        workType: WorkType.MattouBatou,
        skills: [C, playdate, js, cMake, shell, hacknplan, tiled, aseprite, texturePacker]
    },
    content: {
        externalUrl: {
            url: 'https://play.date'
        },
        description: 
`Beat 'em up game engine, for the Playdate handheld console, written entirely in the C programming language.

Current engine features include: animated sprites, tilemap loading/rendering, entity spawning/rendering, entity management systems, combat system and efficient collision detection.

Custom exporters for Texture Packer, Tiled and Aseprite have also been developed to help speed up my workflow.

All game content is currently made up of placeholder assets until most of the game engine features are complete.
Once the main game engine features are complete I will be creating all the art/animations, music/SFX, narrative, writing and game design myself.`,

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