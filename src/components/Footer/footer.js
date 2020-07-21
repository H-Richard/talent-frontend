import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function FooterInfo() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="/">
        Talent
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 4),
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body1">
        Built with React, Redux, Typescript and{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </Typography>
      <FooterInfo />
    </footer>
  );
}
