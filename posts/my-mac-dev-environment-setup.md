---
id: 2
title: My Mac Dev Environment Setup
description: I've recently started a new job where I've had to setup a Macbook for the first time ever. Here's everything I use on my Mac for fullstack web development.
date: August 03 2021
---

## Foreword

Recently I've started a new job and have been given a Macbook for my
development machine. Given that I've never developed on a Mac before, I thought
it would be a good idea to document my full stack web development environment
setup to help future Josh and anyone else out there in a similar boat.

> **NOTE:** This is a _highly_ opinionated guide on setting up Mac's for full
> stack web development. By no means is this the correct way for _everyone_.

## Contents

The setup will cover the following content:

- [Terminal](#terminal)
  - [Alacritty](#alacritty)
  - [Homebrew](#homebrew)
  - [Git](#git)
  - [zsh](#zsh)
- [IDE - Neovim](#ide---neovim)
- [Desktop Apps](#desktop-apps)
- [CLIs](#clis)
- [Links][#links]

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
configuration is managed by a [yaml][yaml] file. As a result, your
configuration can be version controlled and easily replicated between machines!

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

zsh, like `bash`, is configured via an `rc` file, specifically the `~/.zshrc`
file. This is the file that specifies all the run commands when your terminal
starts.

Whilst my `~/.zshrc` contains a lot of things I've written myself (like
aliases), I leave _most_ of the management of the theme and power
user-related configration to a framework called [Oh My Zsh][ohmyzsh]. Oh My
Zsh, is an open souce, community-driver framework that bootstraps a lot of
great 10x developer configuration for zsh.

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

Lastly, lets install some _useful_ plugins that add some further cap to
zsh:

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

## IDE - Neovim

blah

## CLIs

## Desktop Apps

Here are some useful desktop apps that I could not live without:

### Alfred

The popular power user quick launch tool for macOS, allowing you to do almost
anything on your mac via hotkeys. I'm a big fan of minimising mouse usage and
improving efficiency where possible. [Alfred][alfred] lets me do just that.

![my terminal](https://josh-wheeler-media.s3.eu-west-2.amazonaws.com/my-mac-dev-environment-setup/alfred.png)

```bash
brew install --cask alfred
```

After installing:

1. Disable `Spotlight` to be the default `cmd + space` shortcut. Go to
   `system settings` and uncheck `Spotlight`.
2. Go into `Alfred` and change the shortcut to `cmd + space`.

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

## Links

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
