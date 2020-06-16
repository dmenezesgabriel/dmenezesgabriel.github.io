---
title: "Git commands which may help you"
description: "Git commands which may help you."
date: 2020-06-02 22:00:00 -0300
last_modified_at: 2020-06-02 22:00:00 -0300
categories: git
image: assets/img/posts/2020-06-10-useful-git-commands/cover.jpeg
tags: git, github, commands
---

Git is a Version Control System, what is this? Software tools that help a software developers team to keep states of source code over time, recording each and every modification on it.

#### Commit logs:

{% highlight zsh %}
git log --graph --all --decorate --oneline
{% endhighlight %}

- `log`: Show commit logs.
- `--all`: Logs all refs.
- `--graph`: Graphical representation of the commit history.
- `--decorate`: Give the ref names of any commits that are shown.
- `--oneline`: This is a shorthand for both "--pretty=oneline --abbrev-commit" used at the same time.

<img class="col-sm post-image" src="{{ 'assets/img/posts/2020-06-10-useful-git-commands/git-log.png' | relative_url}}" alt="My image">
(ignore the mess)

#### Delete already merged local branchs:

{% highlight zsh %}
git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d
{% endhighlight %}

- `branch`: List, create, or delete branches.
- `--merged`: Already merged branches.
- ` | `: Sequence of one `or` more commands.
- `egrep`: Print lines matching a pattern.
- `-d, --delete:` Delete branch

#### Git stash difference :

{% highlight zsh %}
git stash show -p
{% endhighlight %}

- `stash`: Stash the changes in a dirty working directory away.
- `show`: Show the changes recorded in the stash as a diff between the stashed state and its original parent.
- `-p, --patch`: Select the diff between HEAD and the selected working tree.

## References
- life
- Too many losses by git `checkout .`
- [Explain Shell](https://explainshell.com/explain?cmd=git+log+--all+--graph+--decorate+--oneline+--simplify-by-decoration)