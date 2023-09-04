function ajaxGetRequest(path, callback){ 
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){ callback(this.response);
    } };
    request.open("GET", path);
    request.send(); 
}

function ajaxPostRequest(path, data, callback){ 
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){ 
            callback(this.response);
        } 
    };
    request.open("POST", path);
    request.send(data); 
}

function genLineData(currencyData){
    x_array=[];
    y_array=[];
    for(var i of currencyData){
        x_array.push(i['symbol']);
        y_array.push(i['price']);
    }
    var trace={
        type: 'scatter',
        x: x_array,
        y: y_array,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };
    return trace;
}

// function processCurrency
function renderCurrency(response){
    currencyData=JSON.parse(response);
    document.getElementById("currency_data").innerHTML = currencyData[0]["symbol"];
    loadLineChart(currencyData);
}


function renderHistory(response){
    currencyData=JSON.parse(response);
    loadHistoryChart(currencyData);
}

function loadCurrency(){ 
    ajaxGetRequest('/history', renderHistory); 
    ajaxGetRequest('/currency', renderCurrency); 
}

function loadLineChart(currencyData){
    var trace1 = genLineData(currencyData);
    // var trace1 = {
    //     type: 'bar',
    //     x: ["dfa", "afdf", "dfasdf", "DF"],
    //     y: ["1.2", "10.2", "2.3", "8.0"],
    //     marker: {
    //         color: '#C8A2C8',
    //         line: {
    //             width: 2.5
    //         }
    //     }
    // };
    
    var data = [ trace1 ];
    
    var layout = { 
      title: 'USD Based Currency',
      font: {size: 18}
    };
    
    Plotly.newPlot('currency_line_chart', data, layout, {responsive: true});
}

function loadHistoryChart(currencyData){
    var trace1 = {
        type: 'scatter',
        x: currencyData['time'],
        y: currencyData['currency'],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };
    
    var data = [ trace1 ];
    
    var layout = { 
      title: 'Currency History',
      font: {size: 18}
    };
    
    Plotly.newPlot('currency_history_chart', data, layout, {responsive: true});
}

// function dddd(){
//     loadBarChart([{'symbol': 'EURUSD', 'bid': 1.13138, 'ask': 1.13218, 'price': 1.13178, 'timestamp': 1543725032}, {'symbol': 'GBPJPY', 'bid': 144.609, 'ask': 144.909, 'price': 144.759, 'timestamp': 1543725032}, {'symbol': 'AUDUSD', 'bid': 0.73051, 'ask': 0.73191, 'price': 0.73121, 'timestamp': 1543725032}]);
// }