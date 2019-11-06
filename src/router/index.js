import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

const ListTaskPage = loadable(() => import("../pages/ListTaskPage/index"));
const ProcessCheck = loadable(() => import("../pages/ProcessCheck/index"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <ListTaskPage />
  },
  {
    path: "/process",
    exact: true,
    component: () => <ProcessCheck />
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
