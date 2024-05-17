import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const qmsFindTheFacts: ContentCollection = {
    title: `Find the Facts`,
    thumbnail: '/assets/images/content/find_the_facts/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-07-2020'), end: new Date('01-07-2020')},
        workType: WorkType.freelance,
        skills: [skills.js, skills.construct, skills.html, skills.css, skills.trello, skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: {
            url: 'https://farmingfoodsteps.co.uk/',
        },
        contentUrl: {
            url: 'https://farmingfoodsteps.co.uk/lesson-one/game',
            name: 'Play!',
        },
        description: 
`HTML5 canvas game made for Quality Meat Scotland's "Find the Facts" educational resources for primary schools. This game was a teaching aid to be used by primary school teachers during interactive group activities.

Spin the Wheel to answer true or false questions about Scottish meat production.`,
        content: [
            {
                content: '/assets/videos/content/find_the_facts/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content04.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content05.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                contentType: ContentType.spacer,
                columns: 4
            },
            {
                content: '/assets/images/content/find_the_facts/content06.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                contentType: ContentType.spacer,
                columns: 4
            },
            {
                content: `I provided full development services for this game from start to finish.`,
                contentType: ContentType.textBox,
                columns: 2
            },
            {
                content: `The game is a True or False questionnaire using a bank of around 20 questions. Questions are selected at random. Each time a question has been selected, it is removed from the bank of questions. Each time the game is replayed, only new questions are shown. When all questions have been viewed, the original bank of questions is reset and all questions can be viewed again.`,
                contentType: ContentType.textBox,
                columns: 4
            },
            {
                content: `The “Wheel” in the game shows various question category images in quick succession until it lands on the image corresponding to the selected question’s category.`,
                contentType: ContentType.textBox,
                columns: 4
            },
            {
                content: `Coding was done using Javascript with Construct 3’s Javascript API and also some visual scripting.`,
                contentType: ContentType.textBox,
                columns: 2
            },
            {
                content: `Some animations were added in the game’s intro sequence to give a sense of fun while the teacher would be explaining the activity to a group of children sitting around either a white board or mobile tablet.`,
                contentType: ContentType.textBox,
                columns: 4
            },
            {
                content: `Assets were received from the client in PSD format and processed by me in Photoshop to create the final production assets.`,
                contentType: ContentType.textBox,
                columns: 4
            },
    ],
    },
}

export default qmsFindTheFacts;