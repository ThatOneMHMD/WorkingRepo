# Regex Tutorial in JS: Match an Email

In this tutorial, we will be exploring a regular expression (aka regex) that can be used to match an email address, meaning that it can be used to find/locate an email within a file, confine what an email can be, and much more. The specific regex pattern we will be discussing is: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`. Note that this is only one of many regex patterns that can be used to match email addresses.

## Summary

Before we dive any deeper, it is imperative that we first understand what a regular expression pattern is; a regex, or sometimes called regexp, is a sequence of characters that defines a search pattern. These patterns consist of a combination of normal characters and special characters (aka metacharacters) that allow us to set rules or conditions to match and manipulate text in a flexible manner. Their most popular use cases include matching, extraction, replacement, validation. In short, it all starts with searching for parts of text or snippets of code that match our specified pattern (regex). Once the matching pattern is found, then we can extract or replace it. Additionally, we can use regex to validate user input by checking if it matches our desired pattern!

Now, with that in mind, note that each regex generally have many small and intricate components that specify its functions. That is why, in this tutorial, we are aiming to explain the individual components of our "Matching an Email" regex and demonstrate how it can be used to match valid email addresses. We will break down the regex into different sections, discuss their functionality, and provide examples to illustrate their usage.

## Table of Contents

- [Regex Tutorial in JS: Match an Email](#regex-tutorial-in-js-match-an-email)
  - [Summary](#summary)
  - [Table of Contents](#table-of-contents)
  - [Delimiters](#delimiters)
  - [Anchors](#anchors)
  - [Grouping Constructs](#grouping-constructs)
  - [Character Escapes](#character-escapes)
  - [Bracket Expressions](#bracket-expressions)
  - [Character Classes](#character-classes)
  - [Quantifiers](#quantifiers)
  - [In Conclusion](#in-conclusion)
  - [Author](#author)
  - [Thank you](#thank-you)

## Delimiters

Delimiters are characters that are used as boundaries to enclose the regular expression pattern. Note that the choice of delimiter is typically specific to the programming language or context in which the regular expression is used. For example, in JavaScript, Perl, and Ruby, the forward slash `/` is commonly used as a delimiter: `/regex pattern/`. This means tbat in other programming langaues, the delimiters can be different (e.g., //, [], <>, etc.), or simply non-existant! In our case, since we are using JS, we are using `/` to mark the boundary of our regex.

In our regex, this is shown here: `/`^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`/`

## Anchors

Anchors are special characters that define specific positions within a string. They do not match any actual characters, but instead represent points in the string where certain conditions must be met. The two most popular anchors are the caret `^`, which matches the specified pattern only if it appears at the beginning of a line or string, and the dollar sign `$`, which matches the specified pattern only if it appears at the end of a line or string. In essence, these two anchors ensure that the pattern matches the entire string from start to end. In our case, this means that the email address should be the complete content of the string being matched, and cannot be a part of a bigger string of code or a line of text; it has to be its own line!

In our regex, this is shown here: /`^`([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})`$`/

## Grouping Constructs

The regex pattern contains several grouped sections/subexpressions denoted by parentheses `()`. These groups are used to capture and organize different parts of our email address regex. For example, `([a-z0-9_\.-]+)` captures the username part, `([\da-z\.-]+)` captures the domain name, and `([a-z\.]{2,6})` captures the top-level domain. Each group here is enclosed in parentheses, indicating that the characters or subexpressions within the parentheses should be treated as a distinct group. These groups can be referenced or extracted separately, allowing us to access and work with specific parts of the matched email address.

In our regex, this is shown here: /^`([a-z0-9_\.-]+)`@`([\da-z\.-]+)`\.`([a-z\.]{2,6})`$/

## Character Escapes

Character Escapes or Escaping metacharacters revolve around using the backslash (`\`) before a metacharacter to remove its special meaning and treat it as an ordinary character. By escaping a metacharacter, you match the actual character itself, rather than its special regex interpretation. For example, within our regex pattern, the dot `.` character is preceded by a backslash `\` to indicate that we want to match its literal character. Note that the `.` (dot) normally matches any character except a newline. Thus, to match a literal dot, you can escape it with `\.`

Also, note that in some cases, metacharacters require a condition for them to having a function, for example, the hyphen (`-`) is considered a literal hyphen when it appears either at the beginning or at the end of a character class. When placed in this position, it is not interpreted as a metacharacter for defining a character range. If the hyphen is placed between two characters within a character class, such as [`a-z`] or [`0-9`], it is interpreted as a metacharacter representing a range between those characters. Thus, in our case, the hyphen was not placed within a character class but rather at after one, hence it was a literal hyphen and we did not need a `\` to escape it!

In our regex, this is shown here: /^([a-z0-9_`\.-`]+)@([\da-z`\.-`]+)`\.`([a-z`\.`]{2,6})$/

## Bracket Expressions

Within the regex pattern, bracket expressions (aka character classes) define a set of characters that can be matched at a specific position within a string. They are enclosed within square brackets `[ ]` and allow us to specify a range or a list of characters that we wish to match. In our case, we use: `[a-z0-9_\.-]` to match any lowercase letter (`a-z`), any digit (`0-9`), underscore, dot, or hyphen. We also use `[\da-z\.-]` to match any digit (we use `\d` this time, which is a metacharacter indicating any digit), any lowercase letter, dot, or hyphen. This means that these are all of our possible characters to match for that group!

In our regex, this is shown here: /^(`[a-z0-9_\.-]`+)@(`[\da-z\.-]`+)\.(`[a-z\.]`{2,6})$/

## Character Classes

We touched upon this briefly in the bracket expressions section, but the character class `\d` is used in the regex pattern to match any digit character. It is equivalent to `[0-9]`. This character class is utilized in the domain name part of the email address.

In our regex, this is shown here: /^([a-z0-9_\.-]+)@([`\d`a-z\.-]+)\.([a-z\.]{2,6})$/

## Quantifiers

Quantifiers are metacharacters that specify the quantity or occurrence of the preceding element or group in the pattern. They define how many times an element should appear for a match to occur. In our case, we used `+` and `{2,6}`. Note that the `+` quantifier specifies that the preceding group or character set should occur one or more times (think of it as an "at least once" statement), while the `{2,6}` quantifier specifies that the preceding group should occur between 2 and 6 times (a simple range). It is important to note that, if no quantifier is specified, the default behavior is to match exactly one occurrence of the preceding element. This is equivalent to using a {1} quantifier, which specifies an exact match of one occurrence. for example, this happens in our case where the `@` and `\.` are mentioned; they are not followed by a quantifiers, hence they must be included only once. (I will not highlight them in below since they are not quantifiers by themselves)

In our regex, this is shown here: /^([a-z0-9_\.-]`+`)@([\da-z\.-]`+`)\.([a-z\.]`{2,6}`)$/

## In Conclusion

our regex: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/` indicated that an email should follow these rules:

- `^([a-z0-9_\.-]+)` --> start with ANY of the following: any lowercase letter, any digit, underscore, dot, and/or hyphen. Additionally, it is specified that the characters of this group must occur at least once. ex: `a`, `abc_123-.._-`, etc.
- `@` exactly one `@` symbol
- `([\da-z\.-]+)` --> this group matches the starting group, BUT it does not include an underscore!
- `\.` --> exactly one dot `.`
- `([a-z\.]{2,6})$` --> end with any lowercase letter or dot, anywhere between 2 or 6 times. ex: `ca`, `com`, `org.ca` (not sure if that really exists, but it is permissible according to our regex!)

So, as a last test of the skills we learnt in this tutorial, you can try using our regex to search and match. You should be able to find all of these fake emails at once:

a@c.ca

1@a.ca

abc-..-123-_-@abc..123-.-.-.ca.org

abc.123@123.abc.org

Notes for this search test: in the search bar (in VS or other text/code editors), make sure to apply/ click on the star `*` to enable regex search. Then copy/paste our regex without the `/` delimiters, just like this: `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`. Also, when you tyoe in your example/fake emails, make sure that they are on a line of their own, and not a part of another; they need to be alone on the line/string. That is it, happy testing!

## Author

This tutorial was written by `ThatOneMHMD`. Feel free to check out my [GitHub profile](https://github.com/ThatOneMHMD) for more tutorials and projects.

## Thank you

I hope you learned something useful from this. Thanks for tuning in, this has been a pleasure!
