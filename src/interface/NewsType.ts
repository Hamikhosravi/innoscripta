export interface Article {
    id: string | number;
    apiSource: string;
    uri: string;
    lang: string;
    isDuplicate: boolean;
    date: Date;
    time: string;
    dateTime: Date;
    dateTimePub: Date;
    dataType: string;
    sim: number;
    url: string;
    title: string;
    body: string;
    source: Source;
    authors: Author[];
    image: string;
    eventUri: string;
    sentiment: number;
    wgt: number;
    relevance: number;
}

interface Author {
    uri: string;
    name: string;
    type: string;
    isAgency: boolean;
}

interface Source {
    uri: string;
    dataType: string;
    title: string;
}


// ------------------------------------------

export interface NewYorkTimes {
    abstract:         string;
    web_url:          string;
    snippet:          string;
    lead_paragraph:   string;
    print_section?:   string;
    print_page?:      string;
    source:           SourceNYT;
    multimedia:       Multimedia[];
    headline:         Headline;
    keywords:         Keyword[];
    pub_date:         string;
    document_type:    DocumentType;
    news_desk:        string;
    section_name:     string;
    subsection_name?: string;
    byline:           Byline;
    type_of_material: TypeOfMaterial;
    _id:              string;
    word_count:       number;
    uri:              string;
}

export interface Byline {
    original:     string;
    person:       Person[];
    organization: null;
}

export interface Person {
    firstname:    string;
    middlename:   null | string;
    lastname:     string;
    qualifier:    null;
    title:        null;
    role:         Role;
    organization: string;
    rank:         number;
}

export enum Role {
    Reported = "reported",
}

export enum DocumentType {
    Article = "article",
}

export interface Headline {
    main:           string;
    kicker:         null | string;
    content_kicker: null;
    print_headline: null | string;
    name:           null;
    seo:            null;
    sub:            null;
}

export interface Keyword {
    name:  Name;
    value: string;
    rank:  number;
    major: Major;
}

export enum Major {
    N = "N",
}

export enum Name {
    CreativeWorks = "creative_works",
    Glocations = "glocations",
    Organizations = "organizations",
    Persons = "persons",
    Subject = "subject",
}

export interface Multimedia {
    rank:      number;
    subtype:   string;
    caption:   null;
    credit:    null;
    type:      Type;
    url:       string;
    height:    number;
    width:     number;
    legacy:    Legacy;
    subType:   string;
    crop_name: string;
}

export interface Legacy {
    xlarge?:          string;
    xlargewidth?:     number;
    xlargeheight?:    number;
    thumbnail?:       string;
    thumbnailwidth?:  number;
    thumbnailheight?: number;
    widewidth?:       number;
    wideheight?:      number;
    wide?:            string;
}

export enum Type {
    Image = "image",
}

export enum SourceNYT {
    TheNewYorkTimes = "The New York Times",
}

export enum TypeOfMaterial {
    News = "News",
    Review = "Review",
}


// -------------------------------------------------------

export interface GuardianApi {
    id: string | number;
    apiSource: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: Date;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    elements: Element[];
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    title: string;
    image: string;
    date: Date;
    authors: AuthorGuardianApi[];
}

export interface AuthorGuardianApi {
    name: string;
}

export interface Element {
    id: string;
    relation: string;
    type: string;
    assets: Asset[];
}

export interface Asset {
    type: string;
    mimeType?: string;
    file: string;
    typeData: TypeData;
}

export interface TypeData {
    altText: string;
    caption?: string;
    credit: string;
    photographer: string;
    source: string;
    width: string;
    height: string;
    secureFile: string;
    displayCredit: string;
    mediaId: string;
    imageType: string;
}

// ------------------------------------------

export interface NewsApiOrg {
    id: string | number;
    apiSource: string;
    source: SourceNewsApiOrg;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
    image: string;
    date: Date;
    authors: AuthorNewsApiOrg[];
}

export interface AuthorNewsApiOrg {
    name: string;
}

export interface SourceNewsApiOrg {
    id: null;
    name: string;
}
