import urllib.request
import json
import time
filename="final_currency.txt"

def get_currency_data(para):
    url = para
    response = urllib.request.urlopen(url)
    content = response.read().decode()
    content = json.loads(content)

    with open(filename, "a") as f:
        for i in content:
            if i['symbol'] == "USDXRP":
                f.write(str(i['price'])+"," + time.strftime("%H:%M:%S", time.localtime()))
        f.write('\n')
    return json.dumps(content)

def get_currency_history():
    time_array=[None,None,None,None,None,None,None,None,None,None]
    currency_array=[None,None,None,None,None,None,None,None,None,None]
    allLine=open(filename,'r').readlines()
    nLine=len(allLine)
    if nLine >=10:
        allLine=allLine[nLine-10:nLine]

    tmp=0
    for line in allLine:
        sp=line.rstrip('\n').split(',')
        time_array[tmp]=sp[1]
        currency_array[tmp]=sp[0]
        tmp=tmp+1
    
    res={'time':time_array, 'currency':currency_array}
    print(time_array)
    return json.dumps(res)



