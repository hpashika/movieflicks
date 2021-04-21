from flask import Flask, request, jsonify
from flask_cors import CORS
import movies as mv
from prometheus_flask_exporter import PrometheusMetrics, Counter, Summary, Gauge

app = Flask(__name__)
CORS(app)

metrics = PrometheusMetrics(app)
metrics.info("app_info", "App Info, this can be anything you want", version="1.0.0")

app.secret_key = 'h432hi5ohi3h5i5hi3o2hi'

@app.route('/')
def home():
    return jsonify({"message":"Welcome to MovieFlicks"})

browsing = Counter('browsing', 'MovieFlicks Browsing')
searching = Counter('search', 'MovieFlicks Searching')
search_found = Counter('search_found', 'MovieFlicks Movie Found')
search_missing = Counter('search_missing', 'MovieFlicks Movie Not Found')
genre_search = Counter('genre_search', 'Searching movies by Genre', ['genre'])

STREAM_REQUEST_PROCESS_TIME = Summary('stream_request_process_time', 'Time spent processing request')

@app.route('/api/browse', methods=['GET'])
def browse():
    browsing.inc()
    return jsonify(mv.browse())

@app.route('/api/search', methods=['GET'])
def search():
    searching.inc()
    moviename = request.args.get('movie')
    result = mv.search(moviename)
    if 'name' in result:
        search_found.inc()
    else :
        search_missing.inc()

    return jsonify(result)

@app.route('/api/genre', methods=['GET'])
def genre():
    genre_type = request.args.get('type')
    genre_search.labels(genre_type).inc()
    return jsonify(mv.genre(genre_type))

streaming = Gauge('movies_streaming', 'Total Number of Movies Streaming Right Now')
@app.route('/api/start_streaming', methods=['GET'])
@STREAM_REQUEST_PROCESS_TIME.time()
def stream():
    moviename = request.args.get('movie')
    result = mv.streaming(moviename)
    streaming.inc()
    return jsonify(result)

@app.route('/api/end_streaming', methods=['GET'])
def end_stream():  
    streaming.dec()
    moviename = request.args.get('movie') 
    result = mv.end_streaming(moviename)
    return jsonify(result)

@app.route('/api/buggy_code', methods=['GET'])
def buggy_code():  
    result = mv.end_streaming()
    return jsonify(result)
