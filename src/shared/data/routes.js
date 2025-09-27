const routeList = {
    HOME: '/',
    EPISODES: '/episodes',
    ONE_EPISODE: (episode) => !!episode ? `/episodes/${episode}` : "/episodes/:episode",
    ABOUT: '/about',
    CONTACT: '/contact',
    HOST: "/host"
}

export default routeList;