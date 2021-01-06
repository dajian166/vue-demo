var dataSource = {
    message: 'hello',
    title: 'hello',
    isShow: true,
    comments: [{
            content: 'nice~'
        },
        {
            content: 'great~'
        }, {
            content: 'awesome~'
        }
    ]
}

Vue.component('comment', {
    props: ['comment'],
    template: `
    <li>{{comment.content}}</li>`
})
var vm = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        logMessage() {
            console.log(this.message)
        }
    }
});