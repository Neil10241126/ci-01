module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080'],
      startServerCommand: 'pnpm run start',
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
