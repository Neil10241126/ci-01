module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080'],
      startServerCommand: 'pnpm run start',
      numberOfRuns: 3
    },
    asserts: {
      assertions: {
        'categories:performance': ['warn', {'minScore': 1}],
        'categories:accessibility': ['error', {'minScore': 1}]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
