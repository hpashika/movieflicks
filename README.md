# A Sample application telling how to collect metrics from a Python Flask App

This repository creates a simple python webserver with endpoints. The application is modeled like a Media Streaming app. Each of the endpoints return
movie/series titles.

While you invoke the endpoints the app exports the metrics to prometheus and they can be monitored in a Graphana Dashboard.

## Prequisites

You will need to have the following installed locally to complete this workshop:

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

If you're running Docker for Desktop for macOS or Windows, Docker Compose is already included in your installation.

Note : I have only tried this on a Mac.

## Running

To start the sample application and the supporting services:

```
docker-compose up -d
```

Inovke Endpoints :

```
curl "http://localhost:5000/api/browse" | jq
curl "http://localhost:5000/api/search?movie=Crown" | jq
curl "http://localhost:5000/api/search?movie=Ozark" | jq
curl "http://localhost:5000/api/search?movie=Evil%20Dead" | jq
curl "http://localhost:5000/api/genre?type=crime" | jq
curl "http://localhost:5000/api/genre?type=crime" | jq
curl "http://localhost:5000/api/genre?type=crime" | jq
curl "http://localhost:5000/api/genre?type=comedy" | jq
curl "http://localhost:5000/api/genre?type=comedy" | jq
curl "http://localhost:5000/api/genre?type=drama" | jq
curl "http://localhost:5000/api/start_streaming?movie=Money%20Heist" | jq
curl "http://localhost:5000/api/start_streaming?movie=Breaking%20Bad" | jq
curl "http://localhost:5000/api/start_streaming?movie=Breaking%20Bad" | jq
curl "http://localhost:5000/api/buggy_code?movie=Breaking%20Bad" | jq
```

To see the metrics emitted by the app
```
http://localhost:5000/metrics
```

To build the dashboard
Visit 
```
http://localhost:3000/ (admin/admin)
``` 




bash-5.0$ export http_proxy=http://www-proxy-hqdc.us.oracle.com:80/
bash-5.0$ export https_proxy=http://www-proxy-hqdc.us.oracle.com:80/
bash-5.0$ export no_proxy=localhost,127.0.0.1,.us.oracle.com,.oraclecorp.com,*.oc9qadev.com
bash-5.0$ grafana-cli plugins install marcusolsson-csv-datasource
installing marcusolsson-csv-datasource @ 0.4.1
from: https://grafana.com/api/plugins/marcusolsson-csv-datasource/versions/0.4.1/download
into: /var/lib/grafana/plugins

✔ Installed marcusolsson-csv-datasource successfully 

Restart grafana after installing plugins . <service grafana-server restart>