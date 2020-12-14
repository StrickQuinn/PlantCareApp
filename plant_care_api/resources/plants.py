import models
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

plant = Blueprint('plants', 'plant')

@plant.route('/', methods=["GET"])
def get_all_plants():
    try:
        plants = [model_to_dict(plant) for plant in models.Plant.select()]
        print(plants)
        return jsonify(data=plants, status={
            "code": 200,
            "message": "Success with getting resources."
        })
    except models.DoesNotExist:
        return jsonify(data={}, status={
            "code": 401,
            "message": "Error getting resources"
        })

@plant.route('/', methods=["POST"])
def create_plant_entry():
    payload = request.get_json()
    print(type(payload), 'payload')
    plant = models.Plant.create(**payload)
    print(plant.__dict__)
    print(dir(plant))
    print(model_to_dict(plant), 'model to dict')
    plant_dict = model_to_dict(plant)
    plant_dict = model_to_dict(plant)
    return jsonify(data=plant_dict, status={
        "code": 201,
        "message": "Success with post route"
    })