const util = require("util");
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats").default;

function Main(cnf, deps) {
  const { _ } = deps;

  const compile = _.memoize(schema => {
    const ajv = new Ajv();
    addFormats(ajv);
    return ajv.compile(schema);
  });

  /**
   * 将函数处理为自动校验参数合法性
   */
  const auto = (fn, schema, errorFn, extra) => {
    if (!Array.isArray(schema)) {
      throw Error(`方法参数定义必须是一个数组 ${util.format(schema)}`);
    }

    const validators = schema.map(compile);

    return (...args) => {
      for (let i = 0; i < validators.length; i += 1) {
        const valid = validators[i](args[i]);
        if (!valid) {
          throw errorFn(i + 1, validators[i].errors, args[i], extra);
        }
      }
      return fn(...args);
    };
  };

  /**
   * 检测数据是否符合 schema 设定
   */
  const validate = (schema, data) => {
    const validator = compile(schema);
    const valid = validator(data);
    if (valid) return true;
    throw validator.errors;
  };

  return Object.freeze({ auto, validate });
}

Main.Deps = ["_"];

module.exports = Main;
