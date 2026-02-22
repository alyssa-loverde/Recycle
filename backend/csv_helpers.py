import csv

def find_item(the_item):
    file = open("items.csv", 'r')
    reader = csv.reader(file)
    next(reader)
    for row in reader:
        item = row[0]
        if item.lower() == the_item.lower():
            file.close()
            return row[1]
    else:
        file.close()
        return None

def add_item(item, material, code):
    file = open("items.csv", 'a')
    writer = csv.writer(file)
    writer.writerow([item, material, code])
    file.close()
    
def search(text):
    file = open("items.csv", 'r')
    reader = csv.reader(file)
    next(reader)
    items = list()
    for row in reader:
        item = row[0]
        if text.lower() in item.lower():
            items.append((row[0], row[1], row[2]))
    file.close()
    return items

def get_all_items():
    file = open("items.csv", 'r')
    reader = csv.reader(file)
    next(reader)
    items = list()
    for row in reader:
        items.append(tuple(row))
    file.close()
    return items