import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const vaccinatorQuest: ContentCollection = {
    title: 'Vaccinator Quest',
    thumbnail: '/assets/images/content/vaccinator_quest/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('03-01-2020'), end: new Date('04-01-2020')},
        workType: WorkType.freelance,
        skills: [skills.js, skills.construct, skills.html, skills.css, skills.jquery, skills.trello, skills.texturePacker, skills.photoshop]
    },
    content: {
        externalUrl: { 
            url: 'https://www.one.org/stories/vaccinator-quest-game-gavi/',
            name: 'Game Article'
        },
        contentUrl: {
            url: 'https://www.instagram.com/sandboxxstudio/',
            name: 'Sandboxx Studio'
        },
        description: `HTML5 canvas game developed by Sandboxx Studio for the ONE charity organisation to encourage petition signings to help provide life-saving vaccines to remote communities in third world countries.`,
        content: [
            {
                content: '/assets/videos/content/vaccinator_quest/content01.mp4',
                contentType: ContentType.video,
                columns: 4,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/vaccinator_quest/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                contentType: ContentType.spacer,
                columns: 2
            },
            {
                content: '/assets/images/content/vaccinator_quest/content03.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content04.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: `I provided the main gameplay logic of scrolling the background, collisions with vehicles and collectible items, spawning of vehicles and collectable items, the boost system which speeds up the car as you collect items, game timer and triggers to pause the gameplay to give multiple choice questions that will alter the gameplay.`,
                contentType: ContentType.textBox,
                columns: 6
            },
            
            {
                content: `I also provided logic and layout for the cutscenes, the multiple choice question system including UI/UX logic and the pause menu with language select and audio muting.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            
            {
                content: `I provided these services using Javascript with Construct 3’s Javascript API and also some visual scripting.`,
                contentType: ContentType.textBox,
                columns: 3
            },
            
            {
                content: `I also provided form integration for linking the game to the petition form and the journey back to the game using url parameters to determine player choices and petition actions.`,
                contentType: ContentType.textBox,
                columns: 6
            },
            
            {
                content: `I also provided the logic for the in game name input including UX logic for iPhone and Android devices to allow a smooth experience with the popup virtual keyboards.`,
                contentType: ContentType.textBox,
                columns: 6
            },
        ],
    }
};

export default vaccinatorQuest;