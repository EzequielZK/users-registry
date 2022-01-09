let feedbackModalRef = null;

export function setFeedbackModalRef(ref) {
  feedbackModalRef = ref;
}

function successModal(
  text,
) {
  if (!feedbackModalRef) {
    return;
  }

  feedbackModalRef.setModalProps(text, 'success');
}

export function closeModal() {
  feedbackModalRef.close();
}

export default { successModal };
