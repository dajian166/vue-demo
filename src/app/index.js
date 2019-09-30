var dataSource = {
    message: 'hello'
}

var vm = new Vue({
    el: '#app',
    data: dataSource
});

vm.$watch('message', function (newValue, oldValue) {
    console.log('watch message', newValue, oldValue);
});