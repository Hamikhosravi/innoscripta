export interface Article {
    id: string | number;
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

export interface NewsApiOrg {
    source:      SourceNewsApiOrg;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
    id:          string | number;
    image:       string;
    date:        Date;
    authors:     AuthorNewsApiOrg[];
}

export interface AuthorNewsApiOrg {
    name: string;
}

export interface SourceNewsApiOrg {
    id:   null;
    name: string;
}

// -------------------------------------------------------

export interface GuardianApi {
    id:                 string | number;
    type:               string;
    sectionId:          string;
    sectionName:        string;
    webPublicationDate: Date;
    webTitle:           string;
    webUrl:             string;
    apiUrl:             string;
    elements:           Element[];
    isHosted:           boolean;
    pillarId:           string;
    pillarName:         string;
    title:              string;
    image:              string;
    date:               Date;
    authors:            AuthorGuardianApi[];
}

export interface AuthorGuardianApi {
    name: string;
}

export interface Element {
    id:       string;
    relation: string;
    type:     string;
    assets:   Asset[];
}

export interface Asset {
    type:      string;
    mimeType?: string;
    file:      string;
    typeData:  TypeData;
}

export interface TypeData {
    altText:       string;
    caption?:      string;
    credit:        string;
    photographer:  string;
    source:        string;
    width:         string;
    height:        string;
    secureFile:    string;
    displayCredit: string;
    mediaId:       string;
    imageType:     string;
}
