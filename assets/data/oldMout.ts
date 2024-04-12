import { ContentCollection, ContentType } from "./content";

const oldMout: ContentCollection = {
    title: 'Old Mout Cider',
    thumbnail: '/assets/videos/content/old_mout/video_thumb.mp4',
    thumbnailType: ContentType.video,
    content: {
        title: 'Old Mout Cider',
        externalUrl: 'https://www.oldmoutcider.co.uk/',
        contentUrl: 'https://hoopladigital.co.uk/hooplay/',
        description: `Game developed for Old Mout Cider working through Hoopla Digital.`,
        content: [
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/videos/content/old_mout/video01.mp4',
                contentType: ContentType.video,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.description,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/images/content/old_mout/content01.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content02.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content03.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/images/content/old_mout/content04.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/old_mout/content05.jpg',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
        ],
    }
};

export default oldMout;