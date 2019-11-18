import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

const ListTaskDepartment = loadable(() =>
  import("../pages/ListTaskPage/index")
);
const ListTaskEmployee = loadable(() =>
  import("../pages/ListTaskPage/ListTaskEmployee/index")
);
const Account = loadable(() => import("../pages/Account/index"));
const DashBoard = loadable(() => import("../pages/DashBoard/index"));
const DetailTask = loadable(() => import("../pages/ListTaskPage/DetailTask"));
const CreateTaskPage = loadable(() => import("../pages/CreateTaskPage/index"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <DashBoard />
  },
  {
    path: "/list-task-department",
    component: () => <ListTaskDepartment />
  },
  {
    path: "/list-task-employee",
    component: () => <ListTaskEmployee />
  },
  {
    path: "/detail-task",
    component: () => <DetailTask />
  },
  {
    path: "/account",
    component: () => <Account />
  },
  {
    path: "/create-task",
    component: () => <CreateTaskPage />
  },
  {
    path: "*",
    component: class NotFound extends React.PureComponent {
      static propTypes = {
        staticContext: PropTypes.object
      };

      constructor(props, context) {
        super(props, context);

        if (this.props.staticContext) {
          this.props.staticContext.code = 404;
        }
      }

      render() {
        return (
          <div className="not-found">
            <b>Lỗi 404|Trang không tồn tại!</b>
          </div>
        );
      }
    }
  }
];

export default () => (
  <Switch>
    {routes.map(({ path, exact = false, component }, index) => {
      return (
        <Route key={index} exact={exact} path={path} component={component} />
      );
    })}
  </Switch>
);
