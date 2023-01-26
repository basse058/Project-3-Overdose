import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///CDC.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Overdose = Base.classes.od_death_data_df
Deaths = Base.classes.opioid_deaths_all

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/data<br/>"
        f"/api/v1.0/data2"
    )


@app.route("/api/v1.0/data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(Overdose.Year, Overdose.Month, Overdose.Value, Overdose.State).all()

    session.close()


    # Create a dictionary from the row data and append to a list of all_passengers
    all_overdoses = []
    for Year, Month, Value, State in results:
        overdose_dict = {}
        overdose_dict["Year"] = Year
        overdose_dict["Month"] = Month
        overdose_dict["Value"] = Value
        overdose_dict["State"] = State
        all_overdoses.append(overdose_dict)

    return jsonify(all_overdoses)

@app.route("/api/v1.0/data2")
def data2():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(Deaths.code, Deaths.state, Deaths.total_deaths).all()

    session.close()


    # Create a dictionary from the row data and append to a list of all_passengers
    all_deaths = []
    for code, state, total_deaths in results:
        death_dict = {}
        death_dict["code"] = code
        death_dict["state"] = state
        death_dict["total_deaths"] = total_deaths
        all_deaths.append(death_dict)

    return jsonify(all_deaths)

if __name__ == '__main__':
    app.run(debug=True)
