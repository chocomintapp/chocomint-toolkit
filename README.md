# chocomint-toolkit

This is chocomint toolkit repository

## Coding rule

### editorconfig

- must place this .editconfig in project root

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = false
max_line_length = 120
indent_size = 2
```

### eslint

- base
  - @chocomintapp/eslint-config-chocomint-base
- react
  - @chocomintapp/eslint-config-chocomint-react
- nest
  - @chocomintapp/eslint-config-chocomint-nest

### precommit

- must lint commit by commitlint
- must place this editconfig.json in project root

```
{
  "extends": ["@commitlint/config-conventional"]
}

```

- format check by prettier
