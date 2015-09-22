# lightponents

## This is a light way of web components.

### Usage

1. `git clone https://github.com/Qs-F/lightponents`
2. apply js file to your html `<script src="lightponents.js"></script>`
3. write base HTML
4. use it.

### Sample

#### base.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="lightponents.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        $docs = {
          "title":"de-liKeR",
          "description":document.querySelector("header").innerHTML,
        }
      }, false);
    </script>
  </head>
  <body>
    <header class="lp" data-raw="components/header.html">
      <p class="description">CreatorQsF Blog</p>
    </header>
  </body>
</html>
```

### components/header.html

```html
<h1>..title..</h1>
..description..
```