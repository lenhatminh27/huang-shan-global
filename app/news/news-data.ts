import {news} from "@/app/_components/home-data";

export const newsHero = {
    eyebrow: "HUANGSHAN GLOBAL",
    title: "Tin tức và sự kiện",
    image: "/news-banner.png",
};

export const newsPageItems = Array.from({length: 9}, (_, index) => {
    const source = news[index % news.length];

    return {
        ...source,
        title: source.title,
        id: `${index + 1}-${source.title}`,
    };
});

