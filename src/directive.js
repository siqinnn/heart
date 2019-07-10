
export default {
    // 自定义指令

    focusd: (el, binding, vnode) => {
        el.value = binding.value.self;
        el.focus();
        el.addEventListener("input", function (e) {
            console.log(el);
            console.log(binding);
            console.log(vnode);
        })
    },
    drag: (el, binding) => {
        el.value = binding.value.self;
        el.drag();
        el.addEventListener("onmousedown", function (e) {
            console.log(el);
            console.log(binding);
          
        })
    }


}