import bottle
import json

import currency

@bottle.route('/')
def host_index_html():
    return bottle.static_file('index.html', root='/Users/michealluo/vscode_py/final')

@bottle.route('/currency.js')
def host_currency_js():
    return bottle.static_file('currency.js', root='/Users/michealluo/vscode_py/final')

@bottle.route('/renderBarChart.js')
def render_bar_chart():
    return bottle.static_file('renderBarChart.js', root='/Users/michealluo/vscode_py/final')

@bottle.route('/currency')
def get_data():
    return currency.get_currency_data('https://forex.1forge.com/1.0.3/quotes?pairs=USDEUR,USDGBP,USDCNH,USDDKK,USDHKD,USDAUD,USDNZD,USDXRP,USDCAD,USDCHF,USDMXN,USDNOK,USDPLN,USDSEK,USDSGD,USDTRY,USDZAR&api_key=vYqu2rLYDEqFQachBJKC2DVdUZOSQcZX')

@bottle.route('/history')
def get_history():
    return currency.get_currency_history()
