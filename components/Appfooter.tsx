import { Row, Col } from "antd";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
export default function AppFooter() {
  let router = useRouter();
  return (
    <div style={{ paddingTop: "10px" }}>
      <Row align="middle" justify="space-around">
        <Col xs={6}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, textAlign: "left" }}>
            <span style={{ color: "#ffffff" }}>Reach Me</span>
          </h1>

          <p style={{ textAlign: "left" }}>
            Email:{" "}
            <span style={{ color: "#ffffff" }}>
              {" "}
              <a href="mailto: apradirectory@gmail.com">aziz@pursue.today</a>
            </span>
          </p>
        </Col>
        <Col xs={8}>
          <iframe
            title="Map"
            width="100%"
            height="135"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=M.Yousaf's%20Electronics%20and%20Printing+(MERN%20Engineer)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ borderRadius: "30px" }}
          ></iframe>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }} align="top">
        <Col xs={20} offset={2}>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3
              style={{
                color: "#ffffff",
                margin: "6px",
                fontSize:'14px'
              }}
            >
              © 2021, Muhammad Aziz. All rights reserved.
            </h3>
            <div>
              <LinkedinOutlined
                style={{ fontSize: "14px", margin: "6px", cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/muhammad-aziz-4597339b/"
                  )
                }
              />
              <GithubOutlined
                style={{ fontSize: "14px", margin: "6px", cursor: "pointer" }}
                onClick={() => router.push("https://github.com/zeezeee96")}
              />

              <TwitterOutlined
                style={{ fontSize: "14px", margin: "6px" , cursor: "pointer"}}
                onClick={() => router.push("https://twitter.com/zeeezeee96")}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
