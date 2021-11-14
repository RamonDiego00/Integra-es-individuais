from jupyter_dash import JupyterDash
import dash_core_components as dcc
import dash_html_components as html

ext_style = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = JupyterDash(__name__,external_stylesheets = ext_style)

markdown_text = '''
### HTML versus Markdown
<h1>Ramon</h1>

Tipo |  Ou | Para obter
-----|-----|-----------
````*Italic*```` | ````_Italic_```` | *Italic*

Dash usa a [CommonMark](http://commonmark.org) onde são 
fornecidas especificações sobre Markdown.
'''

app.layout = html.Div([      
    dcc.Markdown(children=markdown_text) 
])

app.run_server(debug=True)