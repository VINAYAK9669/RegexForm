# User Input Validation using Regular Expressions

## Overview

This project provides a user-friendly form with input validation based on regular expressions (regex) for various user inputs. It employs the following technologies:

- HTML
- CSS (styled with Materialize)
- JavaScript

## Features

1. **Full Name:**
   - Validates a user's full name.
   - Allows for first, middle, and last names with spaces.
   - Regex Pattern: `/^[a-zA-Z]{3,20}( )[a-zA-Z]{3,20}(( )[a-zA-Z]{3,20})?$/`

2. **Phone Number:**
   - Validates a user's phone number.
   - Accepts various formats, including international numbers.
   - Regex Pattern: `/^\(?(\+?\d{1,3})?\)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/`

3. **Zip Code:**
   - Validates a user's zip code.
   - Allows for optional hyphens.
   - Regex Pattern: `/^\d{1,3}[-]?\d{1,4}$/`

4. **Password:**
   - Validates a user's password.
   - Requires at least one uppercase letter, one lowercase letter, one digit, and one special character.
   - Minimum length is 8 characters.
   - Regex Pattern: `/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/`

5. **Email:**
   - Validates a user's email address.
   - Ensures a valid email format.
   - Regex Pattern: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

## Usage

1. Clone this repository to your local machine.

2. Open the HTML file (`index.html`) in your web browser to access the form.

3. Enter user information into the respective fields.

4. As you type, the form will validate your input using the provided regex patterns.

5. Invalid inputs will trigger error messages, ensuring that users provide valid data.

6. You can integrate this form into your own project by copying the HTML, CSS, and JavaScript code.

7. Customize the form's appearance and behavior to suit your specific requirements.

Enjoy using this user input validation form with regex patterns to enhance your web applications!
