import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        Icon: (
          <PersonOutlined
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgb(245, 206, 214)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        Icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "gold", backgroundColor: "rgb(243, 236, 203)" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "VIew net earnings",
        Icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", backgroundColor: "rgb(185, 223, 185)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        Icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: "purple", backgroundColor: "rgb(248, 213, 248)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$ "}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {`${diff} %`}
        </div>
        {data.Icon}
      </div>
    </div>
  );
};

export default Widget;
