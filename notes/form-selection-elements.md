<link rel="stylesheet" href="./style.css">

## Selection Elements
Sometimes you will want users to select a value from a predefined list. This is where select elements will come in useful.

### Select Dropdown
The select element renders a dropdown list where users can select an option. Syntactically, select elements have similar markup to unordered lists. The select element wraps option elements which are the options that can be selected.

All the option elements need to have a `value` attribute. This value will be sent to the server when the form is submitted.

We can set one of the options to be the default selected element when the browser first renders the form by giving one of the options the `selected` attribute.

```html
<select name="Car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla" selected>Tesla</option>
  <option value="volvo">Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>
```

We may also split the list of options into groups using the `<optgroup>` element. The optgroup element takes a `label` attribute which the browser uses as the label for each group.

```html
<select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select>
```

### Radio Buttons

Radio buttons allow us to create multiple options that the user can choose one of. We can set the default selected radio button by adding the checked attribute to it.

```html
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior" checked>
  <label for="senior">Senior</label>
</div>
```

When we select one of the radio buttons and then select another, it will deselect the first one. Radio buttons know to do this because they have the same `name` attribute. This is how the browser knows these elements are part of the same group of options.

### Checkboxes
Checkboxes are similar to radio buttons in that they allow users to choose from a set of predefined options. But unlike radio buttons, they allow multiple options to be selected at once.

```html
<h1>Pizza Toppings</h1>

<div>
  <input type="checkbox" id="sausage" name="topping" value="sausage">
  <label for="sausage">Sausage</label>
</div>

<div>
  <input type="checkbox" id="onions" name="topping" value="onions">
  <label for="onions">Onions</label>
</div>

<div>
  <input type="checkbox" id="pepperoni" name="topping" value="pepperoni">
  <label for="pepperoni">Pepperoni</label>
</div>

<div>
  <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
  <label for="mushrooms">Mushrooms</label>
</div>
```

We can also have a single checkbox when we want users to toggle if they want something to be true or false. Like signing up to a newsletter when they create an account for example:

```html
<div>
  <input type="checkbox" id="newsletter" name="news_letter">
  <label for="newsletter">Send me the news letter</label>
</div>
```

## Buttons
The button element creates clickable buttons that the user can interact with to submit forms and trigger other actions. The button element also accepts a type attribute that tells the browser which kind of button it is dealing with. There are three types of buttons available to us.

- Submit Button <br> When a submit button is clicked, it will submit the form it is contained within. The type attribute has a value of submit by default.
- Reset Button <br> A reset button clears all the data the user has entered into the form and sets all the inputs in the form back to what they were initially.
- Generic Button <br> The third and final button type is simply a generic button that can be used for anything. It’s commonly used with JS for creating interactive UI’s.

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click to Toggle</button>
```



