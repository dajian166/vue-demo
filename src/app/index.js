/*本地范围注册组件*/
var uiButton = {
    template: `<button class="ui button">{{text}}</button>`,
    props: {
        text: {
            type: String,
            default: '本地注册组件'
        }
    }
}

var uiButton1 = {
    template: `<button class="ui button">{{text}}</button>`,
    props: {
        text: {
            type: String,
            required: true,
            validator(value) {
                return value.length > 3;
            }
        }
    }
}

var incrementButton = {
    template: `<button class="ui button" @click="increment">{{counter}}</button>`,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter += 1;
            this.$emit('increment');
        }
    },
}

/*全局定义组件*/
Vue.component('ui-button-global', {
    template: `<button class="ui button">{{text}}</button>`,
    props: ['text']
});

var dataSource = {
    published: false,
    total: 0
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    components: {
        'ui-button': uiButton,
        'ui-button1': uiButton1,
        'increment-button': incrementButton
    },
    methods: {
        handleIncrement() {
            this.total++;
        }
    },
});