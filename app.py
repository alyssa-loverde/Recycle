import csv
import sqlite3
from flask import Flask, redirect, render_template, request, url_for

app= Flask(__name__)


db = sqlite3.connect("users.db")
cursor = db.cursor()

@app.route("/")
def setup_database():
    db = sqlite3.connect("users.db")
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS users (
                    name VARCHAR(50) UNIQUE NOT NULL,
                    points INT
                ) ''')
    db.commit()

@app.route("/users")
def add_user(name):
    try:
        cursor.execute('''INSERT INTO users (name, points) VALUES
                   (?, ?) ''', (name, 0))
        db.commit()
        print("Created the user!")
    except:
        print("This user already exists!")

def increment_points(name):
    cursor.execute("SELECT COUNT(name) FROM users WHERE name=(?)", (name,))
    count = cursor.fetchone()[0]
    if count == 1:    
        cursor.execute('''UPDATE users
                   SET points = points + 1 
                   WHERE name=(?)''', (name,))
        db.commit()
        print("Points have been incrememented")
    else:
        print("This name does not exist")

def read_records():
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    for row in rows:
        name = row[0]
        points = row[1]
        print(f"{name} : {points}")

setup_database()
add_user("Pranet")
increment_points("Pranet")
increment_points("null")

