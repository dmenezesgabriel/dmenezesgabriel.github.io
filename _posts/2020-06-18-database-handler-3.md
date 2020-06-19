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

[Previous episode - Making a Database Handler pt.2 - Docker](https://dmenezesgabriel.github.io/python/2020/06/17/database-handler-2.html)

## Time to write the code

Make some files, make some folders...

{% highlight zsh %}
# Walk into our directory
cd python-database-handler &&\
# Create a file for the Database Handler
code database_handler.py &&\
# Create a file for database credentials
code databases_access.json &&\
# Create a file for our query
code query.sql &&\
# Create a file for our script
code script.py
{% endhighlight %}

Ready, set, go! Let Sonic get some rings.

You don't need to do this, it's a plus, you will understand, but if you want you can install Pandas.

{% highlight zsh %}
pipenv install pandas
{% endhighlight %}

First we'll import some important stuff

{% highlight python %}
# database_handler.py
import json
import psycopg2
import psycopg2.extras
import pandas as pd


{% endhighlight %}

- `json`: It'll help you to deal with json data format in which we will store our database credentials.
- `psycopg2`: The driver that make possible to connect to the database programatically.
- `psycopg2.extras`: Some magic will happen here, we'll bring the fetched results as a python dictionaries.

obs: Don't forget to jump two lines after `imports` by the sake of pretty code. Nobody deserves the otherway.

### Getting the credentials

Simples as it not looks, the only thing that this function do is abstract the python's built-in function to read files to a one liner.

{% highlight python %}
# database_handler.py
def get_database_access(path):
    """
    Reads a file.

    Expected dict format:

    {
        "database_name": {
            "host": "database-db.host.net",
            "user": "user",
            "password": "1234",
            "database": "database_name",
            "port": 5432
        },
    }

    Parameters
    ----------
    :path: recieves access_information.json path

    Returns
    ----------
    A dictionary with databases access information
    """
    database_file_name = path
    with open(database_file_name, "r") as database_file:
        database_access = json.load(database_file)
    return database_access

{% endhighlight %}

The same as above, let's name the oxen. But this little boy is called `query`. So what we do here? Load the query files, that is it!

{% highlight python %}
# database_handler.py
def load_query(path) -> str:
    """
    Load query from .sql file

    Parameters
    ----------
    :query: file.sql path

    Returns
    ----------
    String content of query file
    """
    with open(path, "r") as query_file:
        return query_file.read()

{% endhighlight %}

### The man of the hour (DatabaseHandler)

You got scared, I smell the fear through your armpits. This is the `DatabaseHandler` class with all it's attributes and methods. I'll breakdown the code for a easier understanding.

{% highlight python %}
# database_handler.py
class DatabaseHandler:
    """
    Handler for execute queries in a given the database
    """

    def __init__(self, access_information):
        """Class atributes

        Parameters
        ----------
        :access_information: databases access dictionary
        {
            "database_name": {
                "host": "database-db.host.net",
                "user": "user",
                "password": "1234",
                "database": "database_name",
                "port": 5432
            },
        }
        """
        self._host = access_information["host"]
        self._port = access_information.get("port", 5432)
        self._user = access_information["user"]
        self._password = access_information["password"]
        self._database = access_information["database"]
        self._connection = self._connect()

{% endhighlight %}

We receive the credentials via access_information which we load by `get_database_access('here_goes_the_file')` and define the handler attributes.

Furter we will need to have access to the handler's connection, so we can reuse it and not keep opening and closing every time because this operations cost to the database execute, so once open we'll keep it open and use for different queries.

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    @property
    def connection(self):
        """
        Connection attribute
        """
        return self._connection

{% endhighlight %}

- `@property`: Is a `decorator` which allow us to call a method as an attribute, among other nice stuff.

Connection established houston, we're ready to land! Below we've defined the function to connect to the database.

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    def _connect(self):
        """Establish connection with the database
        """
        connection_parameters = {
            "host": self._host,
            "port": self._port,
            "dbname": self._database,
            "user": self._user,
            "password": self._password
        }
        return psycopg2.connect(
            **connection_parameters, connect_timeout=10)

{% endhighlight %}

- `connect_timeout`: self explanatory, make good use!

Our connection may fall, the method below'll be used to an automatic reconnector!

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    def _reconnect(self):
        """Reconnect to database, if connection is closed
        """
        if self._connection.closed > 0:
            self._connection = self._connect()

{% endhighlight %}

- `closed`: "Read-only integer attribute: 0 if the connection is open, nonzero if it is closed or broken.", said by psycopg docs.

When you finished eating, wash your dishes and close your database connections!

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    def close(self):
        """Close the connection
        """
        self._connection.close()

{% endhighlight %}

We'll reuse the same connection, but we may need another cursors. At each query we will close the cursor, so we'll need a cursor factory!

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    def cursor(self):
        """Create cursors
        """
        return self.connection.cursor(
            cursor_factory=psycopg2.extras.RealDictCursor)

{% endhighlight %}

Something really cool, somethimes we may be disconnected from database by to heavy queries(don't do that), but once we back to our sense and optimze the query it we don't want to call the `connection` method again, so we'll make this automatic, intelligent and sophisticated by the use of a `decorator` that checks if the connection is closed and reopen before making the query.

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    def db_connector(func):
        """
        Check the connection before making query,
        connect if disconnected

        Parameters
        ----------
        :func: Database related function which uses
        DatabaseHandler connection
        """
        def with_connection(self, *args, **kwargs):
            self._reconnect()
            try:
                result = func(self, *args, **kwargs)
            except Exception as error:
                print(f"Error: {error}")

            return result
        return with_connection

{% endhighlight %}

The moment we've all waited for, the query function! (with retries :heart_eyes:)

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    @db_connector
    def fetch(self, query, params=None, max_tries=5):
        """
        Fetch query results

        Parameters
        ----------
        :query: Database related function which uses
        DatabaseHandler connection
        :params: Query params
        :max_tries: Max number of query retries

        Returns
        ----------
        Query results as a list of dicts
        """
        attempt_no = 0
        while attempt_no < max_tries:
            attempt_no += 1
            cursor = self.cursor()
            try:
                with self.connection:
                    with cursor:
                        cursor.execute(query, params)
                        return cursor.fetchall()
            except Exception as error:
                print(f"ERROR: In psycopg.cursor.fetchall(): {error}")
        return []

{% endhighlight %}

As I've said, a little bonus! Fetch the queries to a `pandas` `DataFrame`!

{% highlight python %}
# database_handler.py
# Insider DatabaseHandler class
    @db_connector
    def query_to_df(self, sql, params=None, max_tries=5):
        """
        Create a pandas DataFrame object from a query result

        Parameters
        ----------
        :sql: query statements
        :params: a list or a tuple of parameters that will
        be passed to the query execution
        :max_tries: number of query retries in the case of failure

        Returns
        ----------
        Pandas DataFrame object
        """
        attempt_no = 0
        while attempt_no < max_tries:
            cursor = self.cursor()
            attempt_no += 1
            try:
                with self.connection:
                    with cursor:
                        return pd.read_sql_query(sql, self, params=params)
            except Exception as error:
                print(f"Query to DataFrame error: {error}.")
        return []

{% endhighlight %}

## Now the results of our hard work!

The **query** file!

{% highlight python %}
# query.sql
SELECT * FROM public.authors;
{% endhighlight %}


The **script** file!

{% highlight python %}
# script.py
from database_handler import (
    get_database_access, DatabaseHandler, load_query
)

# Get database credentials from json file
database_access = get_database_access('databases_access.json')

{% endhighlight %}

database_access should look like:

```
{'database-test': {'database': 'postgres', 'host': 'localhost', 'password': 'postgres', 'port': 5555, 'user': 'postgres'}}
```

Instantiating the DatabaseHandler class and loading the query:

{% highlight python %}
# script.py
# Instantiate the DatabaseHandler class
database_handler = DatabaseHandler(database_access["database-test"])

# Load a query file
query = load_query('query.sql')

# Fetch results
results = database_handler.fetch(query)

{% endhighlight %}

Fetch query output:

```
[RealDictRow([('id', 1), ('name', 'J. k. Rowling')]), RealDictRow([('id', 2), ('name', 'Stephen King')]), RealDictRow([('id', 3), ('name', 'Timothy Ferris')])]
```

For jupyter lovers this is something useful :thumbsup:

{% highlight python %}
# script.py
# Fetch results and bring them to a Pandas DataFrame
df_results = database_handler.query_to_df(query)

{% endhighlight %}

Query to `DataFrame` output:

```
   id            name
0   1   J. k. Rowling
1   2    Stephen King
2   3  Timothy Ferris
```

Thank you for reading! :raised_hands: :pray:

## References
- [Psycopg's documentation](https://www.psycopg.org/docs/)
