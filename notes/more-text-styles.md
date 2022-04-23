# More Text Styles

## Fonts

### The System Font Stack

One popular stack is this ‘system font’ stack.
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

The point of this somewhat ridiculous string of font-families is to try using the default font of the system’s user interface. It will go through each of those fonts until it finds one that is installed on the system, and then use that.

### Online Font Libraries

One popular and easy method to get fonts that are not installed on a user’s computer is to use an online font library like [Google Fonts](https://fonts.google.com/), [Font Library](https://fontlibrary.org/) or the premium, but non-free [Adobe Fonts](https://fonts.adobe.com/).

To use a font from one of these libraries, go to the website, select a font and then copy a snippet from the website to import that font from their server into your website. You’ll be given either a `<link>` tag to put in your HTML like so….

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

… or an `@import` tag that can be dropped at the top of a CSS file.

``` css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

Either method will import that font and make it available for you to use in your CSS:

``` css
body {
  font-family: 'Roboto', sans-serif;
}
```

Keep in mind that it’s important to add a fallback font. 

### Downloaded Fonts
It is also possible to use a font that you have downloaded from the web. In your CSS file, you import and define a custom font using the `@font-face` rule, and then use as you would any other font-family.

``` css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```

This method *may* be more reliable than relying on an third-party font API, but it is always wise to include a fallback.

## Text Styles
These rules are all relatively simple and self-explanatory. You can refer to the docs for any questions you might have.

- `font-style`
- `letter-spacing`
- `line-height`
- `text-transform`
- `text-shadow`
- `ellipsis`