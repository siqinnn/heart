// //  https://baijiahao.baidu.com/s?id=1603883371090691442&wfr=spider&for=pc
// export default {
//     // 自定义指令
//     testDirective: {
//         update: (el, data, contex) => {
//             console.log(el)
//             console.log(data)
//             console.log(contex)
//         }
//     }

// }




import Vue from 'vue';
Vue.directive('focus',{
 //当绑定元素插入到DOM中
 inserted: function(el){
  el.focus(); //元素聚焦
  //el.setAttribute('placeholder','自定义内容');
 }
})
// Vue.directive('***',{
//  inserted: function(el){
//   //....
//  }
// })
export {Vue}

