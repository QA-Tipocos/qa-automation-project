# Task 01

## Goals

### Step 1: Create a `.gitignore` for Files We Don't Want To Be Pushed To GitHub

Creating a `.gitignore` file is essential for keeping unnecessary files out of version control. By listing patterns of files and directories in `.gitignore`, we prevent them from being committed to the repository. This is useful because it helps:

- **Reduce clutter** in the repository by avoiding files that aren't essential, like local environment settings.
- **Improve security** by excluding sensitive information, such as credentials or API keys.
- **Ensure consistency** by excluding OS- or editor-specific files that may vary across different development environments.

To get started, create a `.gitignore` file in the root directory of the project and list any files or folders you don’t want to push to GitHub.

Follow these instructions: <https://docs.github.com/pt/get-started/getting-started-with-git/ignoring-files>

Folders/Files we don't want in gitub:

- node_modules/
- test-results/
- .env.\*

### Step 2: Remove node_modules Locally and Stage the Deletion

You need to remove node_modules from Git tracking to delete it from the remote repository. Use the following commands to do this:

```bash
git rm -r --cached node_modules
```

Commit the deletion of node_modules:

```bash
git commit -m "chore: remove node_modules folder"
git push origin main
```

After these steps, node_modules should be removed from your GitHub repository and will no longer be tracked or uploaded in future commits.
