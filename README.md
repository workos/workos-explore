# demo.workos.com

An example application demonstrating how Magic Link, SSO, and Admin Portal works with WorkOS.

## Clone and Install

Clone this repo and install dependencies:

```sh
git clone https://github.com/workos-inc/demo.workos.com.git && cd demo.workos.com && npm install
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

For more information, see the [WorkOS documentation](https://workos.com/docs).
