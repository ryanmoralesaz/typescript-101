const { getDefaultConfig } = require('@expo/metro-config');

module.exports = async function(env, argv) {
  const config = await require('@expo/webpack-config')(env, argv);

  // Configure for Codespaces
  if (config.devServer) {
    config.devServer.client = {
      webSocketURL: 'ws://0.0.0.0:0/ws',
    };
  }

  return config;
};