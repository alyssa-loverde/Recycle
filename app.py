import csv
import sqlite3

db = sqlite3.connect("users.db")
cursor = db.cursor()

def setup_database():
    db = sqlite3.connect("users.db")
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name VARCHAR(50) NOT NULL,
                    points INT
                ) ''')
    db.commit()

def add_user(name):
    cursor.execute('''INSERT INTO users (name, points) VALUES
                   ( ?, ?) ''', (name, 0))
    db.commit()
    print("Your ID is ", cursor.lastrowid)

def increment_points(id):
    cursor.execute('''UPDATE users SET points = points + 1 WHERE id=(?)''', (id,))
    db.commit()
    print("Points have been incrememented")

def read_records():
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    for row in rows:
        id = row[0]
        name = row[1]
        points = row[2]
        print(f"{id} : {name} : {points}")