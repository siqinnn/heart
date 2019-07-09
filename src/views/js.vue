<template>
  <div class="home">
    <div class="new">
      <div>
        <p class="heiha">1.一个url都由哪几部分组成？</p>例如：
        <a>https://www.baidu.com</a>

        <br />第一部分是协议(或称为服务方式);
        <br />第二部分是存有该资源的主机IP地址(有时也包括端口号);
        <br />第三部分是主机资源的具体地址，如目录和文件名等。
        <br />第一部分和第二部分之间用“：//”符号隔开，第二部分和第三部分用“/”符号隔开。第一部分和第二部分是不可缺少的，第三部分有时可以省略。
      </div>
      <div>
        <p class="heiha">2.H5 web 存储有哪些，怎么用？</p>(1)cookies:
        <br />h5之前，存储主要是用cookies。cookies缺点有在请求头上带着数据，大小是4k之内。主Domain污染。
        主要应用：购物车、客户登录
        对于IE浏览器有UserData，大小是64k,只有IE浏览器支持。
        <br />(2)localstorage:
        <br />存储方式：
        <br />以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。
        大小为
        每个域名5M
        <br />(3)sessionstorage:
        <br />HTML5 的本地存储 API 中的 localStorage 与 sessionStorage
        在使用方法上是相同的，区别在于 sessionStorage 在关闭页面
        后即被清空，而 localStorage 则会一直保存。
        <br />用法：
        <br />保存数据：localStorage.setItem(key,value);
        <br />读取数据：localStorage.getItem(key);
        <br />删除单个数据：localStorage.removeItem(key);
        <br />删除所有数据：localStorage.clear();
        <br />得到某个索引的key：localStorage.key(index);
      </div>
      <div>
        <p class="heiha">3.http请求方式有哪些，使用场景是什么？ 常用的HTTP 状态码有哪些，意义是什么？</p>GET:
        <br />GET请求是向服务端请求获取某个或某些资源（resource），查询数据库单个或list数据，服务端成功的话，一般状态码返回200。
        <br />POST:
        <br />POST请求是用来向服务端请求新增资源（resource），处理成功的话，服务端一般返回状态码201。
        <br />PUT:
        <br />PUT请求一般是用来向服务端请求修改某个已存在的资源（resource）,服务端一般返回状态码200，204等。
        <br />DELETE:
        <br />DELETE请求一般是用来向服务端请求删除某个已存在的资源（resource），服务端一般返回200，202等。
        <br />PATCH:
        <br />PATCH请求一般是对某个资源做局部修改,如个别字段。
        <br />状态码：
        <br />1XX Informational（信息性状态码） 接受的请求正在处理
        <br />2XX Success（成功状态码） 请求正常处理完毕
        <br />3XX Redirection（重定向状态码） 需要进行附加操作以完成请求
        <br />4XX Client Error（客户端错误状态码） 服务器无法处理请求
        <br />5XX Server Error（服务器错误状态码） 服务器处理请求出错
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">4.DOM的意义？</p>DOM是文档对象模型，dom把网页中的内容与元素呈现的清晰，任何一个
        元素或者内容都有自己的节点，对开发人员来说是索引目录，通过dom。可以访问html内
        所有内容。
      </div>
      <div>
        <p class="heiha">5.怎么用DOM方法修改元素样式？</p>通过获取dom节点： 获取id
        <br />document.getElementById("yang").
        <br />style.backgroundColor = "white";
        <br />document.getElementById("yang")
        <br />.style.height = "120px";
        <p id="yang" @click="bian()">修改样式</p>
      </div>
      <div>
        <p class="heiha">6.查找元素的方法有哪些？怎么创建、添加、删除、替换元素？</p>查找元素：
        <br />getElementsByName()--通过name名查找
        <br />getElementsByTagName()--通过标签查找
        <br />getElementsByClassName()--通过类名查找
        <br />getElementById()--通过id名查找
        <br />
        <br />1、创建元素节点：createElement
        <br />用法： document.createElement("p");
        <br />创建文本节点：createTextNode;
        <br />用法： document.createTextNode("txt");
        <br />2、插入节点：appendchild:在要插入的元素节点上调用，他插入指定的节点使其成为那个节点的最后一个子节点。
        <br />insertBefore:在已有的元素前插入一个新元素；
        <br />insertAfter:在现有的元素后面插入一个新元素；
        <br />3、删除节点：removeChild;从文档树中删除一个节点
        <br />用法：var para1=document.getElementById("p1");
        <br />para1.parentNode.removeChild(para1);
        <br />4、替换节点：replaceChild;将一个节点替换为另一个节点
      </div>
    </div>

    <div class="new">
      <div>
        <p class="heiha">7.Undefined 和 Null怎么区分，理解？</p>Undefined：定义了一个变量却没有赋值；
        <br />null：表示空，此处没有值；
      </div>
      <div>
        <p class="heiha">8.定义变量的方式（关键字）有哪些？区别、意义是什么？怎么同时定义多个变量？</p>(1)var:定义的变量可以被修改，如果没有初始化会输出undefind，不报错，会产生变量提升；
        <br />(2)let：块级作用域，使用它会形成暂时性死区，对函数外面没有影响；
        <br />(3)const：常量变量，定义的变量无法修改；
        <br />同时定义多各变量：
        <br />逗号隔开变量即可，例如：var a=10，b=20，c=30
      </div>
      <div>
        <p class="heiha">9.JavaScript 语句标识符有哪些，意义、作用，写出来例子？</p>(1)break：跳出循环
        <br />(2)continue：跳出当前，进入下一个
        <br />(3)if...else：不同条件实现不同效果
        <br />(4)return:退出函数
        <br />(5)var:定义变量
        <br />(6)function:定义一个函数
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">10.js代码规范中，重点有哪些？</p>(1)写注释
        <br />(2)for循环条件内不能有dom
        <br />(3)减少全局污染
        <br />(4)用===替换==
        <br />(5)命名规范
      </div>

      <div>
        <p class="heiha">11.Js数据类型有哪些，意义、怎么创建？数据操作符、逻辑操作符有哪些？</p>(1)基本类型：string、number、boolean、undefined、null
        <br />(2)引用类型：object、function、array
        <br />(3)ES6新类型：symbol。类似于数组
        <br />
        <!-- <br>算术运算符:+ 、 – 、* 、 / 、 % 、 -(一元取反) 、 ++ 、 —
        <br>等同运算符与全同运算符:== 、 ===、 !== 、 !===
        <br>比较运算符: {、 > 、 {= 、 >=
        <br>字符串运算符::{、 > 、 {= 、 >= 、 = 、 +
        <br>逻辑运算符:  与 、 或、 非、
        <br>赋值运算符:=、 +=、 *=、 -=、 /=-->
      </div>

      <div class="shijiu">
        <p class="heiha">12.什么是变量、函数提升？怎么避免？</p>局部变量：在函数内部定义的变量，只有自己能调用
        <br />

        <button @click="jubu">局部变量</button>
        <br />全局变量：变量属于window对象，可以应用于所有脚本
        <br />
        <button @click="quanju">全局变量</button>
        <br />函数提升：创建函数的方法有，函数声明与函数字面量，只有函数声明才存在函数提升，函数提升高于变量提前
        <br />
        <button @click="hanshu">函数提升</button>
        <br />变量提升：变量可以在使用后声明，也就是变量可以先使用再声明。因为变量会自己提升
        <br />
        <button @click="bianti">变量提升</button>

        <br />避免变量提升：使用let与const，因为遇到let与const会将它们放到临时死区
        <br />
        <button @click="Alet">let</button>
        <br />
        <br />
        <button @click="Aconst">const</button>
        <br />避免函数提升：函数声明才会函数提升，所以使用其它方式创建函数即可，例如箭头函数
        <br />
        <button @click="jiantou">箭头函数</button>
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">13.三目运算执行顺序是什么？</p>执行顺序：
        <br />1.先执行初始化表达式
        <br />2.然后在执行条件表达式
        <br />3.执行循环体
        <br />4.执行控制条件表达式
        <br />5.在执行条件表达式 ...
        <br />

        <button @click="sanmu">三目运算符</button>
      </div>
      <div>
        <p class="heiha">14.访问对象属性、方法的方式有哪些？区别是什么？</p>1. 使用“ . ”来访问对象属性
        <br />语法：
        <br />objectName.propertyName
        <br />2. 使用“ [ ] ”来访问对象属性
        <br />语法：
        <br />objectName[propertyName]
        <br />3.在JavaScript中，只能使用“ . ”来访问对象的方法。
        <br />语法：
        <br />objectName.methodName()
        <br />区别：点表示法一般作为静态对象使用时来存取属性。而数组表示法在动态存取属性
      </div>
      <div class="shijiu">
        <p class="heiha">15.什么是函数？有哪些特征？定义函数有几种写法？</p>函数：函数是一种方法，执行某些功能的代码，为了减少代码量而编写，使用时直接调用即可
        <br />特征：
        <br />1，如果没有return语句，默认返回是uedefined
        <br />2，函数内部包含一个默认的arguments参数数组，它返回函数所接收的所有参数
        <br />3，如果在函数中声明一个变量没有使用var，这个变量将默认为全局变量
        <br />4，函数域始终高于全局域
        <br />5，函数也是数据
        <br />6，typeof 函数名 返回 function
        <br />7，闭包
        <br />8，函数对象的call和apply
        <br />定义函数的方法：
        <br />
        <button @click="shengming">声明函数</button>
        <button @click="gouzao">构造函数</button>
        <button @click="biaoda">函数表达式</button>
      </div>
    </div>

    <div class="new">
      <div class="shijiu">
        <p class="heiha">16.return写在函数中有什么用？</p>作用：
        <br />(1)给函数返回值
        <br />(2)结束函数
        <br />
        <button @click="fanhui">返回值</button>
        <button @click="jieshu">结束函数</button>
      </div>
      <div style class="duo">
        <p class="heiha">
          17.字符串charAt()、indexOf()、match()、replace()、search()、slice()、
          split()、substr()、toLowerCase()、toString()、trim()、toFixed()、
          getTime()、parseFloat()、parseInt()、test() 都是什么方法，使用场景一般是什么？
        </p>

        <button @click="a">(1) charAt()：返回指定位置的字符；</button>
        <button @click="a">(2) indexOf()：检测字符串值在字符串中首次出现的位置；</button>
        <button @click="a">(3) match()：字符串内检测指定的值，或找正则表达式匹配</button>
        <button @click="a">(4) replace()：在字符串中替换字符串，或替换与正则表达式匹配的子串</button>
        <button @click="a">(5) search()：检索字符串中指定的子字符串（返回字符串的起始位置），或检索与正则表达式相匹配的子字符串</button>
        <button @click="a">(6) slice()：从已有的数组中返回选定的元素</button>
        <button @click="a">(7) split()：把字符串分割成字符串数组</button>
        <button @click="a">(8) substr()：字符串中抽取start下标开始的指定数目的字符</button>
        <button @click="a">(9) toLowerCase()：将字符串转换为小写</button>
        <button @click="a">(10) toString()：将逻辑符转换成字符串</button>
        <button @click="a">(11) trim()：去除字符串的头尾空格</button>
        <button @click="a">(12) toFixed()：将number四舍五入为指定小数的数字</button>
        <button @click="a">(13) getTime()：返回距1970.1.1之间的毫秒数</button>
        <button @click="a">(14) parseFloat()：解析字符串，返回浮点数</button>
        <button @click="a">(15) parseInt()：解析字符串，返回整数</button>
        <button @click="a">(16) test()：检测字符串是否匹配某个模式</button>
      </div>
      <div>
        <p class="heiha">18.Js中逻辑运算符、条件运算符有哪些？</p>逻辑运算符：
        <br />1、JS中的||符号：
        <br />运算方法：
        <br />只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。
        只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。
        <br />总结：真前假后
        <br />2、JS中的&&符号：
        <br />运算方法：
        <br />只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
        只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;
        <br />总结：假前真后
        <br />3. 取反 ！
        <br />首先把数据转化为布尔值，然后取反，结果为true或false
        <br />
        <button @click="yu">&&</button>
        <button @click="huo">||</button>
        <button @click="fei">！</button>
        <br />条件运算符：
        <br />(1)=赋值
        <br />(2)== 判断
        <br />(3)=== 全等
        <br />(4)!= 比较,true或者false
        <br />(5)(大于/小于/大于等于/小于等于)
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">19.判断：{}=={}；[]==[]；’bb’==‘bb’；3==3；3===‘3’；5+‘5’；‘str’+6；的结果，并解释原因</p>
        <button @click="shijiu1">{}=={}</button>
        {}=={}------不相等，对象的比较不是值之间的比较，而是引用的比较，当互相引用时即可相等。
        <br />
        <button @click="shijiu2">[]==[]</button>
        []==[]------不相等，对象的比较不是值之间的比较，而是引用的比较，当互相引用时即可相等。
        <br />
        <button @click="shijiu3">’bb’==‘bb’</button>
        ’bb’==‘bb’------相等，字符串间的比较，是值为相同字符串。
        <br />
        <button @click="shijiu4">3==3</button>
        3==3------相等，比较两个数值相同的字符串，即相等
        <br />
        <button @click="shijiu5">3===‘3’</button>
        3===‘3’------不相等，虽然都是数字3，但前者是number，后者是string
        <br />
        <button @click="shijiu6">5+‘5’</button>
        5+‘5’------判断为true，因为任何非零数字都是true，任何非空字符串都是true
        <br />
        <button @click="shijiu7">‘str’+6</button>
        ‘str’+6------判断为true，因为任何非零数字都是true，任何非空字符串都是true
      </div>
      <div>
        <p class="heiha">20.var b=2;c=b++;d=++b;b、c、d的值分别为多少？解释原因；</p>
        <button @click="ershi">值为</button>
        <br />b=2
        <br />c=b++ :此时b是3，因为是b++，所以存储新值3，再输出旧值2，c为2
        <br />d=++b :上一步中b已经是3，d是4，因为++b，存储新值4并且输出旧值4
      </div>
      <div class="shijiu">
        <p class="heiha">21.if...else和switch 的区别是什么，使用场景是什么时候？</p>区别：
        <br />都是判断，条件允许就执行程序的语句，前者是有两种结果时候使用，是非。对错，，后者有多种结果时候使用，
        比如说，1，2，3，4等等，前者只要满足条件就不再继续读程，后者找到匹配结果后还会继续读程并且输出，除非break
        后退出，
        <br />
        <button @click="aifelse">if...else</button>
        <button @click="aswitch">switch</button>
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">22.Js中有几种写循环、遍历的方法，区别是什么？break和continue的区别是什么？</p>1.for循环： js中常用的循环，常用于数组的循环，
        <br />
        <button @click="afor">for</button>
        <br />2.for...in循环： 主要用于循环遍历普通对象，
        <br />
        <button @click="aforin">for..in</button>
        <br />3.while循环：底层的循环方法与for类似，只是for更简单些，
        <br />
        <button @click="awhile">while</button>
        <br />4.for...of: Es6新增的语句，用来替代 for in,forEach，可遍历 Arrays, Strings, Maps, Sets等数据结构,
        <br />
        <button @click="aforof">for..of</button>
        <br />5.for...each: 循环，对于数组较大时，优化比较明显；
        <br />
        <button @click="aforeach">for..each</button>
        <br />break： 跳出循环，不再循环；
        <br />continue： 结束当前循环，进入下次循环
        <br />
        <button @click="abreak">break</button>
        <button @click="acontinue">continue</button>
      </div>
      <div class="shijiu">
        <p class="heiha">23. 怎么判断数据类型？有哪几种方法？数据的自动转换类型规律有哪些？</p>判断数据类型：
        <br />(1)typeof :最常用方法
        <br />
        <button @click="atypeof">typeof</button>
        <br />(2)instanceof :判断已知数据类型的方法
        <br />
        <button @click="ainstanceof">instanceof</button>
        <br />(3)Object.prototype上的原生toString() :基本原生引用，json
        <br />
        <button @click="aprototype">Object.prototype</button>
      </div>
      <div>
        <p class="heiha">24.哪些值可以认为是真，哪些是假？</p>js中的假值有：
        <br />(1)false
        <br />(2)NaN
        <br />(3)null
        <br />(4)0
        <br />(5)空字符串
        <br />(6)Undefined
        <br />其余都为真
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">25.Js中的this有什么规律，用代码举例？</p>： this是执行的主体，谁执行的这个函数谁就是this；
        <br />(1)全局作用域下this指向window
        <br />

        <button @click="quanju">全局</button>
        <br />(2)函数作用域下this指向window
        <br />
        <button @click="hanshu">函数</button>
        <br />(3)在对象内this指向当前的对象
        <br />
        <button @click="duixiang">对象</button>
        <br />(4)构造函数时this指向新创建的对象
        <br />
        <button @click="gouzao">构造</button>
        <br />(5)call(),apply()可以改变this的指向
        <br />
        <button @click="acall">call apply</button>
        <br />(6)箭头函数没有this，会捕获上下文作为自己的this
        <br />
        <button @click="jiant">箭头</button>
      </div>
      <div class="shijiu">
        <p class="heiha">26.浏览器存储方式有哪些？一般的使用场景是什么，用代码举例？怎么动态存储、读取数据？</p>(1)cookies： h5前存储主要用cookie，它请求头带着数据，导致流量增加，大小限制在4k
        <br />(2)localStorage： 以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。IE8+支持，每个域名限制5M
        <br />(3)sessionStorage： 与（2）类似，区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存。很多时候数
        据只需要在用户浏览一组页面期间使用，关闭窗口后数据就可以丢弃了，这种情况使用sessionStorage就比较方便。
        <br />---------------localStorage---------------
        <br />---------------sessionStorage---------------
        <div>
          <form v-if="!isReg">
            <input type="text" v-model="name" placeholder="用户名" />
            <input type="password" v-model="password" placeholder="密码" />
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="reg()">注册</button>
          </form>
          <form v-else>
            <input type="text" v-model="name" placeholder="用户名" />
            <input type="password" v-model="password" placeholder="密码" />
            <input type="password" v-model="repeat" placeholder="再次输入密码:" />
            <button type="button" @click="addUser()">确定</button>
            <button type="button" @click="cancel()">取消</button>
          </form>
        </div>
      </div>

      <div class="shijiu">
        <p class="heiha">27.什么叫：函数参数是按值传递的，用代码举例？</p>1,.按值传递，分为两类，
        基本类型值的传递和函数参数的传递，而函数参数的传递又有两种，基本类型值的参数传递和引用类型值的参数传递。
        其中，引用类型值的传递实际上传递的对象的引用（引用=内存中的地址=值），而不是传递的对象本身，
        <br />
        <button @click="zhichuan">按值传递</button>
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">28.call()、apply()是什么？有什么区别，使用场景是什么，用代码举例？</p>区别：
        <br />call， apply：两者都可以改变this的指向，区别是方法的实现形式与参数传递上的不同
        <br />使用场景：
        <br />(1)改变this的指向
        <br />
        <button @click="hudiao">改变指向</button>
      </div>
      <div class="shijiu">
        <p class="heiha">29.什么是闭包？使用场景是什么，用代码举例？</p>1. 什么是闭包：
        <br />闭包就是函数外部可以访问函数内部的变量，函数内部外部连接起来的桥梁，
        <br />2.闭包的用途：
        <br />(1)访问函数内部的变量
        <br />(2)防止函数内部的变量执行完后被销毁，值会一直存着，
        <br />
        <button @click="fangwen">访问存值</button>
        <br />3.闭包应用场景：
        <br />(1)采用函数引用方式的setTimeout调用。
        <br />
        <button @click="setdiao">setTimeout</button>

        <br />(2)封装变量
        <br />
        <button @click="feng">封装变量</button>
      </div>
      <div class="shijiu">
        <p class="heiha">30.什么是函数作用域、全局、块级作用域？</p>函数作用域：
        <br />函数内声明的所有变量在函数体内始终可见，可以在整个函数范围内使用或者重用，
        <br />1.全局变量：
        <br />声明在函数外部的变量，代码中任何地方都可以访问的对象有全局作用域，(没var，直接赋值的变量是全局)
        <br />(1)最外层函数和最外层函数外定义的变量拥有全局作用域，
        <br />(2)所有未定义直接赋值的变量直接声明为有全局作用域，
        <br />(3)所有window的属性都有全局作用域
        <br />2.局部变量：
        <br />声明在函数内部的变量，局部作用域只在固定的代码段内可以访问到，
        3.块级作用域：
        <br />外层作用域无法获取内层作用域，即使起了相同的名字也无妨
        <br />(1)let:
        <br />不会变量提升，只在代码块内有效，称为暂时性死区
        <br />(2)const：
        <br />常量变量，定义的变量无法修改
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p
          class="heiha"
        >31.let [a, [b], d] = [1, [2, 3], 4]；let { foo, bar } = { foo: ‘aaa’, bar: ‘bbb’ }; a、b、c、foo、bar分别值为什么？为什么？</p>
        <button @click="fenbie">what</button>
        <br />1.数组解构：
        <br />数组的元素是按次序排列的，变量的取值由它的位置决定
        <br />2.对象解构：
        <br />对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
        <br />输出：1，2，4，aaa，bbb
      </div>
      <div class="shijiu">
        <p class="heiha">32.let arr=[‘模板’,‘字符串’,‘使用案例’];把数组内容用模板字符串方式表达出来;</p>
        <button @click="moban">模板字符串</button>
      </div>
      <div class="shijiu">
        <p class="heiha">33.假设现在有一个由20个数字组成的数组，但顺序、数字值没规律，写个递归函数，找出数组内是否有’97’这个数字；</p>
        <button @click="jiashe">递归函数</button>
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">34.扩展运算符是什么？一般的使用场景有哪些，用代码表达出来</p>扩展运算符：
        <br />扩展运算符是spread，为三个点...,(Es6新增的语句)
        <br />用法：
        <br />(1)传递数据代替多个数组
        <br />
        <button @click="daiti">传值代替</button>
        <br />(2)将数组插入到另一个数据
        <br />
        <button @click="charu">数组插入</button>
        <br />(3)字符串转数据
        <br />
        <button @click="zifu">字符转换</button>
        <br />(4)数组转换为参数
        <br />
        <button @click="diaohan">数组转换</button>
        <br />
        <br />(1)当三个点(...)在等号左边，或者放在形参上。为 rest 运算符
        <br />(2)当三个在等号右边，或者放在实参上，是 spread运算符
        <br />(3)或者说： 放在被赋值一方是rest 运算符。放在赋值一方式 spread运算符。
      </div>
      <div class="shijiu">
        <p class="heiha">35.Let arr=[3, 5, 2, 2, 5, 5];写出三种去重方法</p>
        <button @click="quchong1">去重方法1</button>
        <br />
        <button @click="quchong2">去重方法2</button>
        <br />
        <button @click="quchong3">去重方法3</button>
      </div>
      <div class="shijiu">
        <p class="heiha">36.async 函数是什么？一般的使用场景有哪些，用代码实现一个</p>1.async函数:是将多个异步操作包装成一个promise对象，await命令是then的语法糖，
        <br />2.async函数用法：返回一个promise对象，用then添加回调函数，函数执行时一旦遇到await就返回，
        等异步执行完毕后再执行函数内后面的语句，
        <br />3.使用场景：
        <br />
        <button @click="dingyi">定义async</button>
        <br />
        <button @click="shili1">并发请求1</button>
        <br />
        <button @click="shili2">并发请求2</button>
        <br />
        <button @click="shili3">错误处理</button>
        <br />
        <button @click="shili4">超时处理</button>
        <br />
        <button @click="shili5">并发限制</button>
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">37.Es6里怎么导入、导出，从而实现模块化？写个例子</p>ES6的模块化的基本规则或特点：
        <br />1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；
        <br />2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
        <br />3：模块内部的变量或者函数可以通过export导出；
        <br />4：一个模块可以导入别的模块
        <br />export的用法
        <br />在ES6中每一个模块即是一个文件，在文件中定义的变量，函数，对象在外部是无法获取的。
        如果你希望外部可以读取模块当中的内容，就必须使用export来对其进行暴露（输出）。
        <br />
        <button @click="shilia">模块实例</button>
      </div>
      <div class="duo">
        <p class="heiha">
          38.includes()、startsWith()、endsWith()、trunc()、 Array.from()、Array.of()、find()、
          findIndex()、Object.keys()、Object.assign()、Object.is()、map()、filter()、
          forEach()、every()、some()、reduce()、Promise.all()、Promise.race()是什么，用代码写个例子出来
        </p>
        <button @click="three1">(1)includes(): 判断数组是否包含一个指定的值，返回true/false。</button>
        <button @click="three2">(2)startsWith(): 检测字符串是否以指定字符串开头，可传俩参数，指定范围内查找</button>
        <button @click="three3">(3)endsWith(): 判断字符串是否以指定后缀结尾，可传俩参数，指定范围内查找</button>
        <button @click="three4">(4)trunc(): 将数字的小数部分去掉，只保留整数</button>
        <button @click="three5">(5)Array.from(): 将类数组对象或可遍历对象变成真正的数组</button>
        <button @click="three6">(6)Array.of(): 将一组值转换为数组</button>
        <button
          @click="three7"
        >(7)find(): 找出第一个符合条件的数组成员，它的参数是一个回调函数，所有数组成员依次执行回调函数，指导找到第一个返回值为true的成员，再返回</button>
        <button @click="three8">(8)findIndex(): 返回第一个符合条件的数组成员，并返回索引，若不符合，返回-1</button>
        <button @click="three9">(9)Object.keys(): 返回枚举自身属性的对象，如果对象中的键值都不可枚举，就返回由键组成的数组</button>
        <button @click="three10">(10)Object.assign(): 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。</button>
        <button @click="three11">(11)Object.is(): 判断两个值是否时相等的值</button>
        <button @click="three12">(12)map(): 返回一个新数组，数组中的元素为原始数组元素调用函数后处理的结果</button>
        <button @click="three13">(13)filter(): 方法创建一个新数组，新数组中的元素是通过检查指定数组中所有符合条件的元素</button>
        <button @click="three14">(14)forEach(): 调用数组的每个元素，并将元素传递给回调函数</button>
        <button @click="three15">(15)every(): 检测数组所有元素是否符合指定条件</button>
        <button @click="three16">(16)some(): 检测数组中的元素是否满足指定条件</button>
        <button @click="three17">(17)reduce(): 接收一个函数作为累加器，数组中的每个值开始缩减，最终计算为一个值</button>
        <button @click="three18">
          (18)Promise.all():类方法，多个 Promise 任务同时执行。
          如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。
        </button>
        <button @click="three19">(19)Promise.race(): 将多个 Promise 实例，包装成一个新的 Promise 实例。</button>
      </div>
      <div class="shijiu">
        <p class="heiha">39.用弹性盒子写一个绝对居中的布局</p>
        <div class="tanxing">
          <div class="sa a1" style="background: white;"></div>
          <div class="sa a2" style="background: darkgrey;"></div>
          <div class="sa a3" style="background: lightgray;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//模块 export 与import

//(1)导出数目太多 不用一一对应
// import * as lesson from '@/daochu'
// console.log(lesson.a,lesson.test)
//* 代表全部内容，as 代表别名

//(2)
import { a, test, hello } from "@/daochu";

//(3)推荐写法
//import Daochu from '@/daochu'
//好处
//1.不会因为误操作将一些无关变量导出
//2.通过 export default，由第三方引用时无需知道其名称，较为简洁

// import { async } from "q";
// import func from "../../vue-temp/vue-editor-bridge";
// import GLOBAL from "@/quanju";
export default {
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: "",
      hideMenu: "我要消失"
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    login() {
      //验证姓名和密码是否与locastorage一致
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        //清空输入框
        this.name = "";
        this.password = "";

        this.$router.push({ name: "html" });
      } else {
        alert("用户名或密码不正确");
      }
      console.log(Object.prototype.toString.call(this.name));
    },
    reg() {
      this.isReg = true;
    },
    cancel() {
      this.isReg = false;
    },
    addUser() {
      //验证两次输入密码是否一致
      if (this.password === this.repeat) {
        //将名字和密码存入localstorage中
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        //清空输入框
        this.name = "";
        this.password = "";
        this.isReg = false;
      } else {
        alert("两次密码不一致");
      }
    },

    bian() {
      document.getElementById("yang").style.backgroundColor = "white";
      document.getElementById("yang").style.height = "120px";
    },
    jubu() {
      function fun() {
        var n = 2;
        return n + n;
      }
      fun();
      console.log(fun());
    },
    quanju() {
      var n = 2;
      function fun() {
        return n + n;
      }
      fun();
      console.log(fun());
    },
    hanshu() {
      console.log(f1);
      console.log(f2);
      function f1() {}
      var f2 = function() {};
    },
    bianti() {
      function f2() {
        console.log(b);
        var b = 4;
      }
      f2();
    },
    Alet() {
      function f() {
        let a = 12;
        console.log(a);
      }
      f();
    },
    Aconst() {
      function f2() {
        const s = 99;
        console.log(s);
      }
      f2();
    },
    jiantou() {
      let add = (a, b) => a + b;
      console.log(3 + 4);
    },
    sanmu() {
      let a = 3,
        b = 4;
      let c = 3 > 4 ? a : b;
      console.log(c);
    },
    shengming() {
      function sheng(a, b) {
        alert(a + b);
      }
      sheng(3, 7);
    },
    gouzao() {
      var add = new Function("w", "q", "return w+q");
      alert(add(5, 7));
    },
    biaoda() {
      var t = function(a, b) {
        alert(a + b);
      };
      t(90, 10);
    },

    fanhui() {
      function hei(s, q) {
        alert(s * q);
      }
      hei(7, 8);
    },
    jieshu() {
      function end() {
        for (var i = 0; i < 100; i++) {
          console.log(i);
          if (i === 15) {
            return;
          }
        }
        console.log(i);
      }
      end();
    },
    a() {},
    yu() {
      var a = 2,
        b = 3,
        c = 2,
        d = 3;
      if ((a = c && false)) {
        alert(true);
      } else {
        alert(false);
      }
    },
    huo() {
      var a = 2,
        b = 3,
        c = 2,
        d = 3;
      if ((a = c || false)) {
        alert(true);
      } else {
        alert(false);
      }
    },
    fei() {
      var a = 2,
        b = 3,
        c = 2,
        d = 3;
      if ((a = !c)) {
        alert(true);
      } else {
        alert(false);
      }
    },
    shijiu1() {
      if ({} == {}) {
        alert(true);
      } else {
        alert(false);
      }
      console.log({});
    },
    shijiu2() {
      if ([] == []) {
        alert(true);
      } else {
        alert(false);
      }
    },
    shijiu3() {
      if ("bb" == "bb") {
        alert(true);
      } else {
        alert(false);
      }
    },
    shijiu4() {
      if (3 == 3) {
        alert(true);
      } else {
        alert(false);
      }
    },
    shijiu5() {
      if (3 === "3") {
        alert(true);
      } else {
        alert(false);
      }
    },
    shijiu6() {
      if (5 + "5") {
        alert(true);
      } else {
        alert(false);
      }
      console.log(5 + "5");
    },
    shijiu7() {
      if ("str" + 6) {
        alert(true);
      } else {
        alert(false);
      }
      console.log("str" + 6);
    },
    ershi() {
      var b = 2;
      //   c = b++;
      //   d = ++b;
      console.log(b++);
      console.log(++b);
    },
    aifelse() {
      if (3 < 5 || 2 < 1) {
        alert(true);
      } else {
        alert(false);
      }
    },
    aswitch() {
      switch (new Date().getDay()) {
        case 0:
          alert("周日");
          break;
        case 1:
          alert("周一");
          break;
        case 2:
          alert("周二");
          break;
        case 3:
          alert("周三");
          break;
        case 4:
          alert("周四");
          break;
        case 5:
          alert("周五");
          break;
        case 6:
          alert("周六");
          break;
      }
    },
    afor() {
      let a = [1, 2, 3, 4, 5];
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
      }
    },
    aforin() {
      let s = { name: "bob", age: "18" };
      for (let i in s) {
        console.log(s[i]);
      }
    },
    awhile() {
      let g = ["哈哈", "呵呵", "嘎嘎", "哇哇"];
      let i = 0;
      while (g[i]) {
        console.log(g[i]);
        i++;
      }
    },
    aforof() {
      let sd = ["狗狗", "猫猫", "马儿"];
      for (let i of sd) {
        console.log(i);
      }
    },
    aforeach() {
      let arr = ["aa", "bb", "cc"];
      arr.forEach(v => {
        console.log(v);
      });
    },
    acontinue() {
      for (var i = 0; i < 10; i++) {
        if (i == 3) {
          continue;
        }
        console.log(i);
      }
    },
    abreak() {
      for (var i = 0; i < 15; i++) {
        if (i == 4) {
          break;
        }
        console.log(i);
      }
    },
    atypeof() {
      console.log(typeof 3);
      console.log(typeof null);
      console.log(typeof "kk");
      console.log(typeof ll);
    },
    ainstanceof() {
      console.log([1, 2, 3] instanceof Array);
      function Student() {}
      var s = new Student();
      console.log(s instanceof Student); //true  实例是否属于它的父类
    },
    aprototype() {
      console.log(Object.prototype.toString.call(1));
      console.log(Object.prototype.toString.call("dd"));
      console.log(Object.prototype.toString.call([1, 2, 3]));
    },
    quanju() {
      console.log(self === window);
    },
    hanshu() {
      function f1() {
        return this;
      }
      console.log(f1() === undefined);
      console.log(f1() === window);
    },
    duixiang() {
      var duixiang = {
        name: "bob",
        age: "18",
        dui: function() {
          console.log(this.name);
          console.log(this === duixiang);
        }
      };
      duixiang.dui();
    },
    gouzao() {
      var haha = function() {
        this.name = "tom";
      };
      var haha1 = new haha();
      //   haha1.name = "jerry";
      console.log(haha1.name);
      console.log(typeof haha1);
      console.log(Object.prototype.toString.call(haha1));
    },
    acall() {},
    jiant() {},
    zhichuan() {
      var person = new Object();
      var obj = person;
      obj.name = "Nicholas";
      obj = new Object();
      obj.name = "Greg";
      alert(person.name);
    },
    hudiao() {
      function add(a, b) {
        alert(a + b);
      }
      function jian(a, b) {
        alert(a - b);
      }
      jian.call(add, 9, 4);
      jian.apply(add, [9, 2]);
    },
    fangwen() {
      function f1() {
        var a = 2,
          b = 5;
        function f2() {
          alert(a + b);
        }
        f2();
      }
      f1();
    },
    setdiao() {
      //原生的setTimeout传递的第一个函数不能带参数
      //   setTimeout(function(param) {
      //     alert(param);
      //   }, 1000);

      //通过闭包可以实现传参效果
      function func(param) {
        return function() {
          alert(param);
        };
      }
      var f1 = func(1);
      setTimeout(f1, 2000);
    },
    feng() {
      var counter = (function() {
        var privateCounter = 0; //私有变量
        function change(val) {
          privateCounter += val;
        }

        return {
          increment: function() {
            //三个闭包共享一个词法环境
            change(1);
          },
          decrement: function() {
            change(-1);
          },
          value: function() {
            return privateCounter;
          }
        };
      })();
      console.log(counter.value());
      counter.increment();
      counter.increment();
      console.log(counter.value()); //2
      counter.decrement();
      console.log(counter.value()); //1
    },
    fenbie() {
      let [a, [b], c] = [1, [2, 3], 4];
      let { foo, bar } = { foo: "aaa", bar: "bbb" };
      alert(a);
      alert(b);
      alert(c);
      alert(foo);
      alert(bar);
    },
    moban() {
      // let arr=`[模板,字符串,使用案例]`
      let arr = [`模板`, `字符串`, `使用案例`];
      console.log(arr);
    },
    jiashe() {
      //   let num = +("" + Math.random() * 100).split(".")[0];
      //   let a1 = Math.random() * 100;
      //   let a2 = "" + a1;
      //   let a3 = a2.split(".");
      //   let a4 = a3[0];
      //   let a5 = a3[1];
      //   let a6 = +a4;

      //   console.log("a1:", a1);
      //   console.log("a2:", a2);
      //   console.log("a3:", a3);
      //   console.log("a4:", a4);
      //   console.log("a5:", a5);
      //   console.log("a6:", a6);

      let arr = [];
      for (let i = 20; i--; ) {
        //let num = +("" + Math.random() * 100).split(".")[0];
        // let num = Math.trunc(+Math.random() * 100);
        let num = +("" + Math.random() * 100).split(".")[0];

        arr.push(num);
      }
      console.log(arr);

      if (arr.some(h => h === 97)) {
        alert("找见97了");
      } else {
        alert("找不见");
      }
    },
    daiti() {
      function ll(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
      var arr = [1, 2, 3];
      ll(...arr);
    },
    charu() {
      var j1 = [1, 2, 3, 4, 5];
      var j2 = [...j1, 6, 7, 8, 9];
      console.log(j2);
    },
    zifu() {
      var k = "helloworld";
      var l = [...k];
      console.log(l);
    },
    diaohan() {
      function p(a, b) {
        return a + b;
      }
      var o = [3, 8];

      console.log(p(...o));
    },
    quchong1() {
      let arr = [3, 5, 2, 2, 5, 5];
      function h(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (i == j) {
              continue;
            } else if (arr[i] === arr[j]) {
              arr.splice(j, 1);
            }
          }
        }
      }
      h(arr);
      console.log(arr);
    },
    quchong2() {
      let arr = [3, 5, 2, 2, 5, 5];
      function j(arr) {
        let newarr = [];
        for (let i = 0; i < arr.length; i++) {
          if (newarr.indexOf(arr[i]) == -1) {
            newarr.push(arr[i]);
          }
        }
        console.log(newarr);
      }
      j(arr);
      6;
    },
    quchong3() {
      let arr = [3, 5, 2, 2, 5, 5];
      function fun() {
        for (let i = 0; i < arr.length; i++) {
          for (let j = arr.length; j > i; j--) {
            if (arr[i] == arr[j]) {
              arr.splice(arr[j], 1);
            }
          }
        }
        return arr;
      }
      var result = fun();
      console.log(result);
      fun();
    },
    dingyi() {
      async function test() {
        var a = await 1;
        var b = await 2;
        return b;
      }
      test().then(res => {
        // res为test函数的返回值。async会返回一个Promise对象
        console.log(res);
      });
    },
    shili1() {
      //并发请求1     异步并发请求
      async function infoCrawler(url, name) {
        let [schoolAdr, homeAdr] = await Promise.all([
          getSchoolAdr(name),
          getHomeAdr(name)
        ]);
        let info = await getInfo(
          url + `?schoolAdr=${schoolAdr}&homeAdr=${homeAdr}`
        );
        return info;
        console.log(info);
      }
    },
    shili2() {
      //有的时候我们并不需要等待一个请求回来才发出另一个请求,这样效率是很低的,
      //所以这个时候就需要并发执行请求任务

      //存储图片    哪张图片来了就存哪张

      // let imageUrls = ["href1", "href2", "href3"];
      // async function saveImages(imageUrls) {
      //   await Promise.all(
      //     imageUrls.map(async imageUrl => {
      //       let img = await getImage(imageUrl);
      //       return await saveImage(img);
      //     })
      //   );
      //   console.log("done");
      // }
      ///////////存储是否全部完成

      let imageUrls = ["href1", "href2", "href3"];
      // saveImages() 连 async 都省了
      function saveImages(imageUrls) {
        imageUrls.forEach(async imageUrl => {
          let img = await getImage(imageUrl);
          saveImage(img);
          //不关心是否存储完成
        });
      }
    },
    shili3() {
      //错误处理
      //一个请求发出,可以会遇到各种问题,报错是常有的事,所以处理错误有时很有必要,
      //async/await 处理错误也非常直观, 使用 try/catch 直接捕获就可以了
      async function imageCrawler(url) {
        let img = await getImage(url);
        return img;
      }
      imageCrawler(url).catch(err => {
        console.log(err);
      });

      //外层捕获错误
      // async function ctx(next) {
      //   try {
      //     await next();
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    },
    shili4() {
      //超时处理    一个请求发出,我们是无法确定什么时候返回的,也总不能一直傻傻的等,设置超时处理有时是很有必要的
      function timeOut(delay) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("不用等了,别傻了"));
          }, delay);
        });
      }

      async function imageCrawler(url, delay) {
        try {
          let img = await Promise.race([getImage(url), timeOut(delay)]);
          return img;
        } catch (error) {
          console.log(error);
        }
      }
    },
    shili5() {
      //在并发请求的场景中,如果需要大量并发,必须要进行并发限制,不然会被网站屏蔽或者造成进程崩溃

      async function getImages(urls, limit) {
        let running = 0;
        let r;
        let p = new Promise((resolve, reject) => {
          r = resolve;
        });
        function run() {
          if (running < limit && urls.length > 0) {
            running++;
            let url = urls.shift();
            (async () => {
              let img = await getImage(url);
              running--;
              console.log(img);
              if (urls.length === 0 && running === 0) {
                console.log("done");
                return r("done");
              } else {
                run();
              }
            })();
            run(); // 立即到并发上限
          }
        }
        run();
        return await p;
      }
    },
    shilia() {
      console.log(a, test, hello);
    },
    three1() {},
    three2() {},
    three3() {},
    three4() {},
    three5() {},
    three6() {},
    three7() {},
    three8() {},
    three9() {},
    three10() {},
    three11() {},
    three12() {},
    three13() {},
    three14() {},
    three15() {},
    three16() {},
    three17() {},
    three18() {},
    three19() {}
  }
};
</script>