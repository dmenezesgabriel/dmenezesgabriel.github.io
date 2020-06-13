---
title:  "Making a Database Handler pt.1"
date:   2020-06-10 21:00:00 -0300
categories: databases
cover-img: assets/img/post-cover/database-handler-1.jpg
tags: databases, postgresql, database handler, python, psycopg2, docker
---

A database handler offers a way to interface with databases of different kinds using code languages as Javascript and Python, so it's possible to bring an query result and manipulate as python dict objects on your ETL script, jupyter notebook analysis and many others.

**Ingredients**:
- PostgreSQL
- Docker
- Python
- Pipenv

## Database Transaction

A database transaction is a unit of work that is performed against a database and it may contain several smaller tasks in it, It also has to either happen in full or not at all, that is the ACID principle of **Atomicity**.

That is a transaction is a propagation of one or more changes to the database as creating records, updating or deleting it from a table.

## Cursors

The cursor holds the control of the position in a set of results and allow you to perform several operations row by row in a dataset returning or not to the original table, it points to an specific line inside a set being able to perform operations such as update, delete or move data.

## Psycopg

In psycopg, the connection class handle the transactions and when you perform the first statement to the PostgreSQL database using a cursor object, psycopg creates a new transaction in which all subsequent statements will be contained, in case of any of the statements comes to fail, psycopg will abort the transaction and no register will be altered.

## Hands-on

So let's read the recipe and bake this **cake**!

### Creating folders

{% highlight zsh %}
mkdir python-database-handler &&\
cd python-database-handler &&\
touch database_handler.py &&\
touch Dockerfile &&\
touch Makefile && \
init.sql
{% endhighlight %}

### Getting the flour

I really enjoy to use [vscode](https://code.visualstudio.com/) as text editor, but you can use vim, nano or notepad ++ if you want and then hunt dinossaurs for diner and bring to the cave, light the fire... you know!(acting as 21st century hipster).

{% highlight zsh %}
code Dockerfile
{% endhighlight %}

### Breaking somme eggs

Here we create our own postgres Docker image through a `Dockerfile`

{% highlight Dockerfile %}
# Pull official PostgreSQL image from dockerhub https://hub.docker.com/
FROM postgres
# Set environment variables
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB testdb
# By defaults every script located at /docker-entrypoint-initdb.d/
# will be automatically executed during container startup
COPY init.sql /docker-entrypoint-initdb.d/
{% endhighlight %}

last but not least we create the ini.sql file which will make the transactions as creating and inserting data in tables.

{% highlight zsh %}
code init.sql
{% endhighlight %}

{% highlight sql %}
CREATE TABLE public.authors (
    id int PRIMARY KEY,
    name varchar(255)
);

{% endhighlight %}

### Mix everything up

And then automagically build our image

{% highlight zsh %}
docker build -t custom-image .
{% endhighlight %}

### Baking the cake

Running it as a container

{% highlight zsh %}
docker run -d --name custom-image -e POSTGRES_PASSWORD=postgres -p 5555:5432 postgres
{% endhighlight %}

### Open the oven and smell it

Execute bash inside the container itself

{% highlight zsh %}
docker exec -i -t custom-image /bin/bash
{% endhighlight %}

Connect to the database via `psql`

{% highlight zsh %}
psql -h localhost -U postgres -d postgres
{% endhighlight %}

## References
- https://www.postgresqltutorial.com/
- https://docs.docker.com/engine/examples/postgresql_service/
- https://www.psycopg.org/docs/
- https://medium.com/@wkrzywiec/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50