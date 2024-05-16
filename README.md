# Statamic Starter Kit
A Statamic starter kit based in Statamic Peak

## Installation instructions

1. run `composer install`
2. run `npm install`
3. Create supersuser
	- run `php please make:user` and follow the instructions
4.  `npm run watch` or `npm run dev` to start the development server

## Compilation errors

### Vite Errors

#### Cannot read properties

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

#### getaddrinfo ENOTFOUND

```bash
error when starting dev server:
Error: getaddrinfo ENOTFOUND <local-url.localhost>
at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:69:26)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
```

**Solution**

Vite does not recognize "localhost" (or the local server name you are using)

You need to first bind that host to 127.0.0.1 or the public IP of your own machine in `/etc/hosts`.


### Valet Error

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


## Site errors

### 403 Forbidden

The home page is not loading and the error is 403 Forbidden. 
Check that the swerver configuration is pointing to the correct folder: `public` 


## Additional commands

### Clear cache and static files

```bash
php please stache:clear
php please static:clear
php please cache:clear
php artisan cache:clear
```
Reference to [Statamic Cache](https://statamic.dev/static-caching#by-force)

## Environment file contents (*.env* file)


### Local

Dump your .env values here with sensitive data removed. The following is a local example that uses file caching:

```env
APP_NAME="<project-name>"
APP_ENV=local
APP_KEY="base64:XORaj66Nw/Ikq7MdCVXKWKn10JRxRfyn8ZvFitH9B+s="
APP_DEBUG=true
APP_URL="http://<project-slug>.localhost"

DEBUGBAR_ENABLED=false

LOG_CHANNEL=stack

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_DATABASE=
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=0.0.0.0
MAIL_PORT=1025
MAIL_USERNAME=testuser
MAIL_PASSWORD=testpwd
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

IMAGE_MANIPULATION_DRIVER=imagick

STATAMIC_LICENSE_KEY=
STATAMIC_THEME=business

STATAMIC_API_ENABLED=true
STATAMIC_REVISIONS_ENABLED=false

STATAMIC_GIT_ENABLED=false
STATAMIC_GIT_PUSH=false
STATAMIC_GIT_DISPATCH_DELAY=5

SAVE_CACHED_IMAGES=true
STATAMIC_CACHE_TAGS_ENABLED=false
STATAMIC_STACHE_WATCHER=true
STATAMIC_STATIC_CACHING_STRATEGY=null

INSTAGRAM_APP_ID=6844179145661598
INSTAGRAM_APP_SECRET=111f20b3cc9ac08697328008aa7cf39d

#STATAMIC_CUSTOM_CMS_NAME=
#STATAMIC_CUSTOM_LOGO_OUTSIDE_URL=
STATAMIC_CUSTOM_LOGO_OUTSIDE_URL="/visuals/<project-logo>.svg"
#STATAMIC_CUSTOM_FAVICON_URL=
#STATAMIC_CUSTOM_CSS_URL=
```

### Production

Dump your .env values here with sensitive data removed. The following is a production example that uses full static caching:

```env
APP_NAME="<project-name>"
APP_ENV=production
APP_KEY="base64:XORaj66Nw/Ikq7MdCVXKWKn10JRxRfyn8ZvFitH9B+s="
APP_DEBUG=false
APP_URL="<project-url>"

DEBUGBAR_ENABLED=false

LOG_CHANNEL=stack

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=redis
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_DATABASE=
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.postmarkapp.com
MAIL_PORT=587
MAIL_ENCRYPTION=tls
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME="${APP_NAME}"

IMAGE_MANIPULATION_DRIVER=imagick

STATAMIC_LICENSE_KEY=
STATAMIC_THEME=business

STATAMIC_API_ENABLED=false
STATAMIC_REVISIONS_ENABLED=false

STATAMIC_GIT_ENABLED=true
STATAMIC_GIT_PUSH=true
STATAMIC_GIT_DISPATCH_DELAY=5

STATAMIC_STATIC_CACHING_STRATEGY=full
SAVE_CACHED_IMAGES=false
STATAMIC_STACHE_WATCHER=false
STATAMIC_CACHE_TAGS_ENABLED=true

#STATAMIC_CUSTOM_CMS_NAME=
STATAMIC_CUSTOM_LOGO_OUTSIDE_URL="/visuals/<project-logo>.svg"
#STATAMIC_CUSTOM_LOGO_NAV_URL=
#STATAMIC_CUSTOM_FAVICON_URL=
#STATAMIC_CUSTOM_CSS_URL=
```

## NGINX config

If you have a NGINX server, use these instructions for the configuration file

Add the following to your NGINX config __inside the server block__ to enable static resource caching:
```
expires $expires;
```

And this __outside the server block__:
```
map $sent_http_content_type $expires {
	default off;
	text/css max;
	~image/ max;
	application/javascript max;
	application/octet-stream max;

}
```



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