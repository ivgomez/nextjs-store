import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { CardMedia, CardActions, Button } from "@material-ui/core";

export const ModalComponent = (props) => {
  const { open, setOpen, handleModal, product, productRedeemAction } = props;
  const classes = useStyles();
  const redeem = () => {
    const productId = product._id;
    console.log(product);
    productRedeemAction(product);
    setOpen(!open);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{product.name}</h2>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={product?.img?.url}
              title="Contemplative Reptile"
            />
            <CardActions className={classes.Override}>
              <Button variant="contained" color="primary" onClick={redeem}>
                Redeem
              </Button>
            </CardActions>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Override: {
    justifyContent: "center",
    paddingTop: 20,
  },
}));
