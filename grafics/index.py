
# import pandas as pd
# import plotly.offline as py
# import plotly.graph_objs as go
# import matplotlib.pyplot as plt

import numpy as np
import pandas as pd
import plotly.express as px

px.line(x=[1, 2, 3, 4, 5], y=[10, 40, 20, 50, 5])

df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/flights.csv')

df.head()

df.tail()

df.groupby('month').mean()

