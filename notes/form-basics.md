<link rel="stylesheet" href="./style.css">

# Form Basics

## Introduction

Forms are one of the most critical parts of your site. They are your user’s gateway into your backend – the user provides data in a form, and you do stuff with it.

You need to specify the proper types of inputs for each possible data item since there are often multiple ways to collect a piece of data, but only one way is easiest for your user.

## The Form Element

The form element accepts two essential attributes; the first is the `action` attribute which takes a URL value that tells the form where it should send its data when submitted. The URL can be either absolute or relative URL.

```html
<form action="example.com/path" method="post">

</form>
```

## Form Controls
To start collecting user data, we need to use form control elements. These are all the elements users will interact with on the form:
- text boxes
- dropdowns
- checkboxes
- buttons

## The Input Element

```html
<form action="example.com/path" method="post">
  <input type="text">
</form>
```

Common used `input` types is `text`, `password`, `number`. 

### Labels

```html
<form action="example.com/path" method="post">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName">
</form>
```

Labels accept a `for` attribute, which associates it with a particular input. The input we want to associate with a label needs an `id` attribute with the same value as the label’s `for` attribute.

When a label is associated with an input and is clicked, it will focus the cursor on that input, ready for the user to input some data. This helps make our forms more accessible to users who rely on assistive technologies. 

### Placeholder Attribute
To guide users on what to enter in form elements, we can include placeholder text in input fields.

``` html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" placeholder="Bob...">
```

Use placeholder text to demonstrate how text should be entered and formatted. 

### The Name Attribute
We need to use labels so that users understand what the data entered into an input field will represent. Just like that, we also need to **let the backend know what each piece of data represents**.

``` html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name">
```

The `name` attribute serves as a reference to the data inputted into a form control after submitting it. You can think of it as a variable name for the input. Form input should always have a `name` attribute; otherwise, it will be ignored when the form is submitted.

We can submit a form to [httpbin](http://httpbin.org/). This service will send back a response which will let us view what data was submitted. 

### Using Form Controls Outside of Forms
You can use any of the form controls HTML provides outside of the `<form>` element. For example you might want to have an input that gets some data from a user and display that somewhere else on the page with JavaScript.

### Email Input
Email inputs are specialized text inputs just for email addresses. They are different from text inputs in that they will display a different keyboard which will include the @ symbol on mobile devices to make entering email addresses easier.

```html
<label for="user_email">Email Address:</label>
<input type="email" id="user_email" name="email" placeholder="you@example.com">
```

### Password Input
Password inputs are another specialized text input. They differ from regular text inputs in that they mask the inputted data with asterisks(*) to prevent anyone from seeing what has been entered.
```html
<label for="user_password">Password:</label>
<input type="password" id="user_password" name="password">
```

### Number Input
The number input only accepts number values and ignores any other characters the user tries to enter.
```html
<label for="amount">Amount:</label>
<input type="number" id="amount" name="amount">
```

### Date Input
To collect dates from a user, we can use a date input. This input is unique because it provides a better user experience for choosing dates by rendering a simple date picker calendar.
```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

### Text Area
The text area element provides an input box that can accept text that spans multiple lines like user comments and reviews. It can also be resized by clicking and dragging the bottom right corner to make it bigger or smaller.

Unlike input elements, Textarea elements do have a closing tag. This allows you to wrap some initial content you want the text area to display.

Text area elements accept a couple of unique attributes that other form controls do not. These are the rows and cols attributes. They allow you to control the initial height(rows) and width(cols) of the text area.

```html
<textarea rows="20" cols="60">Some initial content</textarea>
```