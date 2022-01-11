import { Container, ContrastContainer, Text } from "../../../styles/components";
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
      <Container
        fullWidth
        position="absolute"
        zIndex={2000}
        top="-55px"
        // right="550px"
        align="center"
        animationName={animation}
        animationDuration="0.5s"
        animationFillMode="forwards"
        onMobile={{ height: "unset" }}
      >
        <ContrastContainer
          bgColor={theme?.bgColor}
          rounded
          boxShadow="0 0 10px 0 gray"
          zIndex={2500}
        >
          <Text color={theme?.color}>{text}</Text>
        </ContrastContainer>
      </Container>
    );
  }
}

export default FeedbackModal;
