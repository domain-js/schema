# @domain.js/schema

[![Build status](https://travis-ci.com/domain-js/schema.svg?branch=master)](https://travis-ci.org/domain-js/schema)
[![codecov](https://codecov.io/gh/domain-js/schema/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/schema)

# Installation
<pre>npm i @domain.js/schema --save</pre>

# cnf
<pre>无</pre>

# deps
| 模块名 | 别名 | 用到的方法 | 描述 |
| ------ | ---- | ---------- | ---- |
| _ | `无` | memoize | 利用 memoize 避免相同的 schema 多次执行 ajv.compile, 以内存换cpu, 提升效率 |


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| auto | 封装一个函数，让其拥有自动执行参数格式校验的能力 | schema.auto(fn, jsonSchema, errorFn, extra) |
| validate | 验证一个数据是否与指定的 schema 设定匹配 | schema.validate(jsonSchema, data) |
