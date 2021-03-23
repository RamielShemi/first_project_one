import { checkForName } from "../src/client/js/nameChecker"
test('checking module', () => {
    expect(checkForName).toBeInstanceOf(Function)
  })  
