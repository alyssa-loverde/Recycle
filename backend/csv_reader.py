import csv

def find_item(the_item):
    file = open("items.csv", 'r')
    reader = csv.reader(file)
    next(reader)
    for row in reader:
        item = row[0]
        if item.lower() == the_item.lower():
            return row[1]
    else:
        return None
    
def search(text):
    file = open("open.csv", 'r')
    reader = csv.reader(file)
    next(reader)
    items = list()
    for row in reader:
        item = row[0]
        if text.lower() in item.lower():
            items.append((row[0], row[1]))
    return items