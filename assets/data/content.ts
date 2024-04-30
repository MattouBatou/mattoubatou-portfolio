export enum ContentType {
    spacer, // adding empty columns
    image,
    iframe,
    video,
    description,
    text
};

export enum WorkType {
    freelance = 'Freelance',
    fullTime = 'Full-time',
    MattouBatou = 'MattouBatou'
};

export enum Skills {
    // programming
    cLang = 'C',
    playdate = 'Playdate SDK',
    js = 'JS',
    ts = 'TypeScript',
    html = 'HTML5',
    css = 'CSS',
    react = 'React',
    angular = 'Angular',
    jquery = 'jQuery',
    pixi = 'PixiJS',
    phaser = 'Phaser',
    easel = 'EaselJS',
    construct = 'Construct 3',
    cMake = 'CMake',
    shell = 'Shell Scripts',
    webpack = 'Webpack',
    mocha = 'Mocha',
    chai = 'Chai',
    canvas = 'Canvas',
    // planning
    jira = 'Jira',
    confluence = 'Confluence',
    trello = 'Trello',
    hacknplan = "Hack 'N Plan",
    // graphics
    svg = 'SVG',
    tiled = 'Tiled',
    texturePacker = 'Texture Packer',
    aseprite = 'Aseprite',
    photoshop = 'Photoshop',
    illustrator = 'Illustrator',
    animate = 'Animate/Flash',
    inkScape = 'inkScape'
};

export enum SkillTypes {
    programming = 'programming',
    planning = 'planning',
    graphics = 'graphics',
};

export type SkillObject = {
    skill: Skills,
    skillType: SkillTypes
};

export type ContentSchema = {
    content?: string,
    contentType: ContentType,
    columns?: number,
    rows?: number,
    square?: boolean,
    portrait?: boolean
};

export type ContentBundle = ContentSchema[];

export type PrettyURL = {
    url: string,
    name?: string
};

// ContentItem
// A piece of 'content' describing a single project.
// @externalUrl: a link to the client's website to provide context on who the client is.
// @contentUrl: a link to the original content or an article about that content from the client the game was made for.
// @content: content will be asset urls. These could be images, gifs, videos, or links to external content intended to be loaded in an iFrame or <object>.
export interface ContentItem {
    externalUrl: PrettyURL,
    contentUrl?: PrettyURL,
    // tags: string[] - e.g. `js, svg, dom api, eLearning, game, drag n drop`
    description: string,
    content: ContentBundle
};

export interface ContentStats {
    dateRange: {start: Date, end: Date | null},
    workType: WorkType,
    skills?: SkillObject[]
};

// ContentCollection
// A collection of content under one category, usually a company I did work for.
export interface ContentCollectionDetails {
    title: string,
    thumbnail: string, // path to a thumbnail image asset.
    stats: ContentStats,
};
export interface ContentCollection extends ContentCollectionDetails {
    content: ContentItem
};

import educationCity from "./edCityContent";
import novabods from "./novabodsContent";
import bubble_n_squeak from "./bubbleNsqueak";
import vaccinatorQuest from "./vaccintorQuestContent";
import qmsKnowYourCuts from "./knowYourCutsContent";
import qmsFindTheFacts from "./findTheFactsContent";
import moneyRain from "./moneyRain";
import oldMout from "./oldMout";
import saleDiMare from "./saleDiMare";
import cybersphere from "./cybersphere";

const AllContent: ContentCollection[] = [ cybersphere, saleDiMare, oldMout, vaccinatorQuest, bubble_n_squeak, novabods, moneyRain, educationCity, qmsKnowYourCuts, qmsFindTheFacts ];

export const getContentCollection: (id: number) => Promise<ContentCollection> = async (id) => {
    const contentCollection = AllContent[id];
    return new Promise((resolve, reject) => {
        if(contentCollection) {
            resolve(AllContent[id]);
        } else {
            reject(`A content collection with id: ${id} could not be found.`);
        }
    });
}

AllContent.sort((a,b) => {
    const aEnd = a.stats.dateRange.end;
    const bEnd = b.stats.dateRange.end;

    if(aEnd && bEnd) {
        return aEnd > bEnd ? -1 : 1;
    } else if(aEnd == null && bEnd !== null) {
        return -1;
    } else if(aEnd !== null && bEnd === null) {
        return 1;
    }

    return 0;
});

export default AllContent;