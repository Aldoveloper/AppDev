import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined,
  LoginOutlined,
  FileProtectOutlined,
  FilterOutlined,
  LogoutOutlined,
  PoweroffOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";


const { Sider, Content } = Layout;
const navigationData = [
  {
    label: "Chat",
    key: "chat",
    icon: <MessageOutlined />,
    path: "chat",
  },
//   {
//     label: "Filtrar Productos",
//     key: "products",
//     icon: <FilterOutlined />,
//     path: "products",
//   },
//   {
//     label: "Validación de productos",
//     key: "products/validate",
//     icon: <FileProtectOutlined />,
//     path: "products/validate",
//   },

];

const Sidebar = ({ children }) => {
  const navigate = useNavigate();


  
  
  return (
    <Layout style={{ height: "100vh", background: "#fff" }}>
      <Sider
        style={{
          background: "#F6F6F6",
        }}
      >
        <div className="logo" />
        <Menu
        style={{ background: '#F6F6F6'}}
          className="h-100 m-2"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={navigationData}
          onClick={({ key }) => {
            // if (key === "cerrarsesion") {
            //   localStorage.removeItem("token");
            //   navigate("/login");
            // } else {
            //   navigate(key);
            // }
            navigate(key);
          }}
        >
       
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "24px", background: "#fff" }}>
        
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
