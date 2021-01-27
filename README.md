# @domain.js/schema

[![Build status](https://travis-ci.com/domain-js/schema.svg?branch=master)](https://travis-ci.org/domain-js/schema)
[![codecov](https://codecov.io/gh/domain-js/schema/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/schema)

# Installation
<pre>npm i @domain.js/schema --save</pre>

# cnf
专有配置信息 `schema`

| 名称 | 类型 | 必填 | 默认值 | 描述 | 样例 |
| ---- | ---- | ---- | ------ | ---- | ---- |
| coerceTypes | boolean | `否` | `false` | 是否尝试转换类型 | true |
| useDefaults | boolean | `否` | `false` | 是否启用默认值 | true |
| removeAdditional | boolean | `否` | `false` | 是否删除未定义的数据，会修改元数据 | true |

[更多参考 Ajv 构造函数参数](https://ajv.js.org/docs/api.html#options)

# deps
<pre>无</pre>


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| auto | 封装一个函数，让其拥有自动执行参数格式校验的能力 | schema.auto(fn, jsonSchema, errorFn, extra) |
| validate | 验证一个数据是否与指定的 schema 设定匹配 | schema.validate(jsonSchema, data) |
