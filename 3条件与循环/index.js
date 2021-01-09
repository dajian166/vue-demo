var dataSource = {
    message: 'hello',
    loggedIn: false,
    items: [{
            text: 'nice'
        },
        {
            text: 'great'
        },
        {
            text: 'awesome'
        }
    ]
}
var vm = new Vue({
    el: '#app',
    data: dataSource,
})

// 在指定位置插入
vm.items.splice(1, 0, {
    text: 'amazing'
})

// 替换指定的元素
vm.items.splice(2, 1, {
    text: '替换指定的元素'
})