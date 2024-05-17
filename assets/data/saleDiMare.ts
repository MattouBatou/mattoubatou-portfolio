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
        description: `HTML5 canvas game made with Typescript and Phaser for a marketing campaign for Birra Moretti’s new Lager beveridge launch.`,
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
            {
                content: `The game contains 3 Italian meal recipes that pair well with their new drink. The player selects a recipe and then is tasked with finding the ingredients from a classic Italian Piaggio Ape vehicle, a common vehicle used to sell fresh ingredients in marketplaces across Italy.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Fully responsive to work across mobile devices in both landscape and portrait as well as desktop screens.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Some UI elements change depending on the size of the viewport area to best maximise the space available.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Smooth tween based animations when selecting one of the correct ingredients.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Camera shake when selecting an incorrect ingredient.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Animation to highlight an ingredient that has already been selected.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `On mobile devices, pan the game scenes camera with a single finger gesture and pinch to zoom.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Game logic prevents aggressive taps on the screen from initiating a camera pan to prevent user frustration.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Ingredient crates in the Ape vehicle are randomised on each play to keep gameplay fresh.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `At randomised intervals, the company mascot appears from behind the Ape vehicle to give a toast to the user.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Share on social media link at the end of the game using the Javascript Share API.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Uses a mixture of PNGs (where transparency is needed) and JPGs to keep file sizes to a minimum while displaying a wide variety of game assets.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Texture packer was used to create texture atlases to reduce the number of http requests for assets to speed up loading times on poor wireless connections.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `Assets were received from the client in PSD format and processed by me in Photoshop to create the final production assets.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `On-brand loading screen while assets are downloaded before the game is shown.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            {
                content: `I always maintain my own Trello board which is shared with the client from day 1 of development for full project transparency.`,
                contentType: ContentType.textBox,
                columns: 3
            }
        ],
    }
};

export default saleDiMare;