# Statamic Starter Kit
A Statamic starter kit based in Statamic Peak

## Installation instructions

1. run `composer install`
2. run `php please make:user`
3. run `npm i` && `npm run dev`

## Environment file contents

### Development

```env
Dump your .env values here with sensitive data removed.
```

### Compilation errors

#### Vite Error

If there is a Vite Error when running
```bash
➜  npm run build

> build
> vite build

failed to load config from /data/webs/artform.localhost/vite.config.js
error during build:
TypeError: Cannot read properties of undefined (reading 'startsWith')
```

**Solution**

It can be due a wrong value in .env
`APP_URL="http://wrongsite.co.uk"`

Or a wrog hot file in public, in that case delete it
```bash
rm public/hot
```

#### Valet Error

```bash
➜ npm run watch

> watch
> vite

error when starting dev server:
Error: Unable to find Valet certificate files for your host [artform.localhost]. Ensure you have run "valet secure".
```

**Solution**

This is becasue the local server has a SSL certificate not recognizable by Laravel. Probably the server is managed by MAMP and Laravel was expecting Valet.

In that case simply remove the SSL from youyr local server and use HTTP instead of HTTPS.

## [Statamic Peak](https://github.com/studio1902/statamic-peak#start-out-on-top)

Peak is your personal development sherpa. It's an opinionated starter kit for all your Statamic sites. It's design agnostic but comes bundled with tools like Tailwind CSS and AlpineJS and a workflow you can use to build anything you want. Peak features a page builder, a rich collection of starter templates, fieldsets, blueprints, SEO functionality, configuration and more to get you started on your clients' site straight away. Peak is easy to extend or edit to fit your clients' website needs and will drastically improve your development speed.

The aim of Peak is to make it easy to start new projects as they often share much of the same principles. Whether you're new to Statamic or a veteran, there will be something interesting in here for you. Please participate and discuss on how to make our websites better.

Maintaining Peak demands a lot of my time and it probably saves you a lot. Your sponsoring would mean a great deal to me as it makes it much easier for me to maintain this project and keep improving it. [Sponsor me](https://github.com/sponsors/studio1902).

[Read the docs](https://peak.1902.studio).

### [Contributing](https://github.com/studio1902/statamic-peak#contributing)

Contributions and discussions are always welcome, no matter how large or small. Treat each other with respect. Read the [Code of Conduct](https://github.com/studio1902/statamic-peak/blob/main/.github/CODE_OF_CONDUCT.md).

Read more about [how you can contribute](https://peak.1902.studio/other/contributing.html) here.

### [License](https://github.com/studio1902/statamic-peak#license)

Statamic Peak is licensed under the GNU General Public License v3.0. Please see [License File](https://github.com/studio1902/statamic-peak/blob/main/LICENSE.md) for more information. Statamic itself is commercial software and has its' own license.



## Copyright and License

[](https://github.com/pablorica/wordpress_codigo_theme#copyright-and-license)

Copyright 2024 Statamic Starter Kit released under the [MIT](https://github.com/pablorica/citysuburban/blob/main/LICENSE) license.

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/) for versioning. 

### Changelog


```
0.1.31
   Added custom variants 'mobile-only', 'tablet-only'and 'mbtb-only' (mobile and tablet only)

0.1.30
    Updated "About Us" page with background colours

0.1.29
    Default size set to maximum for column element in all viewports

0.1.28
    Added scrolldown button antler

0.1.27
    Updated "About Us" page with collapsible section

0.1.26
    Added collapsed sections

0.1.25
    Added viewports to sections and columns

0.1.24
    Fixed Livewire filters.

0.1.23
    Fixed wrong taxonomy slug in Livewire class.

0.1.22
    Updated README.md. The versioning is now in the GIT tags.

0.1.21
    Updated gitignore. The content folder is on the repository again

0.1.20
    Updated "About Us" page with more video examples

0.1.19
    Updated Video Antlers

0.1.18
    Added slugify to section slug to avoid JS errors

0.1.17
    Updated README.md

0.1.16
    Added resources/views/typography/_figcaption.antlers.html

0.1.15
    Updated Video

0.1.14
    Added "tiny-slider": "^2.9.4"

0.1.13
    Added "photoswipe": "^5.4.0" and "photoswipe-dynamic-caption-plugin": "^1.2.7"

0.1.12
    Added "@csstools/postcss-oklab-function": "^3.0.1"

0.1.11
    Updated gitignore

0.1.10
    CSS style changed to allow embed videos from Youtube or Vimeo to adapt to any aspect ratio.

0.1.9
    Adding Video block

0.1.8
    First copy of the Statamic Peak theme

```