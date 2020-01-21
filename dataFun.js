<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>rootData</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>
<body>
<div id="app">
    {{message}}
    <home/>    
</div>
<script>
    const data = {
        num: 1,
    };
    {/* 声明根组件 */}
    const app = new Vue({
        el: "#app",
        data: {message:"root"},
    });
    {/* 注册一般组件  */}
    Vue.components("home",{
        data(){
            return {
                name:"shasah"
            }
        },
        template:'<h3>名字:{{name}}次</h3>'
    })

</script>


//问题:Vue组件data选项为什么必须是个函数,而Vue的根实例则没有此限制?

1.根实例是挂载在#app上，而一般的组件要复用 如果实例化之后的组件共享一个data 
  修改组件1就会改动到组件2的引用 这样会造成数据的紊乱 如果通过函数return 出来就不会有这个问题
2.  
  
