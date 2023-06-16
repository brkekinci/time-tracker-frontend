import {
  faSearch,
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table } from "@themesberg/react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const IndexTable = ({
  headers,
  renderRows,
  headerProps,
  title,
  cardProps,
  pagination,
  filter,
  loading,
  navigationButtons,
  setOrder,
  setSearch,
  searchable,
}) => {
  const [direction, setDirection] = useState("");
  const [orderVal, setOrderVal] = useState("");

  const OrderBy = (val) => {
    if (direction.length == 0) {
      setDirection("ASC");
      setOrderVal(val);
      setOrder(`Order=${val}:ASC`);
    } else if (direction == "ASC") {
      setDirection("DESC");
      setOrderVal(val);
      setOrder(`Order=${val}:DESC`);
    } else {
      setDirection("");
      setOrderVal("");
      setOrder("");
    }
  };

  useEffect(() => {
    const table = document.querySelector(".table");
    const tableResponsive = document.querySelector(".table-responsive");
    const fakeTable = document.querySelector(".fake-table");
    const fakeTableResponsive = document.querySelector(
      "#fake-table-responsive"
    );

    fakeTable.style.width = `${table.offsetWidth}px`;
    fakeTableResponsive.style.width = `${tableResponsive.offsetWidth}px`;
    fakeTableResponsive.scrollLeft = tableResponsive.scrollLeft;

    const handleTableScroll = () =>
      (fakeTableResponsive.scrollLeft = tableResponsive.scrollLeft);
    const handleFakeTableScroll = () =>
      (tableResponsive.scrollLeft = fakeTableResponsive.scrollLeft);

    const handleResize = () => {
      fakeTable.style.width = `${table.offsetWidth}px`;
      fakeTableResponsive.style.width = `${tableResponsive.offsetWidth}px`;
    };

    tableResponsive.addEventListener("scroll", handleTableScroll);
    fakeTableResponsive.addEventListener("scroll", handleFakeTableScroll);
    window.addEventListener("resize", () => handleResize());
    return () => {
      tableResponsive.removeEventListener("scroll", handleTableScroll);
      fakeTableResponsive.removeEventListener("scroll", handleFakeTableScroll);
      window.removeEventListener("resize", () => handleResize());
    };
  }, [loading]);

  const renderHeaders = (headers) =>
    headers.map((header, index) => {
      if (typeof header === "object") {
        return (
          <th
            key={index}
            className={`border-0 ${headerProps} `}
            onClick={() => (header.sortable ? OrderBy(header.value) : null)}
          >
            {header.label}
            {header.sortable ? (
              <FontAwesomeIcon
                className="mx-1"
                icon={
                  orderVal == header.value
                    ? direction == "ASC"
                      ? faSortUp
                      : faSortDown
                    : faSort
                }
              />
            ) : null}
          </th>
        );
      }
      return (
        <th key={index} className={`border-0 ${headerProps} `}>
          {header}
        </th>
      );
    });

  return (
    <Card border="light" className={`shadow-sm mb-4 ${cardProps}`}>
      {title ? (
        <Card.Header className="fs-5 text-center">{title}</Card.Header>
      ) : null}
      <Card.Body className="pb-0">
        <div className="d-flex justify-content-between align-items-center pb-3">
          <div>{filter}</div>
          {searchable ? (
            <div className="row">
              <div className="input-group-merge search-bar input-group col-xl-4 col-6">
                <span className="input-group-text">
                  <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  style={{ maxWidth: "90%" }}
                  onChange={(e) => setSearch(`Search=${e.target.value}`)}
                />
              </div>
            </div>
          ) : null}
        </div>
        <div
          id="fake-table-responsive"
          className={
            renderRows?.length >= 8 && !loading
              ? "fake-table-responsive-scroll"
              : "fake-table-responsive"
          }
        >
          <div className="fake-table"></div>
        </div>
        <Table
          responsive
          className="table-centered table-nowrap rounded mb-0 table-hover"
        >
          <thead className="thead-light text-left">
            <tr className="">{renderHeaders(headers)}</tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="text-center">
                <td colSpan="100%">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : renderRows != null ? (
              renderRows
            ) : (
              <tr className="">
                <td colSpan="100%" className="text-center">
                  {"no-data-found"}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <div className="d-flex align-items-center justify-content-end my-4">
          {pagination}
        </div>
        {navigationButtons}
      </Card.Body>
    </Card>
  );
};

export default IndexTable;
