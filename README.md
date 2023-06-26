

# Git Bisect Practice

This repository is created for practicing the use of `git bisect` to find a bug in a codebase. The code in this repository intentionally contains a bug that needs to be identified using `git bisect`.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/git-bisect-practice.git
   ```

2. Open the project in your preferred code editor.

3. Familiarize yourself with the codebase and the bug that needs to be identified.

## Usage

1. Start the `git bisect` process by running the following command:
   ```
   git bisect start
   ```

2. Identify a commit where the bug didn't exist. You can use `git log --oneline` to view the commit history and find a suitable commit. Copy the commit hash of that commit. Press `Ctrl + C` OR `q` OR `Esc` key followed by `:q` to return you to the command prompt


3. Mark the current commit as bad by running the following command:
   ```
   git bisect bad
   ```

4. Mark the commit you identified in step 2 as good by running the following command (replace `<commit-hash>` with the actual commit hash):
   ```
   git bisect good <commit-hash>
   ```

5. Git will automatically checkout a commit in between the good and bad commits. Test the code to determine if the bug exists in that commit.

6. If the bug exists in the checked-out commit, mark it as bad by running:
   ```
   git bisect bad
   ```

7. If the bug doesn't exist in the checked-out commit, mark it as good by running:
   ```
   git bisect good
   ```

8. Repeat steps 5-7 until `git bisect` identifies the commit that introduced the bug. Git will perform a binary search through the commit history, automatically checking out commits for you to test.

9. Once `git bisect` identifies the bad commit, it will display the commit hash and additional information. You can use `git show <commit-hash>` to view the changes made in that commit and understand what caused the bug.

10. Analyze the changes made in the bad commit to identify the bug and fix it accordingly.

11. End the `git bisect` process by running the following command:
    ```
    git bisect reset
    ```

12. Continue practicing `git bisect` with other bugs or revert the codebase to its original state.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
