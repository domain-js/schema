const _ = require("lodash");
const Schema = require("..");

describe("@domain.js/schema", () => {
  const schema = Schema({}, { _ });
  const errorFn = jest.fn(Error);

  describe("auto", () => {
    it("case1", () => {
      const fn = jest.fn(x => x);
      const fn1 = schema.auto(fn, [{ type: "string" }], errorFn, { foo: "bar" });
      expect(fn1("hello")).toBe("hello");

      expect(() => fn1(123)).toThrow("1");
      expect(errorFn.mock.calls.length).toBe(1);
      expect(errorFn.mock.calls.pop()).toEqual([
        1,
        [
          {
            dataPath: "",
            keyword: "type",
            message: "should be string",
            params: { type: "string" },
            schemaPath: "#/type"
          }
        ],
        123,
        { foo: "bar" }
      ]);
    });

    it("case2, schemas type isnt array", () => {
      const fn = jest.fn(x => x);
      expect(() => schema.auto(fn, { type: "string" }, errorFn, { foo: "bar" })).toThrow("参数");
    });
  });

  describe("validate", () => {
    it("case1", () => {
      expect(schema.validate({ type: "string" }, "hello")).toBe(true);
      expect(schema.validate({ type: "string" }, "")).toBe(true);
      expect(() => schema.validate({ type: "string" }, 123)).toThrow();
      expect(() => schema.validate({ type: "string" })).toThrow();
    });

    it("case2, format", () => {
      expect(schema.validate({ type: "string", format: "url" }, "https://xiongfei.me/")).toBe(true);
      expect(() => schema.validate({ type: "string", format: "url" }, "123")).toThrow();
    });
  });
});
