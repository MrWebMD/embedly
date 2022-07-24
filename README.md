# Embedly

Embedly is a website that allows you to create embeds that can be sent on a variety of platforms. It was meant to be a fun way to create embeds that could be shared with friends. Embedly will give you a link to share when you're done customizing. Imagine making an embed thats looks like a youtube video embed or from some other popular platform on the fly. If it interest you, you can visit the [live website](http://embedly.mrwebmd.com), or perform this easy set up.

## Installation

Navigate to the root folder of the project and use the node package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install all node dependencies.

```bash
npm install
```

## Environment
Embedly requires that a file named `.env` exists in the root directory of the project. Create a file named `.env` located at `/embedly/.env`. Next, replace the contents of the file with the template below.

```
DB_USER=production
DB_PASS=YOURDBPASSWORD
NODE_ENV=production
PORT=3002
```
Once you've saved this, your environment is all set up!

## Usage
```
node index.js
```

## License
[MIT](https://mit-license.org/)