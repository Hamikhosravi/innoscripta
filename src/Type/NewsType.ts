export type Article = {
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
