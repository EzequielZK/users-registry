let feedbackModalRef = null;

export function setFeedbackModalRef(ref) {
  feedbackModalRef = ref;
}

function defaultModal(
  text,
  options = { width: "unset", height: "unset", props: {} }
) {
  if (!feedbackModalRef) {
    return;
  }

  feedbackModalRef.setModalProps(text, options);
}

export function closeModal() {
  feedbackModalRef.close();
}

export default { defaultModal };
