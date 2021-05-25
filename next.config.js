
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['suQCzt9rjPgWEK8TizCG19'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  