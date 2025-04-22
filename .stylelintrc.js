module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  rules: {
    "selector-class-pattern": null,
    // Turn off the import-notation rule completely:
    "import-notation": null,
    "declaration-property-value-no-unknown": null,
    "declaration-property-value-disallowed-list": null,
    "color-named": null,
  },
};
