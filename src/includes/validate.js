import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpace,
  email,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm), app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpace);
    defineRule("email", email);
    defineRule("password_mismatch", confirmed);
    defineRule("country_excluded", excluded);
    defineRule("tos", required);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} Field has not been filled`,
          min: `The ${ctx.field} Field  should contain more that 3 values`,
          max: `The ${ctx.field} Field should contain  less than 100 values `,
          alpha_spaces: `The ${ctx.field} Field should only contain alphanumber characters`,
          email: `The ${ctx.field} Field must be an email address`,
          password_mismatch: `The password doesn't match`,
          tos: `The ${ctx.field} Field should be selected`,
          country_excluded: `Due to restrictions ${ctx.field} Field is unavialable`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : "The Field is invalid";

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
    });
  },
};
