Cypress.Commands.add('logToConsole', (message) => {
  cy.task('log', message);
});

Cypress.Commands.add('authenticate', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/users/sign_in',
    body: {
      user: {
        email: 'john.doe@example.com',
        password: 'password123',
      },
    },
  }).then((response) => {
    const authData = JSON.stringify({
      authenticated: {
        ...response.body,
        authenticator: 'authenticator:devise',
      },
    });

    localStorage.setItem('ember_simple_auth-session', authData);
  });
});
