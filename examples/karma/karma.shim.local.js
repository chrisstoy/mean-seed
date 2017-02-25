require('./karma.shim.common.js');

var specPath = '../app/modules/core'; // process.env.SPEC_PATH;

requireAll(require.context(specPath, true, /\.spec\.(js|ts)$/));

function requireAll(requireContext) {
  return requireContext.keys().forEach(requireContext);
}
