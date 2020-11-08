import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { useContext } from "react";
import setAuthToken from "../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    // <Animated
    //   animationIn="bounceInLeft"
    //   animationOut="fadeOut"
    //   isVisible={true}
    // >

    <div className={classes.root}>
      <AppBar style={{ background: "black", position: "fixed" }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <span
              style={{
                color: "lightgray",
                fontWeight: "300",
                fontSize: "30px",
                fontFamily: "Lato",
              }}
            >
              Summarizer
            </span>
          </Typography>
          {!authContext.isAuthenticated ? (
            <Fragment>
              <Button>
                <span
                  style={{
                    // color: "lightgray",
                    fontWeight: "600",
                    fontSize: "20px",
                    fontFamily: "Open Sans",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "lightgray" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
              </Button>
              <Button>
                <span
                  style={{
                    // color: "lightgray",
                    fontWeight: "600",
                    fontSize: "20px",
                    fontFamily: "Open Sans",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "lightgray" }}
                    to="/register"
                  >
                    Register
                  </Link>
                </span>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button>
                <span
                  style={{
                    // color: "lightgray",
                    fontWeight: "600",
                    fontSize: "20px",
                    fontFamily: "Open Sans",
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "lightgray" }}
                    to="/logout"
                  >
                    Logout
                  </Link>
                </span>
              </Button>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                }}
              >
                Hello , {authContext.user.name}
              </h4>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
    // </Animated>
  );
}
