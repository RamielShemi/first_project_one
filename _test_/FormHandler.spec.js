
import { handleSubmit } from "../src/client/js/handleSubmit";
describe("Testing the submit functionality", () => {
      test('checking module', () => {
      expect(handleSubmit).toBeInstanceOf(Function)
      });
})
