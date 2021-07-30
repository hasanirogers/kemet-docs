# FDS Documentation


## Prerequisites

You'll need the following installed on your machine before continuing with this guide.

* ruby v 2.1.0+
* gem v 2.x
* node v 12+

Run `ruby -v`, `node -v`, and `gem -v` to check if you have the prerequisites installed.


## Installation

### First-time Installations

You only need to run these commands your first time installing the app on your local. Be sure to run all the commands in this (/docs) directory.

1. Install bundler. `gem install bundler`
You may need to use `sudo` on off any VPNs for this to work.

2. Install Jekyll and other dependencies `bundle install --path vendor/bundle` 
This is similar to an `npm install`.

3. Install node modules `npm install`

### Build App

Run the following commands:

1. `npm start` - This will build all assets and run Jekyll with a watcher.

2. `npm run watch` - Run this in another tab and webpack will watch for its assets changes.

You should now be able to preview the site at http://localhost:4000.
