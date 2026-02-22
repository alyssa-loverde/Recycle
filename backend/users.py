import sqlite3

def setup_database():
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    cursor.execute('''
                    CREATE TABLE IF NOT EXISTS users (
                    name VARCHAR(50) UNIQUE NOT NULL,
                    points INT
                ) ''')
    db.commit()

def add_user(name):
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    try:
        cursor.execute('''INSERT INTO users (name, points) VALUES
                   (?, ?) ''', (name, 0))
        db.commit()
        return "Entered the user!"
    except:
        return "The user already exists!"

def increment_points(name):
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    cursor.execute("SELECT COUNT(name) FROM users WHERE name=(?)", (name,))
    count = cursor.fetchone()[0]
    if count == 1:    
        cursor.execute('''UPDATE users
                   SET points = points + 1 
                   WHERE name=(?)''', (name,))
        db.commit()
        return "Points have been incrememented"
    else:
        return "This user does not exist"

def read_records():
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users ORDER BY points DESC")
    rows = cursor.fetchall()
    records = dict()
    for row in rows:
        name = row[0]
        points = row[1]
        records[name] = points
    return records
