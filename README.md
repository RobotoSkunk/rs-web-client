# robotoskunk.com - Web Client
This is the web client of my personal website
[robotoskunk.com](https://robotoskunk.com) made with React.js.

If you find something you think I should fix or improve, please open an issue
and I'll review it!

## Installation
Install the client side is pretty easy, all you have to do is install all the
dependencies first:

```bash
npm i
```

Then, run the build script.

```bash
npm run build
```

And run the project.

```bash
npm run start
```

### PM2
If you want to use PM2, duplicate the `example.config.js`, rename it to
`ecosystem.config.js` and configure it to your needs.

```bash
cp example.config.js ecosystem.config.js
```

Then, just simply start the PM2 daemon.

```bash
pm2 start
```


## Copyright
The source code of this project is licensed under the
[GNU Affero General Public License v3.0](LICENSE).

All the assets, including vector images and excluding third party assets, are
protected under the copyright laws, and you should remove them if you want to
fork this project and use it for your own.

### Third-party assets
The Roboto and Roboto Condensed fonts are licensed under the
[SIL OPEN FONT LICENSE](https://openfontlicense.org/open-font-license-official-text/)
by the [Roboto Project Authors](https://github.com/googlefonts/roboto-classic).

The Roboto Mono font is licensed under the
[SIL OPEN FONT LICENSE](https://openfontlicense.org/open-font-license-official-text/)
by Christian Robertson.

The PayPal logo is a protected trademark of
[PayPal Holdings, Inc.](https://www.paypal.com)

The Stripe logo is a protected trademark of [Stripe, Inc.](https://stripe.com)

The Ko-fi logo is a protected trademark of [Ko-fi Labs](https://ko-fi.com).

The Twemoji assets are licensed under the
[MIT License](https://github.com/jdecked/twemoji/blob/main/LICENSE) by the
[Twemoji Authors](https://github.com/jdecked/twemoji).
