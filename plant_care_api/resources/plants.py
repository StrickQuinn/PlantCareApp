import models
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

plant = Blueprint('plants', 'plant')

# get route
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

# show full plant log
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

#show a single plant log
@plant.route('/<id>', methods=["GET"])
def show_a_plant_log(id):
    plant = models.Plant.get_by_id(id)
    print(plant.__dict__)
    return jsonify(data=model_to_dict(plant), status={
        "code": 200,
        "message": "Success with showing a single log"
    })

#update a plant log
@plant.route('/<id>', methods=["PUT"])
def update_plant_log(id):
    payload = request.get_json()
    query = models.Plant.update(**payload).where(models.Plant.id==id)
    query.execute()
    return jsonify(data=model_to_dict(models.Plant.get_by_id(id)), status={"code": 200, "message": "Success with update"})

# delete a plant log
@plant.route('/<id>', methods=["DELETE"])
def delete_plant_log(id):
    query = models.Plant.delete().where(models.Plant.id == id)
    query.execute()
    return jsonify(data="resource successfully deleted", status={ "code": 200, "message": "Delete a plant log: Success!"})
