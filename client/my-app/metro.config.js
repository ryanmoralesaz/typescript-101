const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Force Metro to use polling for file changes
config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json'];
config.watchFolders = [__dirname];

// Export configuration
module.exports = config;