var dataSource = {
    message: 'hello',
    loggedIn: false,
    imgSrc: "../../assets/images/elephant.jpg",
    imgWidth: '40%',
    buttonClass: 'ui button',
    colorClass: 'violet',
    isLoading: true,
    htmlText:'<h3>hello</h3>'
}
var vm = new Vue({
    el: '#app',
    data: dataSource,
})


vm.$watch('message', function (newValue, oldValue) {
    console.log(newValue, oldValue);
})
// 设置值
vm.message = 'wujian'