#!/usr/bin/python3
"""
API's from and for workerfy
"""

from flask import Blueprint
from flask_restful import Resource, Api, fields, marshal_with
#import workerfy

second = Blueprint("second", __name__)
api = Api(second)


resource_fields = {
    'id': fields.Integer,
    'username': fields.String,
    'fullname': fields.String,
    'email': fields.String,
    'phone': fields.Integer,
    'phone2': fields.Integer,
    'Location': fields.String,
    'work_field': fields.String,
    'description': fields.String,
    }

class filterByField(Resource):
    @marshal_with(resource_fields)
    def get(self, field):
        result = workers.query.filter_by(username=field).all()
        return result

api.add_resource(filterByField, "/workers/<field>")
        
        
