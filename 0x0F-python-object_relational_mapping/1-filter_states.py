#!/usr/bin/env python3
"""
This script contains a function that lists all
states with a name starting with N from the database hbtn_0e_0_usa
Note: database name is passed as an argument to the script
"""

# Ensuring code cant execute when imported
if __name__ == "__main__":
    #import the modules
    import MySQLdb
    import sys

    # Get command-line arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    # Connect to the MySQL database
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=database
    )

    # Create a cursor object
    cursor = db.cursor()

    # Execute the SQL query to find states starting with 'N'
    query = "SELECT id, name FROM states WHERE name LIKE 'N%' ORDER BY id ASC"
    cursor.execute(query)

    # Fetch all the rows
    rows = cursor.fetchall()

    # Print the rows
    for row in rows:
        print(row)

    # Close the cursor and database connection
    cursor.close()
    db.close()
