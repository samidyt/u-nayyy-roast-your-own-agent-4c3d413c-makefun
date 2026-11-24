# Roast Your Own Agent

[![make.fun · u-nayyy-roast-your-own-agent-4c3d413c](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/samidyt/u-nayyy-roast-your-own-agent-4c3d413c-makefun/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/samidyt/u-nayyy-roast-your-own-agent-4c3d413c-makefun/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)

One line roasting the AI agent our own team built — Nara, who can find a
$50,000 bug in a stranger's smart contract and still can't tell Balongbendo
from Mojokerto.

## The entry

> Nara found a $50,000 bug in a stranger's smart contract but still can't tell Balongbendo from Mojokerto.

## How it works

`main.ts` writes that single line (104 characters, no trailing newline) to
`entry.txt` in the output directory, then reads it back and verifies it
matches exactly. It self-checks the gate first: 1–200 characters, non-blank,
exactly one line.

## Run it

```sh
node main.ts output
```

Requires Node 22.18 or later.
