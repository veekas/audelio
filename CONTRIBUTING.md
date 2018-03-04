# How to Contribute

## Mobile UI
- Hit Targets should measure at least 44 points x 44 points so they can be accurately tapped with a finger
- Use UI elements that are designed for touch gestures
- Text should be at least 11 points

## Linting

Audelio uses [Airbnb style guide](https://github.com/airbnb/javascript) for ESLint with a few exceptions:
  - Single arguments in arrow functions don't need parentheses (`"arrow-parens"`)
  - Parentheses followed by a new line (`"function-paren-newline"`) only errors for single lines of code
  - JSX files can end with .jsx or .js (`"react/jsx-filename-extension"`)

## Commit Messages

**NOTE:** It is easiest to have semantic commit messages if you commit using the `git cz` command

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header
of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted. A commit with this format is automatically created by the [`git revert`][git-revert] command.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change.

You can use `*` when the change affects more than a single scope.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
[reference GitHub issues that this commit closes][closing-issues].
