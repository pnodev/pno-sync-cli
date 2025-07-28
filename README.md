# pno-sync-cli

A new CLI generated with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pno-sync-cli.svg)](https://npmjs.org/package/pno-sync-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pno-sync-cli.svg)](https://npmjs.org/package/pno-sync-cli)

<!-- toc -->
* [pno-sync-cli](#pno-sync-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @pnodev/sync-cli
$ pno-sync-cli COMMAND
running command...
$ pno-sync-cli (--version)
@pnodev/sync-cli/0.1.0 linux-x64 node-v20.5.1
$ pno-sync-cli --help [COMMAND]
USAGE
  $ pno-sync-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`pno-sync-cli generate-types`](#pno-sync-cli-generate-types)
* [`pno-sync-cli hello PERSON`](#pno-sync-cli-hello-person)
* [`pno-sync-cli hello world`](#pno-sync-cli-hello-world)
* [`pno-sync-cli help [COMMAND]`](#pno-sync-cli-help-command)
* [`pno-sync-cli login`](#pno-sync-cli-login)
* [`pno-sync-cli plugins`](#pno-sync-cli-plugins)
* [`pno-sync-cli plugins add PLUGIN`](#pno-sync-cli-plugins-add-plugin)
* [`pno-sync-cli plugins:inspect PLUGIN...`](#pno-sync-cli-pluginsinspect-plugin)
* [`pno-sync-cli plugins install PLUGIN`](#pno-sync-cli-plugins-install-plugin)
* [`pno-sync-cli plugins link PATH`](#pno-sync-cli-plugins-link-path)
* [`pno-sync-cli plugins remove [PLUGIN]`](#pno-sync-cli-plugins-remove-plugin)
* [`pno-sync-cli plugins reset`](#pno-sync-cli-plugins-reset)
* [`pno-sync-cli plugins uninstall [PLUGIN]`](#pno-sync-cli-plugins-uninstall-plugin)
* [`pno-sync-cli plugins unlink [PLUGIN]`](#pno-sync-cli-plugins-unlink-plugin)
* [`pno-sync-cli plugins update`](#pno-sync-cli-plugins-update)
* [`pno-sync-cli send`](#pno-sync-cli-send)

## `pno-sync-cli generate-types`

Send a payload to a topic channel

```
USAGE
  $ pno-sync-cli generate-types --appId <value> --key <value> [--exportName <value>] [--output <value>]

FLAGS
  --appId=<value>       (required) App ID
  --exportName=<value>  [default: payload] Name of the generated type
  --key=<value>         (required) Public Key
  --output=<value>      [default: stdout] Output target: "stdout" (default) or filename (e.g. types.ts)

DESCRIPTION
  Send a payload to a topic channel
```

_See code: [src/commands/generate-types.ts](https://github.com/files/pno-sync-cli/blob/v0.1.0/src/commands/generate-types.ts)_

## `pno-sync-cli hello PERSON`

Say hello

```
USAGE
  $ pno-sync-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ pno-sync-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/files/pno-sync-cli/blob/v0.1.0/src/commands/hello/index.ts)_

## `pno-sync-cli hello world`

Say hello world

```
USAGE
  $ pno-sync-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ pno-sync-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/files/pno-sync-cli/blob/v0.1.0/src/commands/hello/world.ts)_

## `pno-sync-cli help [COMMAND]`

Display help for pno-sync-cli.

```
USAGE
  $ pno-sync-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pno-sync-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `pno-sync-cli login`

Cli Login for Sync

```
USAGE
  $ pno-sync-cli login

DESCRIPTION
  Cli Login for Sync

EXAMPLES
  $ pno-sync-cli login
```

_See code: [src/commands/login.ts](https://github.com/files/pno-sync-cli/blob/v0.1.0/src/commands/login.ts)_

## `pno-sync-cli plugins`

List installed plugins.

```
USAGE
  $ pno-sync-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pno-sync-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/index.ts)_

## `pno-sync-cli plugins add PLUGIN`

Installs a plugin into pno-sync-cli.

```
USAGE
  $ pno-sync-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into pno-sync-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PNO_SYNC_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PNO_SYNC_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ pno-sync-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ pno-sync-cli plugins add myplugin

  Install a plugin from a github url.

    $ pno-sync-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ pno-sync-cli plugins add someuser/someplugin
```

## `pno-sync-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pno-sync-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pno-sync-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/inspect.ts)_

## `pno-sync-cli plugins install PLUGIN`

Installs a plugin into pno-sync-cli.

```
USAGE
  $ pno-sync-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into pno-sync-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PNO_SYNC_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PNO_SYNC_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ pno-sync-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ pno-sync-cli plugins install myplugin

  Install a plugin from a github url.

    $ pno-sync-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ pno-sync-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/install.ts)_

## `pno-sync-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ pno-sync-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pno-sync-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/link.ts)_

## `pno-sync-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pno-sync-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pno-sync-cli plugins unlink
  $ pno-sync-cli plugins remove

EXAMPLES
  $ pno-sync-cli plugins remove myplugin
```

## `pno-sync-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ pno-sync-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/reset.ts)_

## `pno-sync-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pno-sync-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pno-sync-cli plugins unlink
  $ pno-sync-cli plugins remove

EXAMPLES
  $ pno-sync-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/uninstall.ts)_

## `pno-sync-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pno-sync-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pno-sync-cli plugins unlink
  $ pno-sync-cli plugins remove

EXAMPLES
  $ pno-sync-cli plugins unlink myplugin
```

## `pno-sync-cli plugins update`

Update installed plugins.

```
USAGE
  $ pno-sync-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/update.ts)_

## `pno-sync-cli send`

Send a payload to a topic channel

```
USAGE
  $ pno-sync-cli send --appId <value> --key <value> --topic <value> [--payload <value>]

FLAGS
  --appId=<value>    (required) App ID
  --key=<value>      (required) Public Key
  --payload=<value>  JSON payload to send
  --topic=<value>    (required) Topic-Name

DESCRIPTION
  Send a payload to a topic channel
```

_See code: [src/commands/send.ts](https://github.com/files/pno-sync-cli/blob/v0.1.0/src/commands/send.ts)_
<!-- commandsstop -->
