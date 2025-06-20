describe('E2E: API Workflow', () => {
  it('should successfully call the /add endpoint of the running server', () => {
    // cy.request hace una petición HTTP real al baseUrl configurado
    cy.request({
      method: 'POST',
      url: '/add',
      body: {
        a: 25,
        b: 15
      }
    }).then((response) => {
      // Verificamos que el servidor respondió correctamente
      expect(response.status).to.eq(200);
      expect(response.body.result).to.eq(40);
    });
  });

  it('should successfully call the /subtract endpoint of the running server', () => {
    // cy.request hace una petición HTTP real al baseUrl configurado
    cy.request({
      method: 'POST',
      url: '/subtract',
      body: {
        a: 25,
        b: 15
      }
    }).then((response) => {
      // Verificamos que el servidor respondió correctamente
      expect(response.status).to.eq(200);
      expect(response.body.result).to.eq(10);
    });
  });

  it('should get a 400 error for bad data from the running server', () => {
    cy.request({
      method: 'POST',
      url: '/add',
      body: {
        a: 'veinticinco', // Dato incorrecto
        b: 15
      },
      failOnStatusCode: false // Le decimos a Cypress que no falle si el status no es 2xx
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Inputs must be numbers');
    });
  });
});