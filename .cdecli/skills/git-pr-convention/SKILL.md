---
name: git-pr-convention
description: Standard Git pull request conventions for collaborative development
---

# Git Pull Request Convention

A standardized approach to creating and managing pull requests that improves code quality, review efficiency, and project history.

## PR Title Format

Use this format:
```
<type>(<scope>): <subject>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code refactoring (no feature/fix)
- `perf` - Performance improvement
- `docs` - Documentation only
- `style` - Code style changes (formatting, semicolons, etc.)
- `test` - Test additions/changes
- `chore` - Build/tooling/dependency changes
- `ci` - CI/CD configuration

**Scope:** Optional. The module/component affected (e.g., `auth`, `api`, `ui`)

**Subject:** Imperative mood, lowercase, no period. Max 50 chars.

### Examples
```
feat(auth): add oauth2 github integration
fix(api): resolve timeout on user endpoint
docs: update installation instructions
```

## PR Body Template

```markdown
## Description
Brief summary of changes and why they're needed.

## Type of Change
- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #123
Relates to #456

## How Has This Been Tested?
- Unit tests
- Integration tests
- Manual testing

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed changes
- [ ] Added/updated documentation
- [ ] Tests added/passing
- [ ] No new warnings generated
```

## Branch Naming

```
<type>/<scope>-<description>
```

Examples:
```
feat/auth-oauth-github
fix/api-timeout-issue
docs/readme-update
```

## Commit Message Guidelines

- One commit per logical change (squash if needed)
- Use past tense: "Added feature" not "Add feature"
- Reference issues: "Fixes #123"
- Keep messages descriptive but concise

## Review Checklist

**Before submitting:**
- [ ] Branch is up-to-date with main/develop
- [ ] All tests pass locally
- [ ] No merge conflicts
- [ ] Code follows conventions
- [ ] No debug code or console logs
- [ ] Documentation updated

**During review:**
- Respond to all comments
- Request changes if needed
- Keep discussion professional

## Merge Strategy

- **Linear history:** Use "Squash and merge" for feature branches
- **Preserve history:** Use "Create a merge commit" for release branches
- **Fast-forward:** Use when no merge commit needed

Delete branch after merge.
