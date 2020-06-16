---
title: "Making a Database Handler pt.1 - Docker"
description: "Making a Database Handler pt.1 - Docker"
date: 2020-06-10 21:00:00 -0300
last_modified_at: 2020-06-10 21:00:00 -0300
categories: databases
image: assets/img/posts/2020-06-10-database-handler-1/cover.jpg
tags: databases, postgresql, database handler, python, psycopg2, docker
---

A database handler offers a way to interface with databases of different kinds using code languages as Javascript and Python, so it's possible to bring an query result and manipulate as python dict objects on your ETL script, jupyter notebook analysis and many others.

For this tutorial we will build a custom, but yet simple image of PostgreSQL relacional database from where we will collect information with our python based database handler.

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
touch init.sql
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
ENV POSTGRES_DB postgres
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

- `build`: Command that builds Docker images from a Dockerfile and a “context”.
- `--tag , -t`: Name and optionally a tag in the ‘name:tag’ format.

Check for builded images

{% highlight zsh %}
docker images -a
{% endhighlight %}

- `images`: This command will show all top level images, their repository and tags, and their size.
- `--all , -a`: Show all images (default hides intermediate images).

### Baking the cake

Running it as a container

{% highlight zsh %}
docker run -d --name custom-image-container -p 5555:5432 custom-image
{% endhighlight %}

- `run`: First it creates a container over the specified image, and then starts it.
- `--detach , -d`: 	Run container in background and print container ID.
- `--name`: Assign a name to the container.
- `-p`: Bounds the container to the specified port.

### Open the oven and smell it

Execute bash inside the container itself

{% highlight zsh %}
docker exec -i -t custom-image-container /bin/bash
{% endhighlight %}

- `exec`: Runs a new command in a running container.
- `--interactive , -i`: Keep STDIN open even if not attached.
- `--tty , -t`: Allocate a pseudo-TTY.

Connect to the database via `psql`

{% highlight zsh %}
psql -h localhost -U postgres -d postgres
{% endhighlight %}

- `-h`: host.
- `-U`: User name.
- `-d`: Database name.

### The cherry on the cake

Insert some data into the table `public.authors`

{% highlight sql %}
INSERT INTO public.authors
    (id, name)
VALUES
    (1, 'J. k. Rowling'),
    (2, 'Stephen King'),
    (3, 'Timothy Ferris');
{% endhighlight %}

**Query**:

{% highlight sql %}
SELECT * FROM public.authors;
{% endhighlight %}

**Output**:

{:.table.table-dark}
| id |      name      |
|----|----------------|
|  1 | J. k. Rowling  |
|  2 | Stephen King   |
|  3 | Timothy Ferris |

<br>

## References
- [Postgres Tutorials](https://www.postgresqltutorial.com/)
- [Docker's documentation](https://docs.docker.com/)
- [Psycopg's documentation](https://www.psycopg.org/docs/)
- [Wkrzywiec's medium](https://medium.com/@wkrzywiec/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50)