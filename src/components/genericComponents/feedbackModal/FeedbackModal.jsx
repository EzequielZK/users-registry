import { ContrastContainer, Text } from "../../../styles/components";
import { setFeedbackModalRef } from "../../genericComponents/feedbackModal/openFeedbackModal";
import React from "react";
import {
  MOVE_FROM_TOP,
  MOVE_TO_TOP,
} from "../../../animations/feedbackModal/feedbackModalAnimation";

class FeedbackModal extends React.Component {
  state = {
    open: false,
    type: "",
    text: "",
    animation: "",
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

  setModalProps = (text, type) => {
    this.setState({ text, type, open: true, animation: MOVE_FROM_TOP });
  };

  getTypeModal = (type) => {
    const modalType = {
      success: {
        bgColor: "primary",
        color: "contrastBackground",
      },
      error: {
        bgColor: "error",
        color: "contrastBackground",
      },
    };
    return modalType[type];
  };

  render() {
    const { text, type, animation } = this.state;
    const theme = this.getTypeModal(type);

    return (
      <ContrastContainer
        rounded
        position="absolute"
        zIndex={2000}
        top="-50px"
        right="550px"
        boxShadow="0 0 10px 0 gray"
        bgColor={theme?.bgColor}
        animationName={animation}
        animationDuration="0.5s"
        animationFillMode="forwards"
        onMobile={{ height: "unset" }}
      >
        <Text color={theme?.color}>{text}</Text>
      </ContrastContainer>
    );
  }
}

export default FeedbackModal;
