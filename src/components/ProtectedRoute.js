import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, validate, ...rest }) => {
  return (
    <Route
      render={() => {
        if (validate()) {
          return <Redirect to="/login" />;
        }
        return <Component />;
      }}
    />
  );
};
