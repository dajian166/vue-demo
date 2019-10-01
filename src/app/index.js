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

var segment = {
    template: `<div class="ui stacked segment">
                    <slot>:)</slot>
            </div>`
}

var card = {
    template: `<div class="ui card">
    <div class="image">
        <slot name="image">image</slot>
    </div>
    <div class="content">
        <div class="header">
            <slot name="header">header</slot>
        </div>
        <div class="meta">
            <slot name="meta">meta</slot>
        </div>
    </div>
</div>`
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
        'increment-button': incrementButton,
        'segment': segment,
        'card': card
    },
    methods: {
        handleIncrement() {
            this.total++;
        }
    },
});