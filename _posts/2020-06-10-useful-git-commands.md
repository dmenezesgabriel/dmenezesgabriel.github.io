---
title:  "Git commands which may help you"
date:   2020-06-02 22:00:00 -0300
categories: git
cover-img: assets/img/post-cover/useful-git-commands.jpeg
tags: git, github, commands
---

Git is a Version Control System, what is this? Software tools that help a software developers team to keep states of source code over time, recording each and every modification on it.

- Git blog
{% highlight zsh %}
git log --graph --all --decorate --oneline
{% endhighlight %}

- Delete already merged local branchs
{% highlight zsh %}
git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d 
{% endhighlight %}

- Git stash difference 
{% highlight zsh %}
git stash show -p
{% endhighlight %}

## References
- life
- Too many losses by git `checkout .`