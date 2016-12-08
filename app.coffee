axis         = require 'axis'
rupture      = require 'rupture'
# autoprefixer = require 'autoprefixer-stylus' # use postcss/cssnext autoprefixer insted
# js_pipeline  = require 'js-pipeline' # use browserify insted
browserify = require 'roots-browserify'
css_pipeline = require 'css-pipeline'

# node stuff
path = require 'path'

# data stuff
yaml = require 'roots-yaml'
#i18n = require 'roots-i18n' # basic translation mechanism

# css stuff
postcssImport = require 'postcss-import'
cssnext = require 'postcss-cssnext'
rucksack = require 'rucksack-css'
lost = require 'lost'
#postcssFontMagic = require 'postcss-font-magician'
# postcssUnits = require 'postcss-units'


module.exports =
  ignores: [
    'readme.md',
    '**/layout.*',
    '**/_*',
    '.gitignore',
    'ship.*conf',
    'assets/css/components/**/*.*',
    'assets/css/utilities/**/*.*',
    'assets/css/settings/**/*.*'
  ]

  extensions: [
    yaml(),
    #js_pipeline(files: 'assets/js/*.js'),
    browserify(files: ['assets/js/main.coffee'], out: 'js/build.js'),
    css_pipeline(files: 'assets/css/*.styl', 'assets/css/*.css', postcss: true)
  ]

  stylus:
    use: [axis(), rupture()] #use postcss/cssnext autoprefixer
    sourcemap: true
    'include css': true

  postcss:
    use: [
      postcssImport({
        path: [
          path.resolve(__dirname + '/assets/css/utilities'),
          path.resolve(__dirname + '/assets/css/components'),
          path.resolve(__dirname + '/assets/css/settings')
        ]
      }),
      cssnext(),
      rucksack(),
      #postcssFontMagic(),
      lost()
    ]

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
