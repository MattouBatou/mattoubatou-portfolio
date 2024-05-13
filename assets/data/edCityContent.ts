import skills from "constants/skills";
import { ContentCollection, ContentType, WorkType } from "./content";

const educationCity: ContentCollection = {
    title: 'Education City',
    thumbnail: '/assets/images/content/edcity/thumbPoster.jpg',
    stats: {
        dateRange: { start: new Date('01-07-2014'), end: new Date('10-15-2016')},
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
            url: 'https://firstlook.educationcity.com/content/Activity/index/25839',
            name: 'Game Demo',
        },
        description: `Education City is a leading developer and publisher of primary school level online teaching resources used in over 75 countries. I worked full-time primarily as a Javascript game and tools developer but also started out developing Flash games before I aided in the transition to being fully HTML5 across all eLearning content.`,
        content: [
            {
                content: '/assets/videos/content/edcity/video01.mp4',
                contentType: ContentType.video,
                columns: 4
            },
            {
                content: '/assets/images/content/edcity/content01.png',
                contentType: ContentType.image,
                columns: 4
            },
            {
                content: '/assets/images/content/edcity/content02.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content03.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content04.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: '/assets/images/content/edcity/content05.png',
                contentType: ContentType.image,
                columns: 4,
            },
            {
                content: 
`I was brought in as a Javascript developer back in 2014 to help rebuild all of their interactive eLearning offerings in HTML5 so that they could be used on mobile devices at a time when schools were starting to introduce iPads as learning tools into classrooms.

During my first few months I was building individual Flash games using ActionScript. After those initial months me and another developer started to build HTML5 frameworks using a mixture of SVG and canvas that would allow the same types of content to be made for HTML5 with minimal changes to the artist or producers workflow. This became my daily work with the company for the rest of my time with them and led to a huge increase in the amount of content that could be produced and published on their platform.

I also developed 3 HTML5 casual games using the Phaser game engine.

I built countless game prototypes to showcase what was possible with HTML5 games on mobile devices, which helped the producer and educational consultant teams better understand the possibilities open to us when they were designing new content.

I helped to build 5 HTML5 game frameworks and accompanying WYSIWYG game building tools to allow the continued release of educational content on desktops and mobile devices.

I worked very closely with artists to ensure HTML5 games featured tv
quality cartoon animations (SVG and Canvas) while remaining optimised for the low-end devices available at the time (2014-2017).

Developed over 10 Flash games using AS2/AS3 and XML for game settings
and educational assets (copy text, audio, animations).

Mobile ready HTML5 video player with the videojs library with
accessibility features and subtitles for children’s educational songs
used in UK and Spanish primary schools.`,
                contentType: ContentType.text,
                columns: 12
            }
        ],
    }
};

export default educationCity;