import React, { useState } from "react";
import { Row, Col } from "antd";
import card1 from "./gift-card-1.png";
import card2 from "./gift-card-2.png";
export const Offer = () => {
  const [offerItems, setofferItems] = useState([
    {
      src: card1,
      title: "RAMADAN15",
      btnStatus: true,
    },
    {
      src: card2,
      title: "RAMADAN20",
      btnStatus: true,
    },
    {
      src: card1,
      title: "CYBERMONDAY10",
      btnStatus: true,
    },
    {
      src: card2,
      title: "DISCOUNT10",
      btnStatus: true,
    },
    {
      src: card1,
      title: "SUMMER10",
      btnStatus: true,
    },
    {
      src: card2,
      title: "WINTER10",
      btnStatus: true,
    },
    {
      src: card1,
      title: "1AUTUMN10",
      btnStatus: true,
    },
    {
      src: card2,
      title: "WINTER10",
      btnStatus: true,
    },
    {
      src: card1,
      title: "WINTER15",
      btnStatus: true,
    },
    {
      src: card2,
      title: "HALLOWEEN20",
      btnStatus: true,
    },
  ]);

  const OnClickBtn = (index) => {
    let clone = [...offerItems];
    clone[index] = {
      ...clone[index],
      btnStatus: false,
    };
    setofferItems(clone);
  };

  return (
    <div style={{ padding: "100px 0px" }}>
      <Row
        justify="start"
        gutter={[24, 32]}
        style={{ margin: "0", padding: "0 50px" }}
      >
        {offerItems.map((item, index) => {
          return (
            <Col
              key={index}
              className="gutter-row"
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <img src={item.src} alt="" width="100%" height="180" />
              <div
                style={{
                  display: "flex",
                  margin: "0 15px 15px",
                  padding: "8px",
                  backgroundColor: "white",
                }}
              >
                <span style={{ textAlign: "left", width: "200px" }}>
                  {item.title}
                </span>
                <button
                  style={{ border: "none", outline: "none" }}
                  onClick={() => OnClickBtn(index)}
                  disabled={!item.btnStatus}
                >
                  {item.btnStatus ? "Copy" : "Copied"}
                </button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
