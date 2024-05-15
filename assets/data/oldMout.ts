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
        externalUrl: {
            url: 'https://www.oldmoutcider.co.uk/',
        },
        contentUrl: {
            url: 'https://hoopladigital.co.uk/hooplay/',
        },
        description: `HTML5 canvas game developed for Old Mout Cider’s latest cider flavor releases coming out in 2024 in partnership with WWF to raise environmental awareness of our carelessly discarded rubbish and the effects it has on wildlife.`,
        content: [
            // Main Video
            {
                content: '/assets/videos/content/old_mout/video01.mp4',
                contentType: ContentType.video,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/old_mout/content01.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/old_mout/content02.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/old_mout/content03.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/old_mout/content04.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: '/assets/images/content/old_mout/content05.jpg',
                contentType: ContentType.image,
                columns: 2,
                portrait: true,
            },
            {
                content: 
`Full game development written by me with Typescript and Phaser targeting mobile devices.

Control the brands mascot as they surf across a beach front collecting as many items of rubbish as possible before the time runs out.

Game controls use a single finger swipe to move the character left and right.

Spawning of collidable objects (rocks) and collectable items (rubbish) is procedural so every play through is a little different with checks and balances to control the randomness to preserve the same game feel with each play through.

Animation of static game assets is all done in code with chains of tweens to provide expressive and responsive feedback to player actions (also note the subtle bobbing/swaying animations on the player and rubbish items to sell the effect of being in the ocean).

Clever use of a limited amount of assets to provide quick load times while still providing a varied experience.

Responsive elements in the UI of static screens ensure the game always looks its best no matter the screen size of the user's mobile device.

Texture packer was used to create texture atlases to reduce the number of http requests for assets to speed up loading times on poor wireless connections.

Assets were received from the client in PSD format and processed by me in Photoshop to create the final production assets.

I always maintain my own Trello board which is shared with the client from day 1 of development for full project transparency.`,
                contentType: ContentType.text,
                columns: 12
            }
        ],
    }
};

export default oldMout;