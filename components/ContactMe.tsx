import { Col, Row, Form, Input, Button } from "antd";
import React, { useState } from "react";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { ISendMessage, MessageDetails } from "../models/IMessage";
import { useQuery,useMutation } from "@apollo/client";
import { LOAD_MESSAGES } from "../GraphQL/Queries";
import { CREATE_MESSAGE } from "../GraphQL/Mutations";

export const ContactMe = () => {
  const { error, loading, data } = useQuery(LOAD_MESSAGES);
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [messageInfo, setMessageInfo] = useState<ISendMessage>(new MessageDetails());
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    message
  } = messageInfo;
  const [addMessage] = useMutation(CREATE_MESSAGE);

  const onSubmit = () => {
    addMessage({
      variables: messageInfo
    });

    if (error) {
      console.log(error);
    }
    else {
      form.resetFields();
      setMessageInfo(new MessageDetails())
    }
};
  return (
    <div>
    
      <Row
        align="middle"
        justify="space-around"
        style={{ marginBottom: "5px" }}
      >
        <Col xs={24} sm={18} md={12} lg={10} xl={10}>
          <div
            style={{
              padding: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "45px",
                color: "#ffff",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Get in Touch
            </h2>
            <Form form={form} layout="vertical" onFinish={onSubmit}>
              <Form.Item
                name="firstname"
                label={<label style={{ color: "#ffff" }}>First Name</label>}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginBottom: "10px",
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} 
                 value={firstName}
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMessageInfo({ ...messageInfo, firstName: event.target.value })
                 }
                />
              </Form.Item>
              <Form.Item
                name="lastname"
                label={<label style={{ color: "#ffff" }}>Last Name</label>}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 10px 16px",
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input your Last tName!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} 
                 value={lastName}
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMessageInfo({ ...messageInfo, lastName: event.target.value })
                 }
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<label style={{ color: "#ffff" }}>Email </label>}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginBottom: "10px",
                }}
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} 
                 value={email}
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMessageInfo({ ...messageInfo, email: event.target.value })
                 }
                />
              </Form.Item>
              <Form.Item
                name="phone"
                label={<label style={{ color: "#ffff" }}>Phone #</label>}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 10px 16px",
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input prefix={<PhoneOutlined />} 
                 value={mobileNumber}
                 onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMessageInfo({ ...messageInfo, mobileNumber: event.target.value })
                 }
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={<label style={{ color: "#ffff" }}>Message</label>}
                style={{ marginBottom: "10px" }}
                rules={[
                  {
                    required: true,
                    message: "Please input your message!",
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Message" 
                 value={message}
                 onChange={(event) =>
                  setMessageInfo({ ...messageInfo, message: event.target.value as string})
                 }
                />
              </Form.Item>
              <Form.Item >
                <span style={{display:'flex', justifyContent:'center'}} >
                <Button
                  style={{
                   
                    borderRadius: "6px",
                    height: "40px",
                    backgroundColor: "#E94C3D",
                   
            
                    marginTop: "20px",
                  }}
                  type="primary"
                  htmlType="submit"
                  danger
                >
                  Send Message
                </Button>
                </span>
                
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    
    </div>
  );
};
