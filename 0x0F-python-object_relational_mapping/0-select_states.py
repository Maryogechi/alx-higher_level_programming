#!/usr/bin/python3
"""
script that lists all states from the database
hbtn_0e_0_usa and takes three arguments

"""


if __name__ == "__main__":

    import MySQLdb
    import sys

    mysql_username = sys.argv[1]
    mysql_password = sys.argv[2]
    database_name = sys.argv[3]

    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=mysql_username,
        passwd=mysql_password,
        db=database_name
    )

    query = "SELECT * FROM states ORDER BY states.id ASC"

    cursor = db.cursor()
    cursor.execute(query)
    rows = cursor.fetchall()

    for row in rows:
        print(rows)

    cursor.close()
    db.close()
