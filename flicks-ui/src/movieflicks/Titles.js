function Titles({ flicks }) {
  return (
    <div class="container-fluid">
      <div class="row">
        {flicks.map((flick, index) => {
          return (
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">{flick['name']}</div>
                <div class="panel-body">
                  <a href="#">
                    <img
                      src={flick['image']}
                      class="img-responsive"
                      alt={flick['name']}
                    />
                  </a>
                  <br />
                  <p>{flick['description']}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Titles;
