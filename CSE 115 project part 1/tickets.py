import urllib.request
import json


def get_ticket_data(para):
    url = "https://data.buffalony.gov/resource/ux3f-ypyc.json"
    response = urllib.request.urlopen(url)
    content = response.read().decode()
    content = json.loads(content)
    return (content)
    
    
    content1 json.loads(para)
    dict = {}
    for i in content1:
        if latitude && longitude not in content1:
        dict = content1.pop(i)
    return content
    
    return tickets.get_ticket_data(url)
