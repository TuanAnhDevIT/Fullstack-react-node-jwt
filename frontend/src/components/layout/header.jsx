import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/auth.context";
const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  console.log(">>>check auth: ", auth);

  const items = [
    {
      label: <Link to={"/"}>Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },

    ...(auth?.isAuthenticated
      ? [
          {
            label: <Link to={"/user"}>Users</Link>,
            key: "user",
            icon: <MailOutlined />,
          },
        ]
      : []),

    {
      label: `Welcome ${auth?.user?.name}`,
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        ...(auth?.isAuthenticated
          ? [
              {
                label: (
                  <span
                    onClick={() => {
                      localStorage.clear("access_token");
                      setCurrent("home");
                      setAuth({
                        isAuthenticated: false,
                        user: {
                          emai: "",
                          name: "",
                        },
                      });
                      navigate("/");
                    }}
                  >
                    Đăng xuất
                  </span>
                ),
                key: "logout",
              },
            ]
          : [
              {
                label: <Link to={"/login"}>Đăng nhập</Link>,
                key: "login",
              },
            ]),
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
