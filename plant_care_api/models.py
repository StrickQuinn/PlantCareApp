from peewee import *
import datetime

DATABASE = PostgresqlDatabase('plants')

class Plant(Model):
    name = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    location = CharField()
    moisture = CharField()
    temperature = CharField()
    soil = CharField()
    pest = CharField()
    notes = CharField()
    image = CharField()

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Plant], safe=True)
    print("TABLES Created")
    DATABASE.close()