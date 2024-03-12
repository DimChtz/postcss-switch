# PostCSS Switch [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dimchtz/postcss-switch/test.yml) ![NPM Version](https://img.shields.io/npm/v/postcss-switch) ![NPM Downloads](https://img.shields.io/npm/dw/postcss-switch) ![NPM License](https://img.shields.io/npm/l/postcss-switch)

[PostCSS](https://github.com/postcss/postcss) plugin to switch code in CSS files.

Useful when you have shared css on your project and you need small style differences.

## Installation

```console
npm install postcss-switch
```

## Usage

Example with `gulp` and `tailwindcss`

```js
// gulpfile.js
gulp.task('buildcss', function () {
  return gulp
    .src('./src/main.css')
    .pipe(
      postcss([
        require('postcss-import'),
        require('postcss-switch')({
          switch: process.env.SWITCH
        }),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')()
      ])
    )
  .pipe(gulp.dest('./dist'));
});
```

```css
.my-button {
  display: inline-block;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;

  @switch public {
    background-color: red;
    font-size: 16px;
  }

  @switch admin {
    background-color: blue;
    font-size: 14px;
  }
}
```

When `switch` in gulpfile is `public` the result css will be:

```css
.my-button {
  display: inline-block;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
  background-color: red;
  font-size: 16px;
}
```

When `switch` in gulpfile is `admin` the result css will be:

```css
.my-button {
  display: inline-block;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  color: #fff;
  background-color: blue;
  font-size: 14px;
}
```

How you change switch option in gulpfile is up to you.

### Options

#### `switch`

Type: `String`
Default: `undefined`

The switch name.

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
