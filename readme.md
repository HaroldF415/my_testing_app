# Express.js

This app will help me take a deeper look into the Express.js framework. I will be looking at the documentation and following along with their tutorials. I will also be looking at other resources to help me understand the framework better.

The documentation can be found here: https://expressjs.com/en/starter/installing.html

## Installation

```bash
mkdir my_testing_app
cd my_testing_app
```

The documentation then also says to run the following command:

```bash
npm init -y
```

This command will create a package.json file. This file will contain all the dependencies for the project. The -y flag will skip the prompts and just create the file.

The only difference I see from this command and the one used in class is that in class we use:

```bash
npm init
```

This command will prompt you for the information needed to create the package.json file. The command used in class does allow you to designate a `main` file, as opposed to when we use the `-y` flag. Which defaults main to be `index.js`.

For the purposes of class we will declare the main file as `app.js`. But let's continue with the `express.js` documentation.

The next step is to install `express.js` into our project. We can easily accomplish this by running the command below:

```bash
npm install express --save
```

In the command above we see a different flag: `--save`.

The `--save` flag will add the dependency to the package.json file. This will allow us to easily install all the dependencies for a project when we clone it down from GitHub in the future in another directory.

The documentation also specifies another command if we wish to install `express.js` temporarily:

```bash
npm install express --no-save
```

Upon reading the fine print in the documentation it states that just running the command:

```bash
npm install express
```

Will install the dependency and add it to the package.json file. This is done by default with npm version 5.0.0 and above. So let's run that command.

To shorten the command even more I found out we can just run:

```bash
npm i express
```

This will literally just do what we want without having to write the whole command or in this case the whole word ... `install`. xD

# Entry Point

In order to combine both the logic of the documentation and the logic learned in class I will do my best to mesh the two together. Our default entry point according to the documentation is `index.js`. But in class we learned that we can change this to `app.js`. So let's do that.

In the `package.json` file we will change the `main` property to be `app.js`.

```json
"main": "app.js"
```

Let's create that file and populate it shall we?

```bash
touch app.js
```

```javascript

```
