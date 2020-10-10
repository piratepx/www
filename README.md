<h1 align="center">🏴‍☠️<br /><br />piratepx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;website</h1>

The website at https://www.piratepx.com. Built with
[11ty](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

piratepx is a simple, privacy-respecting, no cookie, zero JavaScript, 35 byte
counter pixel for websites, mobile apps, server-side APIs, CLIs, and just about
anywhere else.

Sign up for free at https://www.piratepx.com!

## Development

The following includes the necessary steps to get setup for development. For
11ty-specific details, see their [docs](https://www.11ty.dev/docs/).

### Prerequisites

The only prerequisite is a compatible version of [Node.js](https://nodejs.org/)
(see `engines.node` in [`package.json`](package.json)).
[nvm](https://github.com/nvm-sh/nvm) is the recommended installation method:

```bash
$ nvm install
```

### Dependencies

Install dependencies with npm:

```bash
$ npm install
```

### Start

Start the development server:

```bash
$ npm run dev
```

### Code Style

[Prettier](https://prettier.com/) is setup to enforce a consistent code style.
It's highly recommended to
[add an integration to your editor](https://prettier.io/docs/en/editors.html)
that automatically formats on save.

To run via the command line:

```bash
$ npm run lint
```

## Releasing

After development is done in the `development` branch and is ready for release,
it should be merged into the `master` branch, where the latest release code
lives. [Release It!](https://github.com/release-it/release-it) is then used to
interactively orchestrate the release process:

```bash
$ npm run release
```

### Production Build

The production-optimized static site can be built by running:

```bash
$ npm run build
```

This creates a `dist` directory with the files.
