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
In browser open http://localhost:80/ , you will be shown an interface to browse, select , play movies. Feel free to open in multiple tabs and hit the buttons

Alternatively you can curl as below.

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

Create Prometheus DataSource

https://github.com/hpashika/movieflicks/blob/main/images/DatasourceMenu.png
https://github.com/hpashika/movieflicks/blob/main/images/AddDataSource.png
https://github.com/hpashika/movieflicks/blob/main/images/Configuration.png
https://github.com/hpashika/movieflicks/blob/main/images/PrometheusSetting.png

Create Dashboard
https://github.com/hpashika/movieflicks/blob/main/images/ImportMenu.png
https://github.com/hpashika/movieflicks/blob/main/images/ImportDashboardJson.png

Paste Json content from MovieFlicks.json file from the repo.

Dashboard
https://github.com/hpashika/movieflicks/blob/main/images/GrafanaDashboard.png
