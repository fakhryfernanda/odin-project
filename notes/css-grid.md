# CSS Grid

## Creating Grid

```css
.container {
  display: grid;
}
```

## Many Ways to Create Columns and Rows

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
}
```
```css
// Shorthand method
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
```

## Grid auto rows

The `grid-auto-rows` property sets a size for all rows in a grid container. This property affects only rows with the size not set.

## Questions

1. Describe what happens when you have more content than defined tracks. *(Grid cell will be added in new row)*
1. How could you change the size for those undefined tracks? *(Using `grid-auto-rows` or `grid-auto-columns`)*
1. Explain the difference between a track and a line. *(Track itu baris atau kolom, line itu garis batas atau border dari grid item)*
1. What is the smallest unit on a grid? *(cell)*
1. What kind of value do we give to the `grid-column-start` or `grid-column-end` properties? *(Posisi line pertama dan terakhir grid item)*
1. Which property can we use to combine all the start and end values for a grid item? *(`grid-area`)*
1. Which grid container property can map out a visual structure of grid items? *(`grid-template-area`)*

<br><br>

# Advanced Grid Properties

## Fractional units
The `fr` unit is a way of distributing whatever *remaining space* is left in the grid. For example, if we have a four-column grid with a total width of `400px` and four grid items each on a column track assigned `1fr` as their size, all of the grid items should be given **one fraction** of that `400px` of space, which is 100 pixels.

## Minimum and Maximum Track Sizes: min() and max()
```css
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
```

What this tells this grid is that the track size should be 50% of the grid’s total vertical space (because we are defining a row size), unless that number would exceed 200px. Essentially, you’re setting a max-height for the track.

Conversely, the grid column size will be calculated based on the larger of the two values 120px and 15% of the grid container’s width. In doing so, we are essentially setting a minimum width of our grid column size at 120px.

## Dynamic minimum and maximum sizes
- `minmax()`: CSS function that is specifically used with Grid. It is a relatively straightforward function that only takes in two arguments, minimum and maximum size
- `clamp()`: Unlike minmax(), clamp() is a CSS function that can be used anywhere, not just within a grid container. <br>The syntax is as follows: `clamp(minimum-size, ideal-size, maximum-size)`. What this does is allow our item to resize itself until it reaches one of the minimum or maximum threshold values.

## auto-fit and auto-fill
``` css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

So what’s going on here specifically with `repeat(auto-fit, minmax(150px, 1fr));`? Simple! Remember that `auto-fit` will return the **highest positive integer** without overflowing the grid.

So first, the browser has to know how wide our grid is: in this case, it’s just the window’s width (minus margins) because we didn’t explicitly set it. For the sake of this example, let’s pretend like our window is currently `500px` wide. Second, the browser needs to know how many grid column tracks could possibly fit in that width. To do this, it uses the minimum value in our `minmax()` function, since that will yield the highest number of items, which is `150px`. If our window is `500px` wide, this means our grid will render 3 columns. But wait, there’s more! Once the browser has determined how many columns we can fit, it then resizes our columns up to the maximum value allowed by our `minmax()` function. In this case, our max size is `1fr`, so all three columns will be given an equal allotment of the space available