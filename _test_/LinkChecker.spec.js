import { linkChecker } from "../src/client/js/linkChecker";
describe("Testing the regex URL validation functionality", () => {
    test('checking module', () => {
    expect(linkChecker('www.google.com')).toBe(true)
    expect(linkChecker('Any Thing Els')).toBe(false)
    });
})
