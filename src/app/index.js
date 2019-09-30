var dataSource = {
    message: 'hello',
    message1: '<h3>hello</h3>',
    loggedIn: false,
    imgSrc: "../../assets/images/elephant.jpg",
    imgWidth: '80%',
    buttonClass: 'ui button',
    colorClass: 'violet',
    isLoading: false,
    items: [{
        text: 'HTML5'
    }, {
        text: 'CSS3'
    }, {
        text: 'JavaScript'
    }]
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    beforeDestroy() {
        console.log('要销毁了...');
    },
    destroyed() {
        console.log('bye bye ~');
    }
});

vm.$watch('message', function (newValue, oldValue) {
    console.log('watch message', newValue, oldValue);
});