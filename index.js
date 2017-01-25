/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-chartist',

  included: function included(app, parentAddon) {
    var target = (parentAddon || app);

    var options = target.options['ember-cli-chartist'] || {};
    var chartistVendorPath = path.join('vendor', 'chartist', 'dist');
    var chartistNodePath = path.join('node_modules', 'chartist', 'dist');

    if (options.useCustomCSS) {
      target.options.sassOptions = target.options.sassOptions || {};
      target.options.sassOptions.includePaths = target.options.sassOptions.includePaths || [];

      target.options.sassOptions.includePaths.push(
        path.join(chartistNodePath, 'scss')
      );

      target.options.sassOptions.includePaths.push(
        path.join(chartistNodePath, 'scss', 'settings')
      );

    } else {
      target.import(path.join(chartistNodePath, 'chartist.min.css'));
    }

    app.import(path.join(chartistVendorPath, 'chartist.min.js'));
  }
};
