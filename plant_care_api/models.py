from peewee import *
import datetime

DATABASE = PostgresqlDatabase('plants')

class Plant(Model):
    id = IntegerField(unique=True)
    com_name = CharField(max_length=50)
    sci_name = CharField(max_length=100)
    date = IntegerField()
    location = CharField()
    moisture = CharField()
    temperature = CharField()
    soil = CharField()
    pest = CharField()
    notes = CharField()
    image = CharField()

    class Meta:
        database = DATABASE

def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Plant], safe=True)
    print("TABLES Created")
    DATABASE.close()