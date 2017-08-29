# gulp-stable-demo
a gulp stable demo copyright by mamba_never_out

此 gulp demo 同样分为开发模式和生产模式

### 开发模式

```javascript
gulp | gulp default
```



将less预编译成css,将 es6 通过 gulp-babel转化为 es5，然后通过browserify实现require模块化。

### 生产模式

```javascript
gulp pro
```



压缩css,压缩图片,压缩js。
