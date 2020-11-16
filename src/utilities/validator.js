export default {
  validProps: ["name", "email", "password", "agreedToTermsAndConditions"],

  validate: function(propName, input) {
    if (input === null) return false;
    if (!this.validProps.includes(propName)) return false;

    if (propName === "name" || propName === "parentFullName") {
      return this.validateProp.name(input);
    }
    if (propName === "email") {
      return this.validateProp.email(input);
    }
    if (propName === "password") {
      return this.validateProp.password(input);
    }
    if (propName === "agreedToTermsAndConditions") {
      return this.validateProp.agreed(input);
    }

    return false;
  },

  validateProp: {
    name: function(input) {
      if (input.length >= 2 && input.length <= 32) {
        return true;
      } else {
        return false;
      }
    },

    email: function(input) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* eslint-disable-line */
      return pattern.test(String(input).toLowerCase());
    },

    password: function(input) {
      if (input.length >= 14 && input.length <= 32) {
        return true;
      } else {
        return false;
      }
    },

    agreed: function(input) {
      if (typeof input === "boolean") {
        return true;
      } else {
        return false;
      }
    },
  },
};
