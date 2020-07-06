import Head from "next/head";
import { connect } from "react-redux";
import { getProductsAction } from "../redux/product.action";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ModalComponent } from "../components/ModalComponent";

const Index = (props) => {
  const { isLoading, data, getProductsAction, products } = props;
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const classes = useStyles();
  useEffect(() => {
    getProductsAction();
  }, [getProductsAction]);

  const handleModal = (product) => {
    setProduct(product);
    setOpen(!open);
  };

  console.log(products);
  return (
    <div className="container">
      <Head>
        <title>Store</title>
      </Head>
      <Typography paragraph>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {products &&
                products.map((product) => (
                  <Grid item>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                              <Typography gutterBottom variant="textPrimary" component="p">
                                {product.category}
                              </Typography>
                              <Typography gutterBottom variant="textSecondary" component="p">
                                $ {product.cost}
                              </Typography>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary" onClick={() => handleModal(product)}>
                            Buy
                          </Button>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Typography>
      <ModalComponent open={open} setOpen={setOpen} handleModal={handleModal} product={product} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isLoading: state.products.isLoading,
  };
};

const mapDispatchToProps = {
  getProductsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
}));
