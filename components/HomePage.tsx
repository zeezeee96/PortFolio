import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
export const HomePage = () => {
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "60vh" }}>
        <Col xs={8} sm={6} md={6} lg={9} >
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
        <Col xs={24} sm={18} md={12} lg={9}>
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
                fontSize: "50px",
                margin: "5px",
                textAlign: "center",
              }}
            >
              Hi There!
            </h1>
            <h1
              style={{
                color: "#ffffff",
                margin: "2px",
                textAlign: "center",
                fontSize:'24px'
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
