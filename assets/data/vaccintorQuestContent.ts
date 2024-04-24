import { ContentCollection, ContentType } from "./content";

const vaccinatorQuest: ContentCollection = {
    title: 'Vaccinator Quest',
    thumbnail: '/assets/images/content/vaccinator_quest/thumbPoster.jpg',
    content: {
        title: 'Vaccinator Quest',
        externalUrl: 'https://www.one.org/stories/vaccinator-quest-game-gavi/',
        contentUrl: 'https://www.one.org/stories/vaccinator-quest-game-gavi/',
        description: `Description`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/vaccinator_quest/content01.mp4',
                contentType: ContentType.video,
                columns: 4,
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 6,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content01.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/vaccinator_quest/content02.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/vaccinator_quest/content03.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/vaccinator_quest/content04.png',
                contentType: ContentType.image,
                columns: 2
            },
        ],
    }
};

export default vaccinatorQuest;