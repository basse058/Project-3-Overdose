import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

import flask_cors
from flask_cors import CORS, cross_origin


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///CDC.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
overdose = Base.classes.od_data_df

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#################################################
# Flask Routes
#################################################

@app.route("/")
@cross_origin()

def index():
    return render_template('index.html')

def welcome():
    """It worked! List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/od_data"
    )


@app.route("/api/v1.0/od_data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(overdose.year, overdose.month, overdose.overdose_deaths, overdose.state, overdose.state_name).all()

    session.close()


    # Create a dictionary from the row data and append to a list of all_passengers
    all_overdoses = []
    for year, month, overdose_deaths, state, state_name in results:
        overdose_dict = {}

        overdose_dict["year"] = year
        overdose_dict["month"] = month
        overdose_dict["overdose_deaths"] = overdose_deaths
        overdose_dict["state"] = state
        overdose_dict["state_name"] = state_name


        all_overdoses.append(overdose_dict)

    return jsonify(all_overdoses)


if __name__ == '__main__':
    app.run(debug=True)
