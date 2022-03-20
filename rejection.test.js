describe("rejections", () => {
    beforeAll(() => {
        process.actual().on('unhandledRejection', (err) => {
            // skip
        });    
    });
    it("unhandledRejection is caught", () => {
        new Promise((resolve, reject) => {
            reject("error");
        });
    });    
});

