from flask import Flask, jsonify, request, session, make_response
from flask_cors import CORS
from users import *
from csv_reader import *

# Configure app
app = Flask(__name__)

setup_database()

@app.route("/default")
def default_func():
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)

@app.route('/users', methods=['GET', 'POST'])
def get_data():
    if request.method == 'POST':
        # Use .get_json() to handle the React request body
        data = request.get_json()
        name = data.get("name")
        message = add_user(name) 
        return jsonify({"status": "success", "message": message})
    else:
        # Calls the fixed read_records()
        user_data = read_records()
        return jsonify(user_data)

if __name__ == '__main__':
    app.run(port=5555, debug=True)


