export const BOOK_COVER_WIDTH = 655;
export const BOOK_COVER_HEIGHT = 800;
export const BOOK_PAGE_WIDTH = BOOK_COVER_WIDTH - 50;
export const BOOK_PAGE_HEIGHT = BOOK_COVER_HEIGHT - 60;

export const COLOR_1 = '#2e2540';
export const COLOR_2 = '#813bbc';
export const COLOR_3 = '#329fcd';
export const COLOR_4 = '#69D1FE';
export const COLOR_5 = '#CCF0FF';
export const COLOR_6 = '#FF72D0';
export const COLOR_7 = '#881176';
export const WHITE = '#FFFDFA';
export const GREY = '#D9D9D9';
export const DARK_GREY = '#8a8a8a';
export const BLACK = '#464646';

export const LINKS = {
    angular: 'https://angular.dev/',
    but: 'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/but-bachelor-universitaire-de-technologie-BUT/but-informatique-grenoble-KI4UEV4Y.html',
    cba: 'https://www.cbainfo.fr/',
    corys: 'https://www.corys.com/en/',
    csharp: 'https://dotnet.microsoft.com/fr-fr/languages/csharp/',
    graphql: 'https://graphql.org/',
    html: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language',
    java: 'https://www.java.com/fr/',
    javascript: 'https://fr.wikipedia.org/wiki/JavaScript',
    flutter: 'https://flutter.dev/',
    miashs: 'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs-IDIVLQ8C/parcours-informatique-et-cognition-IJLABXO5.html',
    python: 'https://www.python.org/',
    symfony: 'https://symfony.com/',
};

const iconsPath: string = 'assets/images/icons/languages/';
export const ICON_SRC = {
    angular: iconsPath + 'angular.png',
    csharp: iconsPath + 'csharp.png',
    flutter: iconsPath + 'flutter.png',
    graphql: iconsPath + 'graphql.png',
    html: iconsPath + 'html.png',
    java: iconsPath + 'java.png',
    javascript: iconsPath + 'javascript.png',
    placeholder: 'assets/images/upia/upia_monster.png',
    python: iconsPath + 'python.png',
    symfony: iconsPath + 'symfony.png',
};

const projectsPath: string = 'assets/images/projects/';
export const IMG_SRC = {
    coloredStar: 'assets/images/icons/tabs/star-colored.png',
    minesweeper: projectsPath + 'minesweeper-game.png',
    placeholder: 'assets/images/upia/upia_monster.png',
    portfolio: projectsPath + 'portfolio.png',
    shadowWitch: projectsPath + 'shadow-witch.png',
    shadowWitchCrop: projectsPath + 'shadow-witch-crop.png',
    darkFeather: 'assets/images/icons/tabs/feather-dark.png',
    darkStar: 'assets/images/icons/tabs/star-dark.png',
};

const catPath: string = 'assets/images/upia/';
export const UPIA_SRC = {
    bag: catPath + 'upia_bag.png',
    bed: catPath + 'upia_bed.png',
    close: catPath + 'upia_close.png',
    coding: catPath + 'upia_code.png',
    monster: catPath + 'upia_monster.png',
    sleeping: catPath + 'upia_sleep.png',
    stairs: catPath + 'upia_stairs.png',
    washingMachine: catPath + 'upia_washing.png',
};

export const LANGUAGE_DATA: Record<string, { name: string; link: string; icon: string }> = {
    'Angular': { name: 'Angular', link: LINKS.angular, icon: ICON_SRC.angular },
    'C#': { name: 'C#', link: LINKS.csharp, icon: ICON_SRC.csharp },
    'Dart': { name: 'Dart', link: LINKS.flutter, icon: ICON_SRC.flutter },
    'Flutter': { name: 'Flutter', link: LINKS.flutter, icon: ICON_SRC.flutter },
    'GraphQl': { name: 'GraphQl', link: LINKS.graphql, icon: ICON_SRC.graphql },
    'HTML / CSS': { name: 'HTML / CSS', link: LINKS.html, icon: ICON_SRC.html },
    'Java': { name: 'Java', link: LINKS.java, icon: ICON_SRC.java },
    'JavaScript': { name: 'JavaScript', link: LINKS.javascript, icon: ICON_SRC.javascript },
    'PHP': { name: 'PHP', link: '', icon: ICON_SRC.placeholder },
    'Python': { name: 'Python', link: LINKS.python, icon: ICON_SRC.python },
    'SQL': { name: 'SQL', link: '', icon: ICON_SRC.placeholder },
    'Symfony': { name: 'Symfony', link: LINKS.symfony, icon: ICON_SRC.symfony },
    'TypeScript': { name: 'TypeScript', link: LINKS.angular, icon: ICON_SRC.placeholder },
    'UML': { name: 'UML', link: '', icon: ICON_SRC.placeholder },
    'XAML': { name: 'XAML', link: LINKS.csharp, icon: ICON_SRC.csharp },
};
