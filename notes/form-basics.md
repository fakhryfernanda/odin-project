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