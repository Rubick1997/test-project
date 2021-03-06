const { generateText } = require("./util");

//unit test
test("should output name and age", () => {
	const text = generateText("Rustam", 23);
    expect(text).toBe("Rustam (23 years old)");
});

test