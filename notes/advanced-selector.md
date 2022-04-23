# Advanced Selectors

## Parent and Sibling Combinators

- `>` - the child combinator
- `+` - the adjacent sibling combinator
- `~` - the general sibling combinator

## Pseudo-classes
Pseudo-class selectors are prefixed with a **single colon** and are a different way to target elements that already exist in HTML.

Example
- `:focus`
- `:hover`
- `:active`
- `:first-child`
- `:first-of-type`

## Pseudo-elements
Pseudo-elements are prefixed with **two colons** and are used to target elements that *don’t* normally exist in the markup.

Example
- `::marker` allows you to customize the styling of your `<li>` elements’ bullets or numbers
- `::before` and `::after` allow us to add extra elements onto the page with CSS, instead of HTML

## Attribute Selectors

Recall that an attribute is simply anything in the opening tag of an HTML element - such as `src='picture.jpg'` or `href="www.theodinproject.com"`.

Let’s look at some examples for basic usage.

- `[attribute]` - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
- `selector[attribute]` - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
- `[attribute="value"]` - To get really specific, we can use = to match a specific attribute with a specific value.

If you want to match a part of the attribute’s value.

- `[attribute^="value"]` - `^=` Will match strings from the start.
- `[attribute$="value"]` - `$=` Will match strings from the end.
- `[attribute*="value"]` - `*=` The wildcard selector will match anywhere inside the string.

<br><br>

# Fun CSS Selector Game
[Let's Play!](https://flukeout.github.io/)
