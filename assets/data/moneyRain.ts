import { ContentCollection, ContentType } from "./content";

const moneyRain: ContentCollection = {
    title: 'Money Rain',
    thumbnail: '/assets/images/content/money_rain/thumb.jpg',
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
                contentType: ContentType.video,
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
        ],
    }
};

export default moneyRain;