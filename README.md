# vue-hello-world

使用的vue版本 3x
使用的node版本 20.10.0


### Props & Attributes 

在 Vue 中，props 和 attributes 是两种不同的概念，它们都用于父组件向子组件传递数据，但是使用方式和场景有所不同。

Props 是父组件向子组件传递数据的一种方式。子组件需要显式地在 props 选项中声明它期望接收的 props。props 是单向数据流，也就是说，子组件不能修改从父组件接收的 props，任何尝试修改 props 的操作都会在控制台中产生警告。

Attributes 是 HTML 元素的标准特性，例如 id、class、style 等。在 Vue 中，如果你在一个组件上使用了非 prop 特性（即没有在子组件的 props 选项中定义的特性），它们会被添加到组件的根元素上。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
