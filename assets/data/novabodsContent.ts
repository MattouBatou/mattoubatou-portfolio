import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const novabods: ContentCollection = {
    title: 'Novabods',
    thumbnail: '/assets/images/content/novabods/thumbPoster.png',
    stats: {
        dateRange: { start: new Date('11-17-2016'), end: new Date('01-04-2017')},
        workType: WorkType.fullTime,
        skills: [
                skills.js, skills.phaser, skills.pixi, skills.easel, skills.html, skills.css, skills.canvas, skills.jquery, skills.angular, skills.webpack, 
                skills.trello, skills.jira, skills.confluence, 
                skills.svg, skills.texturePacker, skills.photoshop, skills.illustrator, skills.inkScape]
    },
    content: {
        externalUrl: {
            url: 'https://educationcity.com',
            name: 'Education City',
        },
        contentUrl: {
            url: 'https://www.educationcity.com/blog/educationcity-invites-you-to-play-novabods/',
            name: 'App article',
        },
        description: `Novabods was a gamified eLearning platform for primary school level children for use at home on mobile and desktop devices that is no longer operating. It was developed by Education City as a brand new product using a lot of the same content and tech that I had developed while working on content for the main Education City product.`,
        content: [
            {
                content: '/assets/videos/content/novabods/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content02.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content03.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/novabods/content04.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content:
`I joined a team of around 10 developers working on this project which was built with Angular and PixiJS targeting desktop browsers and compiled to Android and iOS apps using Cordova.

I worked on several prominent features in the app as well as consulted on almost everything canvas performance focused with PixiJS due to already working with PixiJS when I was part of the wider Education City development team.

I worked on making the app completely responsive on all devices, player ship customisation (such as the ships colour and name), planet selection screen (each planet housed a collection of content around a specific theme and learning age/ability), some of the animation logic around navigating through the planets (this is to select a piece of content to play), a streaming video player using videojs with support for multiple quality versions, fullscreen support, volume controls, video scrubbing controls and subtitles.

I was also pivotal in integrating Education City content and frameworks that I had already built while working on the main Education City development team.`,
                contentType: ContentType.text,
                columns: 12
            }
        ],
    }
};

export default novabods;