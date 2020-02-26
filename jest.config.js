module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>setupTests.js']
};
