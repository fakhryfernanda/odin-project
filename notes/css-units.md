# CSS Units

## Absolute Units
Absolute units are those that are always the same in any context. `px` is an absolute unit because the size of a pixel doesn’t change relative to anything else on the page. In fact, `px` is the only absolute unit you should be using for web projects.

The following are all **absolute** length units — they are not relative to anything else, and are generally considered to always be the same size.

| Unit | Name | Equivalent to |
| ---- | ---- | ------------- |
| `cm` | Centimeters | 1cm = 37.8px |
| `mm` | Millimeters | 1mm = 0.1cm |
| `Q`  | Quarter-millimeters | 1Q = 0.25mm | 
| `in` | Inches | 1in = 2.54cm = 96px |
| `pc` | Picas | 1pc = 1/6th of 1in |
| `pt` | Points | 1pt = 1/72th of 1in |
| `px` | Pixels | 1px = 1/96th of 1in |

## Relative Units
Relative units are units that can change based on their context. There are several of them that you are likely to encounter and want to use.

| Unit | Relative to |
| ---- | ----------- |
| `em` | Font size of the parent, in the case of typographical properties like `font-size`,<br> and font size of the element itself, in the case of other properties like `width`. |
| `rem` | Font size of the root element. |
| `ex` | x-height of the element's font. |
| `ch` | The advance measure (width) of the glyph "0" of the element's font. |
| `lh` | Line height of the element. |
| `vw` | 1% of the viewport's width. |
| `vh` | 1% of the viewport's height. |
| `vmin` | 1% of the viewport's smaller dimension. |
| `vmax` | 1% of the viewport's larger dimension. |

## Suggestions

Use `rem` for `font-size` and `px` for everything else. Using `em` is more confusing than it’s really worth and can lead to confusing size-related bugs.

<br><br>

# Other Article

- [CSS units: em, rem, and px](https://codyloyd.com/2021/css-units/)
- [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)