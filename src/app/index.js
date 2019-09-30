Vue.component('comment', {
    props: ['comment', 'index'],
    template: '<li>{{index}}-{{comment.content}}</li>'
});

var app = new Vue({
    el: '#app',
    methods: {
        handleLogmessage() {
            console.log(this.message);
        }
    },
    data: {
        message: 'hello',
        title: 'world',
        condition: true,
        comments: [{
                content: 'item1'
            },
            {
                content: 'item2'
            },
            {
                content: 'item3'
            },
            {
                content: 'item4'
            },
        ]
    }
});