describe("template spec", () => {
  it("file upload", () => {
    cy.get("#file-upload-item").click();
    cy.get("#file_upload").selectFile("cypress/fixtures/picture.jpg");
    cy.get('button[type="submit"]').click();
    cy.get("#file_upload_response").should(
      "contain",
      "You have successfully uploaded",
    );
  });
});
