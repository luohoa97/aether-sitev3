---
title: Welcome to Aether Docs
outline: deep
---

# Welcome to Aether Documentation

::: warning Important
Note, this site isn't finished so the download may lead to a 404
:::

::: tip About Aether
Aether is a lightweight, high-performance programming language inspired by Lua, designed for fast and demanding applications.
:::

## Getting Started

To install Aether, follow the instructions for your operating system:

### 🐧 Linux (Debian/Ubuntu)

```sh
sudo apt update && sudo apt install -y curl build-essential libssl-dev
curl -fsSL https://luohoa97.github.io/aether-site/install.sh | sh
```

### 🐧 Linux (Fedora)

```sh
sudo dnf install -y curl gcc gcc-c++ make openssl-devel
curl -fsSL https://luohoa97.github.io/aether-site/install.sh | sh
```

### 🍏 macOS (Homebrew)

```sh
NOT IMPLEMENTED
```

::: warning Important  
Ensure you have Homebrew installed before running the command above.  
You can install it from [brew.sh](https://brew.sh/).  
:::

### 🖥️ Windows (Scoop)

```powershell
NOT IMPLEMENTED
```

::: warning Important  
Ensure you have [Scoop](https://scoop.sh/) installed before running the command above.  
:::

After installation, verify Aether is installed by running:

```sh
aether --version
