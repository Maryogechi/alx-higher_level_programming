#!/usr/bin/python3

"""
script that takes in an argument and displays all values
in the states table of hbtn_0e_0_usa
where name matches the argument.
Note: database name is passed as argument to the script.
"""

if __name__ == "__main__":
    import MySQLdb
    import sys

# Assign cmd arguments to the input

    username = sys.argv[1]
    password = sys.argv[2]
    db_name = sys.argv[3]
    state = sys.argv[4]

# Connect to DB
    db = MySQLdb.connect(
        host='localhost',
        port=3306,
        user=username,
        password=password,
        db=db_name
    )

    cursor = db.cursor()
    query = "SELECT id, name FROM states WHERE name =%s"

    cursor.execute(query, (state),)
    result = cursor.fetchall()
    for item in result:
        print(item)

# Close cursor and connection
    cursor.close()
    db.close()
