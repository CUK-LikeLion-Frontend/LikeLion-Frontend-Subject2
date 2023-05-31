import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Firstimg from "../assets/firstimg.jpg";
import Secondimg from "../assets/secondimg.jpg";
import Thirdimg from "../assets/thirdimg.jpg";
import { Layout } from "../components/Layout/layout";

function AlbumDetail() {
  let [alert, alertSet] = useState(true);
  let [inputData, inputDataSet] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 3000);
  });

  let { id } = useParams();

  switch (id) {
    case "1":
      return (
        <Layout>
          <div>
            {inputData}

            <span
              onChange={(e) => {
                inputDataSet(e.target.value);
              }}
            />

            {alert === true ? (
              <div className="my-alert2">
                <p>3초 안에 구매하면 30프로 할인!!!</p>
              </div>
            ) : null}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <img src={Firstimg} alt="Firstimg" className="detailimgsize" />
            <div>
              <p className="detailtextsize">
                <b style={{ fontSize: "20px" }}>LovePoem</b>
              </p>
              <p>The 5th Mini Album</p>
              {alert === true ? <p>14,000원</p> : <p>20,000원</p>}
              <button className="button">주문하기</button>
            </div>
          </div>
        </Layout>
      );
    case "2":
      return (
        <Layout>
          <div>
            {inputData}

            <span
              onChange={(e) => {
                inputDataSet(e.target.value);
              }}
            />

            {alert === true ? (
              <div className="my-alert2">
                <p>3초 안에 구매하면 30프로 할인!!!</p>
              </div>
            ) : null}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <img src={Secondimg} alt="Secondimg" className="detailimgsize" />
            <div>
              <p className="detailtextsize">
                <b style={{ fontSize: "20px" }}>LILAC</b>
              </p>
              <p>The 5th Album</p>
              {alert === true ? <p>14,000원</p> : <p>20,000원</p>}
              <button className="button">주문하기</button>
            </div>
          </div>
        </Layout>
      );
    case "3":
      return (
        <Layout>
          <div>
            {inputData}

            <span
              onChange={(e) => {
                inputDataSet(e.target.value);
              }}
            />

            {alert === true ? (
              <div className="my-alert2">
                <p>3초 안에 구매하면 30프로 할인!!!</p>
              </div>
            ) : null}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <img src={Thirdimg} alt="Thirdimg" className="detailimgsize" />
            <div>
              <p className="detailtextsize">
                <b style={{ fontSize: "20px" }}>Palette</b>
              </p>
              <p>The 4th Album</p>
              {alert === true ? <p>14,000원</p> : <p>20,000원</p>}
              <button className="button">주문하기</button>
            </div>
          </div>
        </Layout>
      );
  }
}

export default AlbumDetail;
