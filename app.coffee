axis = require 'axis'
rupture = require 'rupture'
# autoprefixer = require 'autoprefixer-stylus' #using postcss instead
# js_pipeline = require 'js-pipeline' #replace with browserify
browserify = require('roots-browserify')
css_pipeline = require 'css-pipeline'
atImport = require('postcss-import')
customProperties = require("postcss-custom-properties")
calc = require("postcss-calc")
customMedia = require("postcss-custom-media")
autoprefixer = require('autoprefixer')
#bemLinter = require('postcss-bem-linter')
#rucksack = require('rucksack-css');
lost = require 'lost'
i18n = require 'roots-i18n'

module.exports =
  ignores: [
    'readme.md',
    '**/layout.*',
    '**/_*',
    '.gitignore',
    'ship.*conf',
    'i18n/*',
    'assets/css/settings/**/*.*',
    'assets/css/components/**/*.*'
  ]

  extensions: [
    #js_pipeline(files: 'assets/js/*.js'),
    browserify(files: ['assets/js/main.coffee', 'assets/js/fontDetect.js'], out: 'js/build.js'),
    css_pipeline(files: 'assets/css/*.styl', 'assets/css/*.css', postcss:true),
    i18n(
      translations: 'i18n/*'
      viewExtension: 'jade'
    )
  ]

  stylus:
    use: [axis(), rupture()] #autoprefixer() using postcss instead
    sourcemap: true
    'include css': true

  postcss:
    use: [
      customProperties(),
      atImport(),
      calc(),
      customMedia(),
      autoprefixer(),
      #bemLinter(),
      #rucksack(),
      lost()
    ]

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
