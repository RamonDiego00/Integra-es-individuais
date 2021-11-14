
# import pandas as pd
# import plotly.offline as py
# import plotly.graph_objs as go
# import matplotlib.pyplot as plt

import numpy as np
import pandas as pd
import plotly.express as px

# Gráfio de linha

px.line(x=[1, 2, 3, 4, 5], y=[10, 40, 20, 50, 5])

# Gráfico de coluna 

df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/flights.csv', sep=',')


df.head()

df.tail()

df_agrupado_pelo_mes = df.groupby('month', sort=False).mean().reset_index()
df

# Gráfico de linha baseado em colunas

px.line(df_agrupado_pelo_mes, x='month', y="passengers")


#Gráfico com um filtro muito específico com cores

px.line(df, x='month', y='passengers', color='year')
