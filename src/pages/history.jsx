import Head from "next/head";
import { connect } from "react-redux";
import { getProductsHistoryAction } from "../redux/product.action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const History = (props) => {
  const { isLoading, getProductsHistoryAction, products } = props;
  const classes = useStyles();
  useEffect(() => {
    getProductsHistoryAction();
  }, [getProductsHistoryAction]);
  return (
    <div className="container">
      <Head>
        <title>History</title>
      </Head>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {products &&
                products.map &&
                products.map((product, idx) => (
                  <Grid item key={idx}>
                    <Paper className={classes.paper}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={product.img.url}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {product.name}
                            </Typography>
                            <div variant="body2" color="textSecondary">
                              <Typography color="textPrimary">{product.category}</Typography>
                              <Typography color="textSecondary">$ {product.cost}</Typography>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.history,
    isLoading: state.products.isLoading,
  };
};

const mapDispatchToProps = {
  getProductsHistoryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
}));
