const puppeteer = require("puppeteer");
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

// e2e Tests

test("should create an element with text and correct class", async () => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ['--window-size=1920,1080']
	});
	const page = await browser.newPage();
	await page.goto(
		"file:///Users/rustamkolumbayev/Desktop/My%20Projects/Testing/index.html"
	);
	await page.click("input#name");
	await page.type("input#name", "Rustam");
	await page.click("input#age");
	await page.type("input#age", "23");
	await page.click("#btnAddUser");
	const finalText = await page.$eval(".user-item", (el) => el.textContent);
	expect(finalText).toBe("Rustam (23 years old)");
}, 10000);


