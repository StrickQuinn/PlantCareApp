import models
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

plant = Blueprint('plants', 'plant')

@plant.route('/')
def index():
    return 'hey there'