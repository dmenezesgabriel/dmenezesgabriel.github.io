---
title: "Making a Database Handler pt.3 - Psycopg"
description: "Making a Database Handler pt.3 - Psycopg"
date: 2020-06-18 08:49:00 -0300
last_modified_at: 2020-06-18 08:49:00 -0300
categories: python
image: assets/img/posts/2020-06-18-database-handler-3/cover.png
tags: databases, postgresql, database handler, python, psycopg2, docker
---

Psycopg is a very popular database driver for PostgreSQL databases in Python programming language, which allow us to connect to the database and perform commands programatically, with this we are able to create scripts and also improve our jupyter's studies efficience.

<div class="container p-auto mb-3 rounded-lg text-center w-50" style="background-color: black;">
  <img class="col-sm post-image rounded-lg w-100" src="{{ 'assets/img/posts/2020-06-18-database-handler-3/on-the-rod-so-far.gif' | relative_url}}" alt="My image">
</div>

If you're a loyal spectador who does not miss a chapter of this novel, on the road so far you've seen this tutorial introduction, when we start setting our **PostgreSQL** container with **Docker** and installing **Pipenv** to manage our packages and dependencies.

And a very important step, we've installed **Psycopg2**.

{% highlight zsh %}
pipenv install psycopg2
{% endhighlight %}

[Previous episode - Making a Database Handler pt.2 - Docker](https://dmenezesgabriel.github.io/python/2020/06/16/database-handler-2.html)

## Connecting

Connection established houston, we can land!

{% highlight zsh %}
python --version
{% endhighlight %}

## References
- [Real Python](https://realpython.com/pipenv-guide/#pipenv-introduction)
- [The Hitchhiker's Guide](https://docs.python-guide.org/)