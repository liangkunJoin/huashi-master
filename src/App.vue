<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App'
  }
</script>

<style type="text/css">
    * {
      webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
        font-size: 10px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #737373;
        background-color: #ffffff;
    }

    a {
      color: #737373;
      text-decoration: none;
    }

    a:hover, a:focus {
        color: #ff6a00;
        text-decoration: underline;
    }

    ol, ul {
      margin-top: 0;
      margin-bottom: 0;
    }

    img {
        vertical-align: middle;
        border: 0;
    }

    p {
        margin: 0 0 10px;
    }

    .input-group {
        position: relative;
        display: table;
        border-collapse: separate;
    }

    input, button, select, textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    input {
        line-height: normal;
    }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }

  

    .btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: 0;
    }

    .btn-primary {
        color: #ffffff;
        background-color: #ff6a00;
        border-color: #ff6a00;
    }

    .btn-primary:hover, 
    .btn-primary:focus, 
    .btn-primary.focus, 
    .btn-primary:active, 
    .btn-primary.active {
    color: #ffffff;
    border-color: #f56600;
    background-color: #f56600;
}

    button, 
    html input[type="button"], 
    input[type="reset"], 
    input[type="submit"] {
        -webkit-appearance: button;
        cursor: pointer;
    }

    .floor .bd .floor-products li:hover {
        z-index: 99;
        border: 1px solid #ccc;
    }

    #app{
     width: 100%;
     height: 100%;
    }

    footer {
        font-size: 12px;
        padding-bottom: 20px;
        text-align: center;
        width: 1200px;
        margin: 0 auto;
    }
</style>
