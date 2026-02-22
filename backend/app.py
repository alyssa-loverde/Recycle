from flask import Flask, redirect, render_template, request, url_for
from flask_cors import CORS
from users import *
from csv_reader import *

# Configure app
app = Flask(__name__)
app(CORS)

setup_database()

# Do something