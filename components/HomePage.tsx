import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
export const HomePage = () => {
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "50vh" }}>
        <Col xs={20} md={16} lg={12} xl={9}>
          <div>
          <div style={{  display:'flex', justifyContent:'center' }}>
              <Image
                src="/profile.png"
                alt="Picture of the author"
                width={220}
                height={220}
              />
            
          </div>
          </div>
        
        </Col>
        <Col xs={20} md={16} lg={12} xl={9}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "60px",
                margin: "14px",
                textAlign: "center",
              }}
            >
              Hi There !
            </h1>
            <h1
              style={{
                color: "#ffffff",
                margin: "14px",
                textAlign: "center",
              }}
            >
              Hey There, This is Muhammad Aziz. I am a MERN Stack Developer
              having 2 years of experience working with HTML, JavaScript and
              React.js frameworks.
            </h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};
