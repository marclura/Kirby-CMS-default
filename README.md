# KIRBY CMS default setup

The website is built with [Kirby CMS](https://getkirby.com/) and [Stylus](https://stylus-lang.com/) language for the css.

# Environment setup

1. Install [Node.js](https://nodejs.org)
2. Install all the packages listed in `package.json` by running `$ npm install` in the terminal

# Local server

Start the local server by running `gulp` in the terminal

# Dev only

Install packages: `$ npm install package --save-dev`

Remove packages: `$ npm uninstall package --save-dev`

# Install the panel and debug

To access the panel, go to yoururl/panel. To install the panel and activate the debug mode, you need to activate them in `site/config/config.php` as following:

```
<?php

return [
  'debug' => true,
  'panel' =>[
    'install' => true
  ]
];

?>
```

When you deploy the website online, set them both to `false`

# Kirby CMS update

Download the [Kirby CMS Plainkit](https://github.com/getkirby/plainkit?tab=readme-ov-file) and override the current `kirby` foder with the new one to update Kirby CMS to the latest version.

# PHP 8.1

In the local env requires to install those this via terminal:

`sudo apt install php8.1-mbstring`