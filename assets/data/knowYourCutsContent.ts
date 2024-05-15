import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const qmsKnowYourCuts: ContentCollection = {
    title: `Know Your Cuts`,
    thumbnail: '/assets/images/content/know_your_cuts/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-06-2020'), end: new Date('01-06-2020')},
        workType: WorkType.freelance,
        skills: [skills.js, skills.easel, skills.html, skills.css, skills.trello, skills.texturePacker, skills.photoshop, skills.animate]
    },
    content: {
        externalUrl: {
            url: 'https://farmingfoodsteps.co.uk/',
        },
        contentUrl: {
            url: 'https://farmingfoodsteps.co.uk/lesson-five/game',
            name: 'Play!',
        },
        description: 
`HTML5 canvas game made for Quality Meat Scotland's "Farming Foodsteps" educational resources for primary schools. This game was a teaching aid to be used by primary school teachers during interactive group activities.

Drag and drop game to learn the names of different cuts of meat.`,
        content: [
            {
                content: '/assets/videos/content/know_your_cuts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content01.png',
                contentType: ContentType.image,
                columns: 4
            },

            {
                content: '/assets/images/content/know_your_cuts/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content04.png',
                contentType: ContentType.image,
                columns: 4
            },

            {
                content: '/assets/images/content/know_your_cuts/content05.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/know_your_cuts/content06.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content:
`I provided full development services for this game from start to finish.

This game was a ‘rescue project’ that had been abandoned by another contractor and had a super fast turnaround time of ~24 hours development time within 2 days to deliver a playable experience for the client’s campaign launch event.

The game is a drag and drop matching game to help memorise the names and positions of cuts of meat. There are three different animals to choose from with negative and positive feedback during gameplay.

The game came to me as a barely started Adobe Animate project with a few assets placed and no functionality had been coded.
Since a quick turnaround time was needed and all assets were created within Adobe Animate, I used the HTML5 export option which exports to EaselJS. All coding was done in Javascript within Adobe Animate.

I coded the drag and drop logic (no libraries) to ensure a great, bug free user experience (an often overlooked UI interaction mechanic due to its apparent simplicity).

I always maintain my own Trello board which is shared with the client from day 1 of development for full project transparency.`,
                contentType: ContentType.text,
                columns: 12
            }
        ],
    },
}

export default qmsKnowYourCuts;