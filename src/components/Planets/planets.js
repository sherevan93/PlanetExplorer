import React, { useEffect, useState } from "react";
import "../../assets/css/login.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { getPlanets } from "./planets-service.js";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "auto",
    width: 300,
    padding: theme.spacing(2),
  },
  planetName: {
    textAlign: "center",
    backgroundColor: "Gray",
    borderRadius: 2,
    color: "white",
  },
  header: {
    backgroundColor: "white",
    display: "block",
    width: "auto",
  },
  p: {
    textAlign: "right",
  },
}));

const Planets = (props) => {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPlanets().then((items) => {
      if (mounted) {
        setList(items.results);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <header className={classes.header}>
        <div className="container">
          <h4>Planet Explorer</h4>
          <p className={classes.p}>Welcome: &nbsp; {props.username}</p>
        </div>
      </header>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <Grid container className={classes.root}>
            <Grid item xs={12} sm={12}>
              <Grid container justify="center" spacing={2}>
                {list
                  .sort(
                    ({ population: previousID }, { population: currentID }) =>
                      currentID - previousID
                  )
                  .map((value) => (
                    <Grid key={value} item>
                      <Paper className={classes.paper}>
                        <Typography
                          className={classes.planetName}
                          gutterBottom
                          variant="subtitle1"
                        >
                          {value.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Population: {value.population}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
});

export default connect(mapStateToProps, null)(Planets);
