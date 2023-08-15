import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
    }
  }, [location.state, navigate]);

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
}

export default Detail;
