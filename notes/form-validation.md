<link rel="stylesheet" href="style.css">

# Form Validation

## Introduction

Validations allow us to set specific constraints or rules that determine what data users can enter into an input. When a user enters data that breaks the rules, a message will appear, providing feedback on what was wrong with the entered data and how to fix it.

Validations are a vital ingredient in well-designed forms. They help protect our backend systems from receiving incorrect data, and they help make the experience of interacting with our form as dead-stupid-simple as possible for our users.

## Required Validation

``` html
<label for="user_password">*Password</label>
<input type="password" id="password" required>
```

To ensure a good user experience and to meet accessibility guidelines, we should always indicate which fields are required. This will often be done by adding an asterisk(*) to the required field label.

## Text Length Validation (Minimum and Maximum)

``` html
<input type="text" placeholder="Username" minlength="5" maxlength="12">
```

## Number Range Validation
We can do this with the min and max attributes, which allows us to set the lower and upper bounds of the value entered into the form control. The min and max attributes only work with number-based form controls such as the number, dates and time inputs. You can view the complete list of supported elements on [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax).

``` html
<label for="quantity">Quantity</label>
<input type="number" id="quantity" value="1" min="1" max="5">
```

## Pattern Validations
To add a pattern validation, we give the form control a `pattern` attribute with a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as the value. In our example we are using the pattern validation to ensure a US zip code is in the correct format. 5 numbers followed by an optional dash and 4 more numbers. We can add a more descriptive validation message by giving our input a `title` attribute. It is also good practice to use a `placeholder` attribute to show users an example of the expected pattern they need to enter:

``` html
<label for="zip_code">Postal / Zip Code:</label>
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" title="Please enter a valid zip code, example: 65251" placeholder="65251" required>
```

The pattern attribute can only be used on `<input>` elements. Some input elements already validate data that matches a certain pattern. For example the email input field which will make sure a valid email is entered and the url input element which will check to ensure the url starts with http or https.

``` html
<label for="website">*Website</label>
<input type="url" id="website" name="website">
```

## Styling Validations
We can target form controls that have passed or failed validations using the `:valid` and `:invalid` pseudo-classes.

``` css
input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

First of all, we target any valid inputs and give them a green border. Our email and URL inputs initially have a green border since they are not required fields and are valid. When a field is invalid, we give it a red border instead.

## Conclusion

The built-in validations will take you far with ensuring your users enter the correct data. They are quick and easy to add. However, they have their limitations.

Sometimes you will need to include validations that the built-in validations won’t be able to do. For example, validating that a password input and password confirmation input have the same value or validating that a username has not already been taken. We are also limited with what we can do with styling the validation messages and the content within them.

In this case, we will need to get creative and make custom validations using JavaScript and CSS.

It’s also worth noting client-side validations are not a silver bullet for ensuring users enter the correct data. To ensure the integrity of any user data coming into our systems, we should also have server-side validations in place.

# Further Reading

- [MDN’s Client-Side Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Complete Guide to HTML Forms and Constraint Validation Guide](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)
- [Form Validation UX in HTML and CSS Guide](https://css-tricks.com/form-validation-ux-html-css/)