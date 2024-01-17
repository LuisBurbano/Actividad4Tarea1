document.addEventListener("DOMContentLoaded", function () {
  class FormValidator {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.elements = this.form.elements;

      const submitButton = this.form.querySelector('button[type="button"]');
      if (submitButton) {
        submitButton.addEventListener("click", () => {
          this.validate();
        });
      }
    }

    validate() {
      let isValid = true;

      for (let i = 0; i < this.elements.length; i++) {
        if (!this.elements[i].checkValidity()) {
          isValid = false;
          this.showValidationError(this.elements[i]);
        } else {
          this.hideValidationError(this.elements[i]);
        }
      }

      if (isValid) {
        this.onSubmitSuccess();
      }
    }

    showValidationError(element) {
      element.classList.add("is-invalid");
      const parentFormGroup = element.closest(".form-group");
      const invalidFeedback = parentFormGroup
        ? parentFormGroup.querySelector(".invalid-feedback")
        : null;

      if (invalidFeedback) {
        invalidFeedback.style.display = "block";
      }
    }

    hideValidationError(element) {
      element.classList.remove("is-invalid");
      const parentFormGroup = element.closest(".form-group");
      const invalidFeedback = parentFormGroup
        ? parentFormGroup.querySelector(".invalid-feedback")
        : null;

      if (invalidFeedback) {
        invalidFeedback.style.display = "none";
      }
    }

    onSubmitSuccess() {
      alert("¡Formulario enviado exitosamente!\nGracias por tu mensaje.");
    }
  }

  // Uso de la clase
  const myFormValidator = new FormValidator("myForm");

  myFormValidator.form.addEventListener("submitButton", function (event) {
    event.preventDefault();
    myFormValidator.validate();
  });
});
