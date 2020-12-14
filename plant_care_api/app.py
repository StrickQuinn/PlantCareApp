from flask import Flask, jsonify

DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(name="Apollo", age=8)

if __name__ == '__main__':
    app.run( debug=DEBUG, port=PORT )