import React, { useEffect, useState } from "react";
import "../../assets/css/login.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { getPlanets } from "./planets-service.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const Planets = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPlanets().then((items) => {
      //const i = items;
      if (mounted) {
        setList(items.results);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Grid container justify="center" spacing="2">
          {list.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>{value.name} </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Planets;
