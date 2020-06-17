---
title: "Making a Database Handler pt.2 - Python"
description: "Making a Database Handler pt.2 - Python"
date: 2020-06-16 21:00:00 -0300
last_modified_at: 2020-06-16 21:00:00 -0300
categories: databases
image: assets/img/posts/2020-06-16-database-handler-2/cover.png
tags: databases, postgresql, database handler, python, psycopg2, docker
---

If you already not, you should check my previous post where we have this project introduction. In this part, A.K.A part 2, we'll install pipenv that is a nice package manager, all dependencies and start coding   .

[Making a Database Handler pt.1 - Docker](https://dmenezesgabriel.github.io/databases/2020/06/11/database-handler-1.html)

## Before we start

Make sure you've got python and pip. This tutorial uses python 3.x.

{% highlight zsh %}
python --version
{% endhighlight %}

{% highlight zsh %}
pip --version
{% endhighlight %}

### Pipenv

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


<br>

## References
- [Postgres Tutorials](https://www.postgresqltutorial.com/)
- [Psycopg's documentation](https://www.psycopg.org/docs/)
- [The Hitchhiker's Guide](https://docs.python-guide.org/)