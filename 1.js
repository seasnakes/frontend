function buyDone() {
    btn.disabled="disabled"; //使button只能使用一次
    let p = document.createElement('p');
    p.innerHTML="感谢您的购买！我们会尽快发货的";
    p.setAttribute("align","center");//js设置html property时留意 html property名 和 它的value都是字符串需用“ ”括起来
    document.body.prepend(p);//
 }