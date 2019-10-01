const Home = {
    template: '<h2>首页</h2>'
}

const Event = {
    template: '<h2>活动</h2>'
}

const dataSource = {

}

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/events',
    component: Event
}]

const router = new VueRouter({
    routes: routes
})

const vm = new Vue({
    el: '#app',
    router: router,
    data: dataSource
});