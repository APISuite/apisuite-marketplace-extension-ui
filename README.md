# apisuite-marketplace-extension-ui

## About

This repo contains the UI extension of the APISuite Portal Marketplace Extension.

## Installing

This package is hosted on GitHub instead of the npm registry because it's a private API Suite extension.

To install it, make sure your GitHub SSH keys are correctly set up and run the following command with the latest version at the end:

```
npm i --save-dev github:APISuite/apisuite-marketplace-extension-ui#v1.0.0
```

Then, to make sure the API Suite Portal has all `node_modules` correctly installed, run:

```
npm install
```

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

or, to watch the project for changes and rebuilding it:

```
npm run build:watch
```

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Release a new version

To release a new version use [npm's version command](https://docs.npmjs.com/cli/version).

For instance, to create a patch release, run:

    npm version patch

This will build the project, increment the version's patch field, commit these new changes and tag the commit.

Then, don't forget the push the repo and the tags:

    git push && git push origin --tags

### Installing Component Library Locally

While developing the extension, you might want to test it in the APISuite portal. You can install it there with

```
npm i --save-dev "../../apisuite-marketplace-extension-ui/dev-symlink-target"
```

The reason for referencing the `dev-symlink-target` folder is because itself references only the `package.json` file and the `build` folder. It leaves the `node_modules` folder out which allows us to use the same React instance that is installed by the APISuite portal for both the portal and the extension.

Then, to make sure the API Suite Portal has all `node_modules` correctly installed, run:

```
npm install
```
