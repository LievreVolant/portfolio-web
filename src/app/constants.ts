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
    c: 'https://fr.wikipedia.org/wiki/C_(langage)',
    cpp: 'https://fr.wikipedia.org/wiki/C%2B%2B',
    csharp: 'https://dotnet.microsoft.com/fr-fr/languages/csharp/',
    dart: 'https://dart.dev/',
    graphql: 'https://graphql.org/',
    html: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language',
    java: 'https://www.java.com/fr/',
    javascript: 'https://fr.wikipedia.org/wiki/JavaScript',
    flutter: 'https://flutter.dev/',
    miashs: 'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs-IDIVLQ8C/parcours-informatique-et-cognition-IJLABXO5.html',
    lua: 'https://www.lua.org/',
    ocaml: 'https://ocaml.org/',
    php: 'https://www.php.net/',
    python: 'https://www.python.org/',
    r: 'https://www.r-project.org/',
    sql: 'https://fr.wikipedia.org/wiki/Structured_Query_Language',
    symfony: 'https://symfony.com/',
    typescript: 'https://www.typescriptlang.org/',
    uml: 'https://fr.wikipedia.org/wiki/UML_(informatique)',
    xaml: 'https://learn.microsoft.com/fr-fr/dotnet/desktop/wpf/xaml/',
};

const iconsPath: string = 'assets/images/icons/languages/';
export const ICON_SRC = {
    angular: iconsPath + 'angular.png',
    c: iconsPath + 'c.png',
    cpp: iconsPath + 'cpp.png',
    csharp: iconsPath + 'csharp.png',
    dart: iconsPath + 'dart.png',
    flutter: iconsPath + 'flutter.png',
    graphql: iconsPath + 'graphql.png',
    html: iconsPath + 'html.png',
    java: iconsPath + 'java.png',
    javascript: iconsPath + 'javascript.png',
    lua: iconsPath + 'lua.png',
    ocaml: iconsPath + 'ocaml.png',
    placeholder: 'assets/images/upia/upia_monster.png',
    php: iconsPath + 'php.png',
    python: iconsPath + 'python.png',
    r: iconsPath + 'r.png',
    sql: iconsPath + 'sql.png',
    symfony: iconsPath + 'symfony.png',
    typescript: iconsPath + 'typescript.png',
    uml: iconsPath + 'uml.png',
    xaml: iconsPath + 'xaml.png',
};

const projectsPath: string = 'assets/images/projects/';
export const IMG_SRC = {
    bigBlueStar: 'assets/images/icons/tabs/star-blue-big.png',
    bigYellowStar: 'assets/images/icons/tabs/star-yellow-big.png',
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
    'C': { name: 'C', link: LINKS.c, icon: ICON_SRC.c },
    'C++': { name: 'C++', link: LINKS.cpp, icon: ICON_SRC.cpp },
    'C#': { name: 'C#', link: LINKS.csharp, icon: ICON_SRC.csharp },
    'Dart': { name: 'Dart', link: LINKS.dart, icon: ICON_SRC.dart },
    'Flutter': { name: 'Flutter', link: LINKS.flutter, icon: ICON_SRC.flutter },
    'GraphQl': { name: 'GraphQl', link: LINKS.graphql, icon: ICON_SRC.graphql },
    'HTML / CSS': { name: 'HTML / CSS', link: LINKS.html, icon: ICON_SRC.html },
    'Java': { name: 'Java', link: LINKS.java, icon: ICON_SRC.java },
    'JavaScript': { name: 'JavaScript', link: LINKS.javascript, icon: ICON_SRC.javascript },
    'Lua': { name: 'Lua', link: LINKS.lua, icon: ICON_SRC.lua },
    'OCaml': { name: 'OCaml', link: LINKS.ocaml, icon: ICON_SRC.ocaml },
    'PHP': { name: 'PHP', link: LINKS.php, icon: ICON_SRC.php },
    'Python': { name: 'Python', link: LINKS.python, icon: ICON_SRC.python },
    'R': { name: 'R', link: LINKS.r, icon: ICON_SRC.r },
    'SQL': { name: 'SQL', link: LINKS.sql, icon: ICON_SRC.sql },
    'Symfony': { name: 'Symfony', link: LINKS.symfony, icon: ICON_SRC.symfony },
    'TypeScript': { name: 'TypeScript', link: LINKS.typescript, icon: ICON_SRC.typescript },
    'UML': { name: 'UML', link: LINKS.uml, icon: ICON_SRC.uml },
    'XAML': { name: 'XAML', link: LINKS.xaml, icon: ICON_SRC.xaml },
};
