const { generateText, checkAndGenerate } = require("./util");

//unit tests
test("should output name and age", () => {
	const text = generateText("Rustam", 23);
	expect(text).toBe("Rustam (23 years old)");
	const text2 = generateText("Ana", 29);
	expect(text2).toBe("Ana (29 years old)");
});

test("should output data-less text", () => {
	const text = generateText("", null);
	expect(text).toBe(" (null years old)");
});

//integration tests

test("should generate a valid text output", () => {
	const text = checkAndGenerate("Rustam", 23);
	expect(text).toBe("Rustam (23 years old)");
});
