//alert("加载成功！");
require.config({
    paths: {
        "text": "lib/text",
    }
})
require(['text!city_list.html'], function(city) {
    //console.log(city);
    let element = document.querySelector('.header')
    console.log(element);
    element.insertAdjacentHTML('beforeEnd', city)
})
