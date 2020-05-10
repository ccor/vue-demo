(function() {
    var router = new VueRouter({
        routes: [
            { path: '/home', component: { template: '<div class="container"><h1>welcome!</h1></div>' } },
            { path: '/hello', component: Vue.component('hello') },
            { path: '/weather', component: Vue.component('weather') }
        ]
    })
    new Vue({
        router,
        el: '#app',
        render: h => h(Vue.component('app'))
    });
})()