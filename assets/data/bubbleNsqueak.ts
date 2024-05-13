import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const bubble_n_squeak: ContentCollection = {
    title: "Bubble 'N Squeak",
    thumbnail: '/assets/images/content/bubble_n_squeak/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('10-16-2016'), end: new Date('11-16-2016')},
        workType: WorkType.fullTime,
        skills: [
            skills.js, skills.phaser, skills.html, skills.css, skills.canvas, skills.jquery, skills.webpack, 
            skills.trello, skills.jira, skills.confluence, 
            skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: {
            url: 'https://educationcity.com',
            name: 'Education City',
        },
        contentUrl: {
            url: 'https://firstlook.educationcity.com/content/Activity/index/25839',
            name: 'Game Demo',
        },
        description: `HTML5 canvas game made with Phaser for the Novabods app while working full-time at Education City. It is an endless runner game where you have to move the character up and down on preset lanes to collect treasure and avoid obstacles to get the highest score possible.`,
        content: [
            {
                content: '/assets/videos/content/bubble_n_squeak/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/bubble_n_squeak/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content:
`All development work, game design and technical art consultation was delivered by me. I worked closely with an artist as we figured out the most optimal way to deliver a high level of quality in terms of animation while remaining highly optimal in terms of performance for the low end devices that would potentially be playing this content back in 2016.

It has simple on-screen button controls for mobile devices and keyboard controls for desktop.

Preset ‘lane’ positions are tweened to on button presses for smooth but snappy gameplay.

The player character is split into two parts, the main body with the hamster character inside and the propeller that has one constantly looping spinning animation that can be sped up or slowed down as the player’s speed changes due to hitting obstacles.

Backgrounds have parallax scrolling to give a sense of depth.

Game design was done using a json data structure, designed by me, that defined patterns of spawns for enemies and collectables that had an easy, medium or hard difficulty assigned to them. In-game logic would then randomly select spawns from these data structures, selecting a difficulty level depending on the elapsed time of the current playthrough. This ensured that each play through was different and varied while still having control over the overall gameplay difficulty. This always gives the player a positive experience and, with enough playthroughs, learn all the different types of spawn patterns so that they can consistently get high scores and show off to friends and family that can’t do as well, due to not having played as much. With completely random spawn patterns it would be impossible to allow a player to perform consistently better over time which would lead to a feeling of unfairness and lack of progression that comes from learning a game's design through gameplay.

Assets were received from the client in Adobe animate .fla format and processed by me in Photoshop to create the final production assets ready to be packed into texture atlases.

Texture packer was used to create texture atlases to reduce the number of http requests for assets to speed up loading times on poor wireless connections.`,
                contentType: ContentType.text,
                columns: 12
            }
        ],
    }
};

export default bubble_n_squeak;