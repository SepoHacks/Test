const app = require('../app.js');

const port = app.port || 3000;

const checkServiceHealth = async (url, expectedMessage, errorMessage) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.message !== expectedMessage) {
      throw new Error(errorMessage);
    }

    console.log(`Passed: ${expectedMessage}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const runHealthChecks = async () => {
  await checkServiceHealth(`http://localhost:${port}/db`, 'DB connection is OK', 'Mysql is not working');
  await checkServiceHealth(`http://localhost:${port}/`, 'Hello to CI/CD', 'App is not working');
  process.exit(0);
};

runHealthChecks();
