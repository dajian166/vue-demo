/*本地范围注册组件*/
var uiButton = {
    template: `<button class="ui button">本地注册组件</button>`
}

/*全局定义组件*/
Vue.component('ui-button-global', {
    template: `<button class="ui button">{{text}}</button>`,
    props: ['text']
});

var dataSource = {
    published: false
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    components: {
        'ui-button': uiButton
    }
});