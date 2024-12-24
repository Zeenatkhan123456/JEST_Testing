
import searchParams from "./url.js";

test("Test your url", () => {
    let url = "https://example.com?foo=1&bar=2";

  expect(searchParams(url, "bar")).toBe("2");
});
