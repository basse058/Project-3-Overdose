import plotly.graph_objects as go

import pandas as pd
df = pd.read_csv(
    'OpioidDeathsAll-cleaned-3.csv')

for col in df.columns:
    df[col] = df[col].astype(str)

df['text'] = df['state'] + '<br>' + \
    '2014 - ' + df['2014_Number_of_Deaths'] + '<br>' + '2015 - ' + df['2015_Number_of_Deaths'] + '<br>' + '2016 - ' + df['2016_Number_of_Deaths'] + \
    '<br>' + '2017 - ' + df['2017_Number_of_Deaths'] + '<br>' + '2018 - ' + \
    df['2018_Number_of_Deaths'] + '<br>' + \
    '2019 - ' + df['2019_Number_of_Deaths']

fig = go.Figure(data=go.Choropleth(
    locations=df['code'],
    z=df['total_deaths'].astype(float),
    locationmode='USA-states',
    colorscale='Reds',
    autocolorscale=False,
    text=df['text'],  # hover text
    marker_line_color='white',  # line markers between states
))

fig.update_layout(
    title_text='Opioid Deaths by State from 2014-2019<br>(Hover for breakdown)',
    geo=dict(
        scope='usa',
        projection=go.layout.geo.Projection(type='albers usa'),
        showlakes=True,  # lakes
        lakecolor='rgb(255, 255, 255)'),
)

fig.show()
fig.write_html("index.html")
