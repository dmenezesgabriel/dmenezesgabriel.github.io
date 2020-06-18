---
title: "Making a Database Handler pt.2 - Pipenv"
description: "Making a Database Handler pt.2 - Pipenv"
date: 2020-06-17 19:45:00 -0300
last_modified_at: 2020-06-17 19:45:00 -0300
categories: python
image: assets/img/posts/2020-06-16-database-handler-2/cover.jpg
tags: databases, postgresql, database handler, python, psycopg2, docker
---

If you already not, you should check my previous post where we have this project introduction. In this part, A.K.A part 2, we'll install pipenv that is a nice package manager, all dependencies and start coding   .

[Making a Database Handler pt.1 - Docker](https://dmenezesgabriel.github.io/python/2020/06/11/database-handler-1.html)

## Before we start

Make sure you've got python and pip. This tutorial uses python 3.x.

{% highlight zsh %}
python --version
{% endhighlight %}

{% highlight zsh %}
pip --version
{% endhighlight %}

### Pipenv

Pipenv is a packaging tool for python, similar to bundler, composer, npm, cargo, yarn and etc. So what is it for?
Basically make the typical developing workflow of creating a virtual environment with `virtualenv`, installing our dependency packages with `pip` and updating the requirements on `requirements.txt` simplier.

With `pipenv install flask` for example, if your environment it's not already created, you will create, install the package and also automagically update the program requirements on `Pipfile` & `Pipfile.lock`.

For linux users, we don't want to mess with the python version which already comes with te operational system. So you can check the respective python versions and it's installation `local` with the output from below commands.

{% highlight zsh %}
echo "- pip" &&\
pip show pip &&\
echo "- pip3" &&\
pip3 show pip
{% endhighlight %}

My location output from `pip show pip`:

{% highlight zsh %}
Location: /usr/lib/python2.7/site-packages
{% endhighlight %}

My location output from `pip3 show pip`:

{% highlight zsh %}
Location: /usr/lib/python3.7/site-packages
{% endhighlight %}

As pip3 is the one which install packages at my python 3.x version, it's that I'm gonna use!

{% highlight zsh %}
pip3 install pipenv
{% endhighlight %}

### Show Time

Close your eyes and imagine you're walking on beach, feel the sand between your toes... Sorry wrong class!

Come with me, walk into our project's directory.

{% highlight zsh %}
cd python-database-handler
{% endhighlight %}

Take my hand, code with me! (That was too much wasn't?!)

{% highlight zsh %}
pipenv install psycopg2
{% endhighlight %}

Output:


```
✔ Successfully created virtual environment!
Virtualenv location: /home/gmenezes/.local/share/virtualenvs/python-database-handler-TGlnQU8Z
Creating a Pipfile for this project…
Installing psycopg2…
Adding psycopg2 to Pipfile's [packages]…
✔ Installation Succeeded
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
✔ Success!
Updated Pipfile.lock (59b6f6)!
Installing dependencies from Pipfile.lock (59b6f6)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 1/1 — 00:00:00
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
```


So here we can see pipenv:
- Creating a `virtualenv` at your home (there is no place like it),
- Creating a `Pipfile` where you will find your requirements,
- Installing `psycopg2`
- Updating `Pipfile.lock`

And also when you miss `requirments.txt` or your friends say `pipenv` it's lame, you can generate a `requirements.txt` for them with:

{% highlight zsh %}
pipenv lock --requirements > requirements.txt
{% endhighlight %}

If you really didn't liked the experience and want to throw it all alway:

{% highlight zsh %}
pipenv --rm
{% endhighlight %}

The command above will remove your environment and all installed packages, but keep in mind that we will use pipenv for the sake of simplicity on the next episode of `Coding with Gabriel, the TV Show!`

And then if all you want is to delete the installed package:

{% highlight zsh %}
pipenv uninstall psycopg2
{% endhighlight %}

Output:

```
Uninstalling psycopg2…
Found existing installation: psycopg2 2.8.5
Uninstalling psycopg2-2.8.5:
  Successfully uninstalled psycopg2-2.8.5

Removing psycopg2 from Pipfile…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (a65489)!
```

And again, everything updated automagically.

Thank you for reading, thumbs up :+1:, subscribe and all of that youtube stuff.

## References
- [Real Python](https://realpython.com/pipenv-guide/#pipenv-introduction)
- [The Hitchhiker's Guide](https://docs.python-guide.org/)