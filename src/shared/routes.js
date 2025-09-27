const routeList = {
    HOME: '/',
    EPISODES: '/episodes',
    ONE_EPISODE: (id) => !!id ? `/episodes/${id}` : "/episodes/:id",
    ABOUT: '/about',
    CONTACT: '/contact',
    HOST: "/host"
}

export default routeList;