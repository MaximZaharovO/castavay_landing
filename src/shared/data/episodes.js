import preview1Img from '../../images/previews/preview1.png'
import preview2Img from '../../images/previews/preview2.png'
import preview3Img from '../../images/previews/preview3.png'

import SORT from "shared/enums/sortTypes"

const EPISODES = [
    {
        title: 'The best microphone under $200',
        description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
        types: ['Gear'],
        episode: 1,
        imageUrl: preview1Img
    },
    {
        title: 'Mic tricks to take you to the next level',
        description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
        types: ['Tips & Tricks'],
        episode: 2,
        imageUrl: preview2Img
    },
    {
        title: 'Should you get outboard audio gear?',
        description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
        types: ['Gear'],
        episode: 3,
        imageUrl: preview3Img
    },
    // Ниже сгенерированные данные эпизодов
    {
        title: 'How to nail your podcast intro',
        description: 'Hook listeners in the first 30 seconds. We cover scripts, pacing, and music choices that set the tone.',
        types: ['Production'],
        episode: 4,
        imageUrl: preview1Img
    },
    {
        title: 'Editing workflows that save hours',
        description: 'From templates to keyboard shortcuts—optimize your DAW workflow and cut your edit time in half.',
        types: ['Workflow'],
        episode: 5,
        imageUrl: preview2Img
    },
    {
        title: 'Remote recording: tools and pitfalls',
        description: 'Zencastr, Riverside, Zoom—what to use and how to avoid drift, dropouts, and echo on remote interviews.',
        types: ['Production'],
        episode: 6,
        imageUrl: preview3Img
    },
    {
        title: 'Growing your audience without ads',
        description: 'Organic growth tactics that actually work: SEO for show notes, cross-promo, newsletters, and smart social.',
        types: ['Marketing'],
        episode: 7,
        imageUrl: preview1Img
    },
    {
        title: 'Monetization 101: sponsors, memberships, merch',
        description: 'When to start, how to price, and the assets you need to pitch sponsors—or go direct to your listeners.',
        types: ['Business'],
        episode: 8,
        imageUrl: preview2Img
    },
    {
        title: 'Interview skills that get better stories',
        description: 'Prep, questioning, and active listening techniques that move conversations beyond surface-level answers.',
        types: ['Interviewing'],
        episode: 9,
        imageUrl: preview3Img
    },
    {
        title: 'Sound design that elevates narrative shows',
        description: 'SFX, scoring, stems, and tasteful transitions—how to build scenes and emotion without muddying the mix.',
        types: ['Production'],
        episode: 10,
        imageUrl: preview1Img
    },
    {
        title: 'Analytics that drive smart decisions',
        description: 'Read Apple/Spotify dashboards, IAB downloads, retention cohorts, and A/B test titles and thumbnails.',
        types: ['Analytics'],
        episode: 11,
        imageUrl: preview2Img
    },
    {
        title: 'Branding your show: voice, artwork, identity',
        description: 'Naming, cover art specs, sonic logo, and a simple style guide so your podcast looks and sounds consistent.',
        types: ['Branding'],
        episode: 12,
        imageUrl: preview3Img
    },
    {
        title: 'Navigating copyright and licensing issues',
        description: 'Understanding fair use, music licensing, and how to legally incorporate third-party content into your podcast.',
        types: ['Legal'],
        episode: 13,
        imageUrl: preview1Img
    },
    {
        title: 'Building a community around your show',
        description: 'Engagement strategies, listener feedback, live events, and creating a loyal audience that advocates for your podcast.',
        types: ['Community'],
        episode: 14,
        imageUrl: preview2Img
    }
]

function sliceEpisodes(episodes, skip, take) {
    if (!skip)
        skip = 0
    if (!take)
        take = EPISODES.length - skip

    return episodes.slice(skip, take)
}

function sortEpisodes(episodes, sort) {
    if (sort === SORT.ASC) {
        episodes = episodes.sort((current, next) => current.episode - next.episode)
    } else if (sort === SORT.DESC) {
        episodes = episodes.sort((current, next) => next.episode - current.episode)
    }

    return episodes;
}

export function getSortedEpisodesList(skip = 0, take = 0, sort = SORT.UNKNOWN) {
    let episodes = [...EPISODES]
    episodes = sortEpisodes(episodes, sort)
    return sliceEpisodes(episodes, skip, take)
}

export function getEpisodesList(skip = 0, take = 0) {
    return sliceEpisodes([...EPISODES], skip, take)
}

export function getEpisode(episode) {
    episode = Number(episode)
    return EPISODES.find(x => x.episode === episode)
}