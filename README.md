# sync-cli

The `sync-cli` is the official command-line interface for **Sync**

## Important

For the CLI to work correctly, there **must be a `.env` file in the current working directory containing the environment variable `SYNC_ENGINE_URL`**. This variable specifies the URL of the Sync engine the CLI communicates with. Without it, most commands will not work.

Example `.env` file:

```
SYNC_ENGINE_URL=https://your-sync-engine-url.example.com
```

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [sync-cli](#sync-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @pnodev/sync-cli
$ sync-cli COMMAND
running command...
$ sync-cli (--version)
@pnodev/sync-cli/0.2.0 linux-x64 node-v20.5.1
$ sync-cli --help [COMMAND]
USAGE
  $ sync-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sync-cli generate-types`](#sync-cli-generate-types)
* [`sync-cli help [COMMAND]`](#sync-cli-help-command)
* [`sync-cli send`](#sync-cli-send)

## `sync-cli generate-types`

Send a payload to a topic channel

```
USAGE
  $ sync-cli generate-types --appId <value> --key <value> [--exportName <value>] [--output <value>]

FLAGS
  --appId=<value>       (required) App ID
  --exportName=<value>  [default: payload] Name of the generated type
  --key=<value>         (required) Public Key
  --output=<value>      [default: stdout] Output target: "stdout" (default) or filename (e.g. types.ts)

DESCRIPTION
  Send a payload to a topic channel
```

_See code: [src/commands/generate-types.ts](https://github.com/pnodev/pno-sync-cli/blob/v0.2.0/src/commands/generate-types.ts)_

## `sync-cli help [COMMAND]`

Display help for sync-cli.

```
USAGE
  $ sync-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sync-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `sync-cli send`

Send a payload to a topic channel

```
USAGE
  $ sync-cli send --appId <value> --key <value> --topic <value> [--payload <value>]

FLAGS
  --appId=<value>    (required) App ID
  --key=<value>      (required) Public Key
  --payload=<value>  JSON payload to send
  --topic=<value>    (required) Topic-Name

DESCRIPTION
  Send a payload to a topic channel
```

_See code: [src/commands/send.ts](https://github.com/pnodev/pno-sync-cli/blob/v0.2.0/src/commands/send.ts)_
<!-- commandsstop -->
