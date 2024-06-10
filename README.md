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

All the assets, including vector images, are protected under the copyright laws,
and you should remove them if you want to fork this project and use it for your
own.

