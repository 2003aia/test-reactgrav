import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [hover, setHover] = useState(null);
  const [hover2, setHover2] = useState(null);
  const [hover3, setHover3] = useState(null);

  const navigate = useNavigate();
  const data = [
    { title: "Активные", value: 13, color: "#eee" },
    { title: "Неактивные", value: 4, color: "silver" },
    { title: "Завершенные", value: 7, color: "grey" },
  ];
  const data2 = [
    { title: "Активные", value: 4, color: "#eee" },
    { title: "Неактивные", value: 5, color: "silver" },
    { title: "Завершенные", value: 3, color: "grey" },
  ];
  const data3 = [
    { title: "Активные", value: 5, color: "#eee" },
    { title: "Неактивные", value: 5, color: "silver" },
    { title: "Завершенные", value: 4, color: "grey" },
  ];
  console.log(hover, "hover value");
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px 0" }}>
      <div
        class="col-12"
        style={{
          display: "flex",
          justifyContent: "space-between",
          wordBreak: "break-word",
        }}
      >
        <button
          onClick={() => {
            delete localStorage.AUTH_TOKEN;
            navigate("/");
          }}
          type="submit"
          class="btn btn-primary"
        >
          Logout
        </button>
        <h1>Dashboard</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: 5,
          textAlign: "left",
          fontSize: 15,
          fontWeight: "600",
        }}
      >
        <div>
          <PieChart
            style={{ width: 200, height: 200, padding: 10 }}
            label={() => {
              if (hover === null) {
                return 24;
              }
              if (hover === 0) {
                return data[0].value;
              }
              if (hover === 1) {
                return data[1].value;
              }
              if (hover === 2) {
                return data[2].value;
              }
            }}
            labelPosition={0}
            rounded={30}
            onMouseOut={(e, segment) => {
              setHover(null);
            }}
            onMouseOver={(e, segment) => {
              setHover(segment);
            }}
            lineWidth={10}
            data={data}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 5px",
            }}
          >
            <div>
              <p>Всего:</p>
              <p
                style={{
                  color: hover === 0 ? "purple" : "black",
                  borderBottom: hover == 0 ? "2px solid purple" : "",
                }}
              >
                Активных:
              </p>
              <p
                style={{
                  color: hover === 1 ? "purple" : "black",
                  borderBottom: hover == 1 ? "2px solid purple" : "",
                }}
              >
                Неактивных:
              </p>
              <p
                style={{
                  color: hover === 2 ? "purple" : "black",
                  borderBottom: hover == 2 ? "2px solid purple" : "",
                }}
              >
                Завершенных:
              </p>
            </div>
            <div>
              <p>24</p>
              <p>{data[0].value}</p>
              <p>{data[1].value}</p>
              <p>{data[2].value}</p>
            </div>
          </div>
        </div>
        <div>
          <PieChart
            style={{ width: 200, height: 200, padding: 10 }}
            label={() => {
              if (hover2 === null) {
                return 12;
              }
              if (hover2 === 0) {
                return data2[0].value;
              }
              if (hover2 === 1) {
                return data[1].value;
              }
              if (hover2 === 2) {
                return data[2].value;
              }
            }}
            onMouseOut={(e, segment) => {
              setHover2(null);
            }}
            onMouseOver={(e, segment) => {
              setHover2(segment);
            }}
            labelPosition={0}
            rounded={30}
            lineWidth={10}
            data={data2}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 5px",
            }}
          >
            <div>
              <p>Всего:</p>
              <p
                style={{
                  color: hover2 === 0 ? "purple" : "black",
                  borderBottom: hover2 == 0 ? "2px solid purple" : "",
                }}
              >
                Активных:
              </p>
              <p
                style={{
                  color: hover2 === 1 ? "purple" : "black",
                  borderBottom: hover2 == 1 ? "2px solid purple" : "",
                }}
              >
                Неактивных:
              </p>
              <p
                style={{
                  color: hover2 === 2 ? "purple" : "black",
                  borderBottom: hover2 == 2 ? "2px solid purple" : "",
                }}
              >
                Завершенных:
              </p>
            </div>
            <div>
              <p>12</p>
              <p>{data2[0].value}</p>
              <p>{data2[1].value}</p>
              <p>{data2[2].value}</p>
            </div>
          </div>
        </div>

        <div>
          <PieChart
            style={{ width: 200, height: 200, padding: 10 }}
            labelPosition={0}
            rounded={30}
            lineWidth={10}
            data={data3}
            label={() => {
              if (hover3 === null) {
                return 14;
              }
              if (hover3 === 0) {
                return data3[0].value;
              }
              if (hover3 === 1) {
                return data3[1].value;
              }
              if (hover3 === 2) {
                return data3[2].value;
              }
            }}
            onMouseOut={(e, segment) => {
              setHover3(null);
            }}
            onMouseOver={(e, segment) => {
              setHover3(segment);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 5px",
            }}
          >
            <div>
              <p>Всего:</p>
              <p
                style={{
                  color: hover3 === 0 ? "purple" : "black",
                  borderBottom: hover3 == 0 ? "2px solid purple" : "",
                }}
              >
                Активных:
              </p>
              <p
                style={{
                  color: hover3 === 1 ? "purple" : "black",
                  borderBottom: hover3 == 1 ? "2px solid purple" : "",
                }}
              >
                Неактивных:
              </p>
              <p
                style={{
                  color: hover3 === 2 ? "purple" : "black",
                  borderBottom: hover3 == 2 ? "2px solid purple" : "",
                }}
              >
                Завершенных:
              </p>
            </div>
            <div>
              <p>14</p>
              <p>{data3[0].value}</p>
              <p>{data3[1].value}</p>
              <p>{data3[2].value}</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          textAlign: "left",
          padding: 5,
        }}
      ></div> */}
    </div>
  );
};

export default Dashboard;
