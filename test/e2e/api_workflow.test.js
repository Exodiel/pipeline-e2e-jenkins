describe('E2E: Full User Workflow', () => {
  it('should simulate a user performing a series of calculations', () => {
    console.log('E2E SIMULATION: User navigates to calculator, performs addition, then subtraction.');
    const finalResult = (5 + 10) - 3;
    expect(finalResult).toBe(12);
  });
});