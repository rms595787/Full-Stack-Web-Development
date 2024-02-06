# Partials

### Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files. You can create small files with CSS snippets to include in other Sass files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc.

### 👇 The @import directive allows you to include the content of one file in another.
### 👇 EX - import "_body.scss";

### 👇 To create partials/snippets for scss we need to create name of file starting with '_' (underscore)
### 👇 EX - _body.scss, _header.scss, etc.

#### 👇 In SCSS (Sass), partials are typically files that contain reusable chunks of styles and are meant to be included in other SCSS files. To define a partial in SCSS in two lines, you would create a file with a name starting with an underscore (e.g., _partial.scss) and then write some SCSS rules:

#### 👇 Note: Partial files in SCSS are usually prefixed with an underscore and do not produce standalone CSS files when compiled. They are meant to be imported into other SCSS files.
```scss
@import "variables";
@import "colors";
@import "reset";
```