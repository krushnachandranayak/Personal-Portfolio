import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5" style={{ backgroundColor: '#e9ecef' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#007bff' }}><i className="bi bi-mortarboard"></i> Education</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Matriculation</h5>
                <h6 className="card-subtitle mb-2">Podapada Nodal High School, Podapada</h6>
                <h6 className="card-subtitle mb-2 text-muted">BSE Odisha board</h6>
                <p className="card-text">Completed: 2018</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Higher Study (+2)</h5>
                <h6 className="card-subtitle mb-2">Anmol Higher Secondary School of Science &Commerce,Bhubaneswar</h6>
                <h6 className="card-subtitle mb-2 text-muted">CHSE Odisha</h6>
                <p className="card-text">Completed: 2020</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bachelor's of Computer Application</h5>
                <h6 className="card-subtitle mb-2">Raneswar Institute of Manegement and Information Technology, Angul</h6>
                <h6 className="card-subtitle mb-2 text-muted">Utkal University</h6>
                <p className="card-text">Completed: 2023</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Master in Computer Application</h5>
                <h6 className="card-subtitle mb-2">Institute of Professional Studies & Research, Cuttack</h6>
                <h6 className="card-subtitle mb-2 text-muted">Biju Patnaik University of Technology (BPUT)</h6>
                <p className="card-text">Pursuing...</p>
              </div>
            </div>
          </div>
          {/* Add more education entries as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
