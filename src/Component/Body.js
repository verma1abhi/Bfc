import React from "react";

const Team = () => {
  return (
    <>
      <section className="teamBlock">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-8 col-s-12">
              <div className="team">
                <h1>Enter Book detail</h1>
                <div class="form-group">
    <label for="exampleFormControlInput1">Book Format </label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Book size</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Book Type</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <button type="button" class="btn btn-outline-success">Calculator</button>

    </div>
    </div>
            <div className="col-xl-4 col-md-4 col-xs-12"> 
              <div className="team">
                <h1>Author Earning Calculator</h1>
                <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Minimum Recommended Price</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
 
 
  <div class="form-group">
    <label for="exampleFormControlInput1">Set selling price </label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
  <button type="button" class="btn btn-outline-success">Calculator</button>

</form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
