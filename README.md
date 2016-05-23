# Gulp Example

> A sample gulpfile for teaching Gulp to students.

## Installation and setup

Because this is meant for students we want to keep this as simple as possible. Let's start with system requirements:

- Node.js 4.0+
- Gulp

Before you begin you'll need to install the global dependencies. Run these commands to set yourself up for success:

```
npm install -g gulp-cli
```

### Installation

Just run `npm install`

## Usage

The project comes with 3 main gulp tasks:

1. `server` - Starts a local server
2. `less` - Compiles LESS files to CSS
3. `jshint` - Runs JSHint on all JavaScript files
4. `watch` - Watches all static assets for changes and runs one of the above tasks based on file type

The default task runs `watch` and `server` consecutively. This will leave you with a web server that automatically transpiles and lints your code. To use the default task simply run `gulp`.
