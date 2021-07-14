# nextjs-magic-link-example

An example application demonstrating how Magic Link works with WorkOS and Next.js.

## Preview

> [See live example](https://nextjs-magic-link-example.vercel.app)

[![Preview](https://user-images.githubusercontent.com/398893/125538276-ec6a4574-a9ce-42a1-aee0-a2c85ebcf85a.png)](https://nextjs-magic-link-example.vercel.app)

## Clone and Install

Clone this repo and install dependencies:

```sh
git clone https://github.com/workos-inc/nextjs-magic-link-example.git && cd nextjs-magic-link-example && npm install
```

## Configure your environment

1. Grab your [API Key](https://dashboard.workos.com/api-keys).
2. Create the `.env` file.
3. Replace the `$YOUR_API_KEY` value.

```sh
WORKOS_API_KEY=$YOUR_API_KEY
WORKOS_CLIENT_ID=$YOUR_CLIENT_ID
```

## Run the server locally

```sh
npm run dev
```

For more information, see the [WorkOS Magic Link documentation](https://workos.com/docs/reference/magic-link).
