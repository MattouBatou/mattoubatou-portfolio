import { ContentCollection, ContentType } from "./content";

const moneyRain: ContentCollection = {
    title: 'Money Rain',
    thumbnail: '/assets/images/content/money_rain/thumb.jpg',
    thumbnailType: ContentType.image,
    content: {
        title: 'Money Rain',
        externalUrl: 'https://www.gameaccount.com/',
        contentUrl: 'https://www.gameaccount.com/games/money-rain',
        description: `Slot game front-end I developed for Game Account Network (GAN).`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/money_rain/video01.mp4',
                contentType: ContentType.spacer,
                columns: 4
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 6
            },
            {
                content: '/assets/images/content/money_rain/content01.png',
                contentType: ContentType.spacer,
                columns: 3
            },
            {
                content: '/assets/images/content/money_rain/content02.png',
                contentType: ContentType.spacer,
                columns: 3
            },
            {
                content: '/assets/images/content/money_rain/content03.png',
                contentType: ContentType.spacer,
                columns: 3
            },
        ],
    }
};

export default moneyRain;