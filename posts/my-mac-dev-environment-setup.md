---
id: 2
title: My Mac Dev Environment Setup
description: I've recently started a new job where I've had to setup a Macbook for the first time ever. Here's everything I use on my Mac for fullstack web development.
date: August 03 2021
---

## Foreword

Given that I've never developed on macOS before, I thought it would be a good
idea to document my full stack web development environment setup to help future
Josh and anyone else out there.

> **NOTE:** This is a _highly_ opinionated guide on setting up Mac's for full
> stack web development. By no means is this the correct way for _everyone_.

## Contents

- [General Settings](#general-settings)
- [Terminal](#terminal)
  - [Alacritty](#alacritty)
  - [Homebrew](#homebrew)
  - [Git](#git)
  - [zsh](#zsh)
  - [tmux](#tmux)
- [IDE - Neovim](#ide---neovim)
- [Desktop Apps](#desktop-apps)
- [CLIs](#clis)
- [Useful Links](#useful-links)

## General Settings

Before getting into any development-specific setup, let's first customise some
system and other settings:

- Acquire some additional screen real estate by getting rid of the app dock:
  - Go to `System Settings -> Dock & Menu Bar` and do the following:
  - Set `Position on Screen` to `Right`
  - Move the dock size slider to the smaller side
  - Untick `Show recent applications in Dock`
  - Tick `Automatically hide and show the Dock`
- Disable `Spotlight` to be the default `⌘ + space` shortcut. We will later
  be calling Alfred with this shortcut:
  - Go to `System Settings -> Keyboard shortcuts`
  - Untick `Show Spotlight search` for `⌘ + space`
- Disable Ask Siri
- Disable track pad natural scroll direction
  - Go to `System Settings -> Trackpad -> Scroll & Zoom`
  - Untick `Scroll direction: Natural`
- Finder
  - `Finder -> Preferences -> Show all file name extensions`
  - `⌘ + shift + .` to show dotfiles
  - Remove unrequired favourites in sidebar.

## Terminal

The terminal is probably the most critical part of any developer's machine.
It's what we spend most of our day in. So it's important that I use one that
is relibable, fast and highly customisable.

### Alacritty

The terminal that ticks all the boxes for me is definitely
[Alacritty][alacritty]. Alacritty markets itself as a modern, fast,
cross-platform GPU-accelerated terminal emulator.

> Yes, I have tried [iTerm2][iterm], but honestly it just felt a bit clunky and
> too memory hungry. I also wasn't a fan of the awkward tmux integration built
> into it.

For me personally, one of the best features of Alacritty is that all the
configuration is managed by a [yaml][yaml] file. As a result, the configuration
can be version controlled and easily replicated between machines!

To install Alacritty, simply follow the instructions on the [repo][al-install].
Once it is installed, create an `alacritty.yml` file:

```bash
vim ~/.config/alacritty/alacritty.yml
```

Then copy across my [alacritty.yaml][my-yaml] configuration:

### Homebrew

Package managers _simplify_ installing, updating and removing software on the
operating system, therefore it's critical to have one. [Homebrew][brew] is the
most popular package manager for macOS. For thos coming from a Linux (Debian)
background, Homebrew is essentially just the mac equivalent of `apt`.

> I pretty much use `brew` to install _everything_ I use.

Before installing Homebrew, the **Command Line Developer Tools for Xcode** will
need to be installed. Essentially, these tools provide a bunch of build tools,
compilers etc. that Homebrew will need. To install these, run:

```bash
xcode-select --install
```

Once that is done, install Homebrew by running the command on their homepage:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

To verify if the Homebrew installed correctly, run:

```bash
brew doctor
```

### Git

Although macOS comes with a pre-installed version of [git][git], I recommend
installing git via Homebrew. This allows for easy version upgrades in the
future without messing with the system default version.

```bash
brew install git
```

Run the command below to verify that git installed and you are now using the
Homebrew installed git at `/usr/local/bin/git`:

```bash
which git
```

> **NOTE:** it is a common pattern to install software that comes pre-installed
> with macOS via Homebrew to better manage your software versions.

My [~/.gitconfig][git-cfg] is fairly minimal, however I do add some
configuration to support a nicer `git diff` command using [delta][delta]. I will
talk about delta in more depth in the [CLIs](#clis) section.

### zsh

It is also critical that the shell I'm using provides a great developer
experience. After all, I do spend most of my day in the terminal, so I want a
setup that provides efficiency _and_ visual aesthetics. This is where [zsh][zsh]
or 'Z shell' comes in.

For macOS v10+, zsh _is_ the default shell. However, if for some reason it's
not, install it by running:

```bash
brew install zsh
```

Whilst my `~/.zshrc` contains a lot of things I've written myself, like aliases
(future blog coming on this), I leave _most_ of the management of the theme and
power user-related configration to a framework called [Oh My Zsh][ohmyzsh]. Oh
My Zsh, is an open souce, community-driver framework that bootstraps a lot of
great configuration out of the box.

To install Oh My Zsh, run:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Then, to go one step further, I use [Powerlevel10k][p10k] to make configuring
Oh My Zsh even easier. To install, run:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

After it has installed, enable the powerlevel10k theme in your `~/.zshrc` file,
by specifying `ZSH_THEME="powerlevel10k/powerlevel10k"`.

Then ensure to install the recommended [MesloLGS NerdFont][font]. This font
allows glyphs and symbols used by Powerlevel10k to appear in the terminal.

Once the font is installed and setup correctly, run the following command and
follow the P10k prompts to select the desired appearance:

```bash
p10k configure
```

The terminal should now look nice and beautiful, and resemble something like
the image below.

![my terminal](https://josh-wheeler-media.s3.eu-west-2.amazonaws.com/my-mac-dev-environment-setup/zsh-p10k.png)

Lastly, lets install some _useful_ plugins that further extend zsh's
capabilities:

```bash
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zsh-users/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-zsh-autosuggestions
```

Then, in the `~/.zshrc`, add the plugins:

```bash
# ~/.zshrc
...
plugins=(git colored-man-pages zsh-syntax-highlighting zsh-autosuggestions)
...
```

Source your `~/.zshrc` file for the changes to take effect:

```bash
source ~/.zshrc
```

### tmux

[tmux][tmux] is a terminal multiplexer, letting you switch between several
programs and sessions within one terminal. It has a bit of a learning curve,
but I can't imagine life without it.

Install tmux by running

```bash
brew install tmux
```

Then install the [Tmux Plugin Manager][tpm] to manage installing plugins for
you tmux setup:

```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

Plugins can now easily be added into the `~/.tmux.conf` file with the `set -g @plugin '...'` comand. To install the plugin, simply just save the file and run
the `tmux prefix + I` to fetch and install the plugin.

My [~/.tmux.conf][tmuxc] contains all the configurations and plugins I use. The
plugins and confiugration are mostly based around the status bar and vim
integration.

## IDE - Neovim

[Neovim][nvim] is a modern fork of vim with a great community backing. It is a
lot quicker than vim and also provides other advantages such as better
configuration and now an inbuilt LSP.

```bash
# To install latest stable build
brew install neovim

# To install development version (v0.5 at time of writing)
brew install --HEAD luajit
brew install --HEAD neovim
```

At the time of writing, I'm still using [CoC.vim][coc] for the language server
and vscode-like snippets. But, I have intentions of migrating to the out of box
LSP provided in `neovim v0.5`.

Install [vim-plug][vplug] to manage plugin installation:

```bash
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

Create a `~/.config/nvim/init.vim` and a `~/.config/nvim/coc-settings.json` file
and copy across my [init.vim][vimrc] and [coc-settings.json][coc-settings].

## CLIs

A bunch of software I use almost on a daily basis in the terminal:

- [Docker][docker] - although Docker Desktop is technically a desktop app, I
  only use docker via the terminal.
- [nvm][nvm] - Node version manager for managing multiple node version

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh
```

Then add to you `~/.zshrc` file:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

> _NOTE:_ I'm currently looking into switching from nvm to [volta](https://volta.sh/)

- [bat][bat] - A cat clone with syntax highlighting and Git integration:
  - `brew install bat`
- [delta][delta] - A viewer for git and diff output:
  - `brew install delta`
- [broot][broot] - A new way to see and navigate directory trees:
  - `brew install broot`
- [ripgrep][rgrep] - ripgrep recursively searches directories for a regex pattern while respecting your gitignore:
  - `brew install ripgrep`
- [fzf][fzf] - A general purpose command-line fuzzy finder:
  - `brew install fzf && $(brew --prefix)/opt/fzf/install`
- [ranger][ranger] - A VIM-inspired filemanager for the console:
  - `brew install ranger`
- [glances][glances] - Glances an Eye on your system. A top/htop alternative:
  - `brew install glances`

## Desktop Apps

Here are some useful desktop apps that I could not live without:

### Alfred

The popular power user quick launch tool for macOS, allowing you to do almost
anything on your mac via hotkeys. I'm a big fan of minimising mouse usage and
improving efficiency where possible. [Alfred][alfred] lets me do just that.

![Alfred screenshot](https://josh-wheeler-media.s3.eu-west-2.amazonaws.com/my-mac-dev-environment-setup/alfred.png)

```bash
brew install --cask alfred
```

After installing, go into `Alfred` and change the shortcut to `⌘ + space`.

### Spectacle

Window manager that allows you to resize and move windows via keyboard
shortcuts.

```bash
brew install --cask spectacle
```

### iGlance

iGlance is a small system monitor that displays current stats (e.g. CPU,
memory, temp) about your Mac on the menu bar

```bash
brew install --cask iglance
```

### Brave

Fast, private and secure chromium-based browser with great development tool
support. Need I say more?

```bash
brew install --cask brave-browser
```

## Useful Links

- [dotfiles][dotfiles] - all my dotfile configurations for easy reference
- [Modern Unix](https://github.com/ibraheemdev/modern-unix) A collection of modern/faster/saner alternatives to common unix commands.
- Other good setups documents / repos:
  - [Coding Garden - Setting up a Mac for Web Dev 2020](https://youtu.be/tmnopaqrfae)
  - [nicolashery/mac-dev-setup](https://github.com/nicolashery/mac-dev-setup)
  - [Kent C Dodds Uses](https://kentcdodds.com/uses/)
  - [The Primeagen dotfiles](https://github.com/theprimeagen/.dotfiles)
  - [swyx mac dev setup 2021](https://www.swyx.io/new-mac-setup-2021/)

<!--- MARKDOWN LINKS -->

[iterm]: https://iterm2.com/
[alacritty]: https://github.com/alacritty/alacritty
[yaml]: https://github.com/alacritty/alacritty/blob/master/alacritty.yml
[my-yaml]: https://github.com/jltwheeler/dotfiles/blob/mac-dev-env/.config/alacritty/alacritty.yml
[al-install]: https://github.com/alacritty/alacritty/blob/master/INSTALL.md
[brew]: https://brew.sh/
[git]: http://git-scm.com/
[delta]: https://github.com/dandavison/delta
[git-cfg]: https://github.com/jltwheeler/dotfiles/blob/mac-dev-env/.gitconfig
[zsh]: https://www.zsh.org/
[alfred]: https://www.alfredapp.com/
[ohmyzsh]: https://github.com/ohmyzsh/ohmyzsh
[p10k]: https://github.com/romkatv/powerlevel10k
[font]: https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k
[dotfiles]: https://github.com/jltwheeler/dotfiles/tree/mac-dev-env
[tmux]: https://github.com/tmux/tmux/wiki
[tpm]: https://github.com/tmux-plugins/tpm
[tmuxc]: https://github.com/jltwheeler/dotfiles/blob/mac-dev-env/.tmux.conf
[nvim]: https://github.com/neovim/neovim
[coc]: https://github.com/neoclide/coc.nvim
[vplug]: https://github.com/junegunn/vim-plug
[coc-settings]: https://github.com/jltwheeler/dotfiles/blob/mac-dev-env/.config/nvim/coc-settings.json
[vimrc]: https://github.com/jltwheeler/dotfiles/blob/mac-dev-env/.config/nvim/init.vim
[docker]: https://docs.docker.com/docker-for-mac/install/
[bat]: https://github.com/sharkdp/bat
[broot]: https://github.com/Canop/broot
[rgrep]: https://github.com/BurntSushi/ripgrep
[fzf]: https://github.com/junegunn/fzf
[nvm]: https://github.com/nvm-sh/nvm
[ranger]: https://github.com/ranger/ranger
[glances]: https://github.com/nicolargo/glances
