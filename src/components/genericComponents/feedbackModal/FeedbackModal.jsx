import {
  ContrastContainer,
  ModalBackground,
  Text,
} from "../../../styles/components";
import { setFeedbackModalRef } from "./openFeedbackModal";
import React from "react";
import { OutsideClick } from "../..";
import {
  MOVE_FROM_TOP,
  MOVE_TO_TOP,
} from "../../../animations/feedbackModal/feedbackModalAnimation";

class FeedbackModal extends React.Component {
  state = {
    open: false,
    options: {},
    text: "",
    animation: MOVE_TO_TOP,
  };

  componentDidMount() {
    setFeedbackModalRef(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.open && this.state.open) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  }

  close = () => {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false, animation: MOVE_TO_TOP });
    }
  };

  setModalProps = (text, options) => {
    this.setState({ text, options, open: true, animation: MOVE_FROM_TOP });
  };

  render() {
    const { open, text, options, animation } = this.state;
    // const { props } = options;

    return (
      <ContrastContainer
        rounded
        width={options.width}
        h={options.height}
        position="absolute"
        zIndex={2000}
        top="-50px"
        right="5px"
        boxShadow="0 0 10px 0 gray"
        animationName={animation}
        animationDuration="0.5s"
        animationFillMode="forwards"
        onMobile={{ height: "unset" }}
      >
        <Text>{text}</Text>
        adsadsadsa
      </ContrastContainer>
    );
  }
}

export default FeedbackModal;
