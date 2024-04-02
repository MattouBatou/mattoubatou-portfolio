export enum ContentType {
    spacer, // adding empty columns
    image,
    iframe,
    video
};

export type ContentSchema = {
    content: string,
    contentType: ContentType,
    columns?: number,
    rows?: number
};

export type ContentBundle = ContentSchema[];

// ContentItem
// A piece of 'content' describing a single project.
// @url: a link to the original content or an article about that content.
// @content: content will be asset urls. These could be images, gifs, videos, or links to external content intended to be loaded in an iFrame or <object>.
export interface ContentItem {
    title: string,
    externalUrl: string | null,
    contentUrl?: string | null,
    // tags: string[] - e.g. `js, svg, dom api, eLearning, game, drag n drop`
    description: string,
    content: ContentBundle
};

// ContentCollection
// A collection of content under one category, usually a company I did work for.
export interface ContentCollectionDetails {
    title: string,
    thumbnail: string,
}
export interface ContentCollection extends ContentCollectionDetails {
    content: ContentItem
};

const educationCity: ContentCollection = {
    title: 'Education City',
    thumbnail: '/assets/images/content/edcity/content01.png',
    content: {
        title: 'Education City',
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
        content: [
            {
                content: '/assets/images/content/edcity/content01.png',
                contentType: ContentType.image,
                columns: 2
            }, 
            {
                content: '/assets/images/content/edcity/content02.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/edcity/content03.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '/assets/images/content/edcity/content04.png',
                contentType: ContentType.image,
                columns: 2,
            },
            {
                content: '',
                contentType: ContentType.spacer,
                columns: 1,
            },
            {
                content: '/assets/images/content/edcity/content05.png',
                contentType: ContentType.image,
                columns: 2,
            }
        ],
    }
};

const novabods: ContentCollection = {
    title: 'Novabods',
    thumbnail: '/assets/images/content/novabods/content02.png',
    content: {
        title: 'Novabods',
        externalUrl: 'https://educationcity.com',
        contentUrl: 'https://firstlook.educationcity.com/content/Activity/index/25839',
        description: `Drag and drop quiz game framework mixing DOM and SVG for rich user experiences`,
        content: [
            {
                content: '/assets/images/content/novabods/content01.png',
                contentType: ContentType.image,
                columns: 2
            }, 
            {
                content: '/assets/images/content/novabods/content02.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/novabods/content03.png',
                contentType: ContentType.image,
                columns: 2
            },
            {
                content: '/assets/images/content/novabods/content04.png',
                contentType: ContentType.image,
                columns: 2
            }
        ],
    }
};

const vaccinatorQuest: ContentCollection = {
    title: 'Vaccinator Quest',
    thumbnail: '/assets/images/content/vaccinator_quest/thumb.png',
    content: {
        title: 'Vaccintor Quest',
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
                columns: 2,
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

const qmsKnowYourCuts: ContentCollection = {
    title: `Know Your Cuts`,
    thumbnail: '/assets/images/content/know_your_cuts/content02.png',
    content: {
        title: 'Know Your Cuts Game',
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-five/game',
        description: 
        `Made for Quality Meat Scotland's "Farming Foodsteps" educational resources for primary schools.
        Drag and drop game to learn the names of different cuts of meat.`,
        content: [{
            content: '',
            contentType: ContentType.spacer,
            columns: 1
        },{
            content: '/assets/videos/content/know_your_cuts/video01.mp4',
            contentType: ContentType.video,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content01.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content02.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content03.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content04.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content05.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/know_your_cuts/content06.png',
            contentType: ContentType.image,
            columns: 2
        }],
    },
}

const qmsFindTheFacts: ContentCollection = {
    title: `Find the Facts`,
    thumbnail: '/assets/images/content/find_the_facts/thumb01.png',
    content: {
        title: 'Find the Facts Game',
        externalUrl: 'https://farmingfoodsteps.co.uk/',
        contentUrl: 'https://farmingfoodsteps.co.uk/lesson-one/game',
        description: 
        `Made for Quality Meat Scotland's "Find the Facts" educational resources for primary schools.
        Spin the Wheel to answer true or false questions about Scottish meat production.`,
        content: [
        //     {
        //     content: '',
        //     contentType: ContentType.spacer,
        //     columns: 1
        // },{
        //     content: '/assets/videos/content/know_your_cuts/video01.mp4',
        //     contentType: ContentType.video,
        //     columns: 2
        // },
        {
            content: '/assets/images/content/find_the_facts/content01.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/find_the_facts/content02.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/find_the_facts/content03.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/find_the_facts/content04.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/find_the_facts/content05.png',
            contentType: ContentType.image,
            columns: 2
        },{
            content: '/assets/images/content/find_the_facts/content06.png',
            contentType: ContentType.image,
            columns: 2
        }],
    },
}

const AllContent: ContentCollection[] = [ educationCity, novabods, vaccinatorQuest, qmsKnowYourCuts, qmsFindTheFacts, educationCity, novabods, qmsKnowYourCuts, qmsFindTheFacts ];

export const getContentCollection: (id: number) => Promise<ContentCollection> = async (id) => {
    const contentCollection = AllContent[id];
    console.log(contentCollection, id);
    return new Promise((resolve, reject) => {
        if(contentCollection) {
            resolve(AllContent[id]);
        } else {
            reject(`A content collection with id: ${id} could not be found.`);
        }
    });
}

export default AllContent;