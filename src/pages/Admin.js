import React, { Component, Fragment } from "react";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";

const iconlList = [
  {
    name: "20",
    count: "Lista de estudiantes",
    status: "warning",
    icon: "feather-hard-drive",
    des: "20% Incrase from Last Week",
  },
  {
    name: "10",
    count: "clases subidas",
    status: "success",
    icon: "feather-box",
    des: "20% Incrase from Last Week",
  },
  {
    name: "2",
    count: "Cursos activos",
    status: "secondary",
    icon: "feather-flag",
    des: "20% Incrase from Last Week",
  },
];

const orderlList = [
  {
    id: "0901",
    name: "Marvin McKinney",
    email: "marvin@example.com",
    total: "$9.00",
    color: "warning",
    status: "Pending",
    date: "03.12.2020",
  },
  {
    id: "2323",
    name: "Leslie Alexander",
    email: "leslie@example.com",
    total: "$46.61",
    color: "warning",
    status: "Pending",
    date: "21.02.2020",
  },
  {
    id: "1233",
    name: "Esther Howard",
    email: "esther@example.com",
    total: "$12.00",
    color: "danger",
    status: "Canceled",
    date: "03.07.2020",
  },
  {
    id: "1233",
    name: "Esther Howard",
    email: "esther@example.com",
    total: "$12.00",
    color: "danger",
    status: "Canceled",
    date: "03.07.2020",
  },
  {
    id: "2323",
    name: "Jenny Wilson",
    email: "jenny@example.com",
    total: "$589.99",
    color: "success",
    status: "Received",
    date: "22.05.2020",
  },
];

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <Adminsidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <AdminTopnav />

              <div className="container px-3 py-4">
                <div className="row">
                  <div className="col-lg-12 d-flex mb-4">
                    <h2 className="text-grey-900 font-md fw-700">Overview</h2>
                  </div>
                </div>

                <div className="row">
                  {iconlList.map((value, index) => (
                    <div key={index} className="col-lg-3">
                      <div
                        className={`card mb-4 border-0 pt-4 pb-4 text-center alert-${value.status} align-items-center rounded-10`}
                      >
                        <i
                          className={`psor text-white btn-round-md font-xs ${value.icon} bg-${value.status}`}
                        ></i>
                        <h3 className="fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0">
                          {value.name}
                        </h3>
                        <span className="font-xssss ls-0 text-grey-900 fw-700 mt-0">
                          {value.count}
                        </span>
                        <span className="mt-1 text-grey-500 font-xsssss fw-500">
                          {value.des}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <div className="card border-0 mt-2 rounded-10">
                      <div className="card-body d-flex px-4 pt-4 pb-0">
                        <h4 className="font-xss text-grey-800 mt-3 fw-700">
                          Order List
                        </h4>
                        <select
                          className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                          aria-label="Default select example"
                        >
                          <option>Sort by latest</option>
                          <option defaultValue="1">Sort by popularity</option>
                          <option defaultValue="2">
                            Sort by price : low to high
                          </option>
                          <option defaultValue="3">
                            Sort by price : high to low
                          </option>
                        </select>
                      </div>
                      <div className="card-body p-4">
                        <div className="table-responsive">
                          <table className="table table-admin mb-0">
                            <thead className="bg-greylight rounded-10 ovh border-0">
                              <tr>
                                <th className="border-0">ID</th>
                                <th className="border-0" scope="col">
                                  Name
                                </th>
                                <th className="border-0" scope="col">
                                  Email
                                </th>
                                <th className="border-0" scope="col">
                                  Status
                                </th>
                                <th scope="col" className="text-end border-0">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {orderlList.map((value, index) => (
                                <tr key={index}>
                                  <td>{value.id}</td>
                                  <td>
                                    <b>{value.name}</b>
                                  </td>
                                  <td>{value.email}</td>
                                  <td>
                                    <span
                                      className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-3 ls-2 alert-${value.color}`}
                                    >
                                      {value.status}
                                    </span>
                                  </td>
                                  <td className="product-remove text-end">
                                    <a href="/admin">
                                      <i className="feather-edit me-1 font-xs text-grey-500"></i>
                                    </a>
                                    <a href="/admin">
                                      <i className="ti-trash  font-xs text-danger ml-3"></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Adminfooter />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Admin;
