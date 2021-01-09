var dataSource = {
    counter: 0,
    message: 'hello',
    checked: false,
    selectedItems: [],
    selectedItem: 'item2',
    options: [{
            value: 'item1'
        },
        {
            value: 'item2'
        },
        {
            value: 'item3'
        }
    ]
}
var vm = new Vue({
    el: '#app',
    data: dataSource,
    methods: {
        like(event) {
            console.log(event);
            this.counter++
        },
        process(event) {
            console.log(event.target.value);
        }
    }
})