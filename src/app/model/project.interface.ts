interface ProjectData {
    id: string;
    title: string;
    isFavorite: boolean;
    description: string;
    goals: string;
    first_paragraph: ParagraphData;
    second_paragraph: ParagraphData;
    third_paragraph: ParagraphData;
    languages: string[];
    images: DocumentData[];
    documents: DocumentData[];
    links: LinkData[];
}

interface ParagraphData {
    title: string;
    text: string;
}

interface DocumentData {
    title: string;
    source: string;
}

interface LinkData {
    title: string;
    link: string;
}
