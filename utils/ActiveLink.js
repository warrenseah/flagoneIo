import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ router, children, ...props }) => {
  // const child = Children.only(children);

  let className = props.className || "";
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{children}</Link>;
};

export default withRouter(ActiveLink);
