import bottle
import json


@bottle.route('/')
def host_index_html():
    return bottle.static_file('index.html', root='/projects/<project-part-1>')


@bottle.route('/map.js')
def host_maps_js():
    return bottle.static_file('map.js', root='/projects/<project-part-1>')


@bottle.route('/tickets')
def get_tickets():
    return json.dumps(['lat', 'lon', 'description'])


# @bottle.route('/')
# def host_index_html():
# return static_file('')
#run(server='paste')
bottle.run(host='localhost', port=8080, debug=True)
