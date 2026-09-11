# Hello World

A few best practices worth keeping in mind while writing code.

## Naming
Use clear, descriptive names for variables, functions, and files. A name should
say what something is or does without needing a comment to explain it.

## Keep Functions Small
Each function should do one thing well. Small, focused functions are easier to
test, debug, and reuse.

## Comment the Why, Not the What
Well-written code explains itself. Reserve comments for non-obvious reasoning —
a workaround, a tricky edge case, or a constraint that isn't visible in the code.

## Consistent Formatting
Follow the existing style of the project (indentation, quotes, spacing). Use a
linter or formatter where available so style stays consistent across contributors.

## Version Control Hygiene
Commit small, logical changes with clear messages. Avoid bundling unrelated
changes into a single commit.

## Handle Errors Deliberately
Don't swallow errors silently. Validate inputs at boundaries and fail loudly
when something unexpected happens.

## Write Tests
Tests document expected behavior and catch regressions early. Cover the common
path and the edge cases that matter.

## Avoid Premature Optimization
Write clear, correct code first. Optimize only when you have evidence
(profiling, benchmarks) that a specific part is a bottleneck.

## Don't Repeat Yourself
When you see the same logic duplicated, extract it — but only once a real
pattern emerges, not before.

## Review Before You Ship
Read your own diff before opening a pull request. A quick self-review catches
typos, leftover debug code, and unclear naming.
