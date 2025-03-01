---
outline: deep
---

# Aether Runtime API Examples

::: tip Overview
This page demonstrates the usage of some of the runtime APIs in Aether. Functions in Aether are first-class citizens, implemented using tables and metatables, similar to Lua.
:::

## Function Declaration

::: tip Defining Functions
In Aether, functions are declared using the `function` keyword. Functions can be stored in variables, passed as arguments, and returned from other functions.
:::

```lua
function add(a, b)
    return a + b
end

print(add(2, 3)) -- Outputs: 5
```

## Anonymous Functions

::: tip Anonymous Functions
Aether supports anonymous functions, which can be assigned to variables or used inline.
:::

```lua
local multiply = function(x, y)
    return x * y
end

print(multiply(4, 5)) -- Outputs: 20
```

## Functions as First-Class Citizens

::: warning Best Practice
Functions can be stored in tables and manipulated dynamically. Organizing functions in tables helps improve code readability and maintainability.
:::

```lua
local mathOps = {
    add = function(a, b) return a + b end,
    subtract = function(a, b) return a - b end
}

print(mathOps.add(10, 5))    -- Outputs: 15
print(mathOps.subtract(10, 5)) -- Outputs: 5
```

## Higher-Order Functions

::: tip Higher-Order Functions
Functions can take other functions as arguments or return functions.
:::

```lua
function apply(func, a, b)
    return func(a, b)
end

print(apply(mathOps.add, 7, 3)) -- Outputs: 10
```

## Closures

::: warning Memory Usage
Closures allow functions to capture local variables, but excessive use can lead to high memory usage if variables are not properly released.
:::

```lua
function counter()
    local count = 0
    return function()
        count = count + 1
        return count
    end
end

local nextCount = counter()
print(nextCount()) -- Outputs: 1
print(nextCount()) -- Outputs: 2
```

## Metatables and Functions

::: danger Advanced Feature
Since functions are tables, metatables can be used to extend their behavior. Be careful when modifying metatables, as incorrect usage can lead to unexpected behavior.
:::

```lua
local function newFunc()
    local obj = {}
    setmetatable(obj, {
        __call = function(_, x) return x * x end
    })
    return obj
end

local square = newFunc()
print(square(4)) -- Outputs: 16
```

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

