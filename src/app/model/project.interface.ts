export interface ProjectData {
    id: number;
    title: string;
    isFavorite: boolean;
    timeline: string;
    description: string;
    goals: string;
    first_paragraph: ParagraphData;
    second_paragraph: ParagraphData;
    third_paragraph: ParagraphData;
    languages: string[];
    documents: DocumentData[];
    links: LinkData[];
}

interface ParagraphData {
    title: string;
    text: string;
    images: DocumentData[];
}

interface DocumentData {
    title: string;
    source: string;
}

interface LinkData {
    title: string;
    link: string;
}

export interface LanguageData {
    name: string;
    link: string;
    icon: string;
}
