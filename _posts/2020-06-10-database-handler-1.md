---
title:  "Making a Database Handler"
date:   2020-06-02 09:58:00 -0300
categories: databases
cover-img: assets/img/post-cover/database-handler-1.jpg
---

A database handler offers a way to interface with databases of different kinds using code languages as Javascript and Python, so it's possible to bring an query result and manipulate as python dict objects on your ETL script, jupyter notebook analysis and many others.

**Ingredients**:
- PostgreSQL
- Docker
- Python

## Database Transaction

A database transaction is a unit of work that is performed against a database and it may contain several smaller tasks in it, It also has to either happen in full or not at all, that is the ACID principle of **Atomicity**.

That is a transaction is a propagation of one or more changes to the database as creating records, updating or deleting it from a table.

## Cursors

The cursor holds the control of the position in a set of results and allow you to perform several operations row by row in a dataset returning or not to the original table, it points to an specific line inside a set being able to perform operations such as update, delete or move data.

## Psycopg

In psycopg, the connection class handle the transactions and when you perform the first statement to the PostgreSQL database using a cursor object, psycopg creates a new transaction in which all subsequent statements will be contained, in case of any of the statements comes to fail, psycopg will abort the transaction and no register will be altered.

{% highlight zsh %}
touch python-database-handler
{% endhighlight %}

## References
- https://www.postgresqltutorial.com/
- https://docs.docker.com/engine/examples/postgresql_service/
- https://www.psycopg.org/docs/