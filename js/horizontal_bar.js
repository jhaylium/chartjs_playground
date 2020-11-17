let data = {
    "status": 0,
    "sentiment_total": {
        "pct_neutral": 0.617,
        "pct_negative": 0.114,
        "pct_positive": 0.261
    },
    "sentiment_fields": [
        {
            "key": "q40_sentiment",
            "pct_neutral": 0.856,
            "pct_negative": 0.036,
            "pct_positive": 0.106
        },
        {
            "key": "q35_sentiment",
            "pct_neutral": 0.451,
            "pct_negative": 0.013,
            "pct_positive": 0.532
        },
        {
            "key": "q41_sentiment",
            "pct_neutral": 0.61,
            "pct_negative": 0.182,
            "pct_positive": 0.202
        },
        {
            "key": "q36_sentiment",
            "pct_neutral": 0.541,
            "pct_negative": 0.186,
            "pct_positive": 0.254
        },
        {
            "key": "q39_sentiment",
            "pct_neutral": 0.665,
            "pct_negative": 0.154,
            "pct_positive": 0.173
        }
    ]
}

// console.log(get_labels(data['sentiment_fields']))
console.log(get_datasets(data['sentiment_fields']))
draw_sentiment_fields(data['sentiment_fields'])

function draw_sentiment_fields(d){
    console.log('test');
    
    let ctx = document.getElementById("chart")
    let chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: get_labels(d),
            datasets: get_datasets(d)
        },
        options: {
            title :{
                display: true, 
                text: 'Sentiment for Questions'
            }, 
            scales: {
                    xAxes: [{ stacked: true }],
                    yAxes: [{ stacked: true }]
            }
        }
        
    })
}

function get_labels(data){
    let key_array = new Array
    for (i = 0; i < data.length; i++){
        key_array.push(data[i].key)
    }
    return key_array
}

function get_datasets(data){
    let data_array = new Array;
    let positive_object = {label: 'Positive', backgroundColor: '#1f8e3f'}
    // rgba(31, 142, 63, 1)
    let neutral_object = {label: 'Neutral',  backgroundColor:'#c3c3bb'}
    // rgba(195, 195, 187, 1)
    let negative_object = {label: 'Negative',  backgroundColor: '#fa3333'}
    //  rgba(250, 51, 51, 1)
    let positive_array = new Array;
    let neutral_array = new Array;
    let negative_array = new Array;
    for (i = 0; i< data.length; i++){
        console.log(data[i])
        positive_array.push(data[i].pct_positive);
        neutral_array.push(data[i].pct_neutral);
        negative_array.push(data[i].pct_negative)
    }
    positive_object["data"] =  positive_array;
    neutral_object["data"] =  neutral_array;
    negative_object["data"] =  negative_array;
    console.log(positive_object)

    data_array.push(positive_object, neutral_object, negative_object)
    return data_array
}