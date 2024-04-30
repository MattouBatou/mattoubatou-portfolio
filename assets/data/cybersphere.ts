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
`Beat 'em up game engine, for the Playdate handheld console, written entirely in the C programming language.`,

        content: [    
            // Main video
            {
                contentType: ContentType.spacer,
                columns: 3
            },
            {
                content: '/assets/videos/content/cybersphere/video1.gif',
                contentType: ContentType.image,
                columns: 6
            },
            {
                contentType: ContentType.spacer,
                columns: 3
            },
            {
                content: 
`Current engine features include: animated sprites, tilemap loading tilemap rendering, entity spawning, entity management systems, combat system and efficient collision detection.

Custom exporters for Texture Packer, Tiled and Aseprite have also been developed to help speed up my workflow.

All game content is currently made up of placeholder assets until most of the game engine features are complete.

Once the main game engine features are complete I will be making a full game, doing all the art/animations, music/SFX, narrative, writing and game design myself.

After I have released a game on the Playdate using this engine, I will port it over to PC, consoles and mobile in full colour, 16:9 aspect ratio and at 2 or 3 times the Playdate's resolution resolution`,
                contentType: ContentType.text,
                columns: 12
            },
        ],
    }
};

export default cybersphere;