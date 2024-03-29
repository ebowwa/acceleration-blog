i want to download a log of all my github repos commits
To download a log of all your GitHub repository's commits, you can use a combination of Git commands and the GitHub API. Here's a detailed guide on how to achieve this:

## Using Git Commands

Git provides a command called `git log` that allows you to view the commit history of your repository. You can use this command to export the commit history to a text file[4]. Here's how you can do it:

1. Open your terminal.
2. Navigate to your local repository using the `cd` command.
3. Run the following command to export the commit history to a text file:

```bash
git log > commits.txt
```

This command will create a file named `commits.txt` in your repository's directory, containing the commit history[4].

If you want to format the commit history in a more readable way, you can use the `--pretty` option with the `git log` command. For example, the following command will format each commit to display the commit hash, author, and commit message on a single line:

```bash
git log --pretty=format:"%h - %an, %ar : %s" > commits.txt
```

In this command, `%h` is the abbreviated commit hash, `%an` is the author's name, `%ar` is the author date (relative), and `%s` is the commit message[10].

## Using GitHub API

The GitHub API provides a way to retrieve the commit history of a repository programmatically. You can use the "List commits" endpoint to list the commits of a repository. You need to specify the owner and the repo name to get the commit history. The API also provides parameters for filtering the results, such as the branch, path, author, and more[2][5].

Here's an example of how you can use the GitHub API with `curl` to retrieve the commit history:

```bash
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/{owner}/{repo}/commits
```

Replace `{owner}` with the username of the repository's owner and `{repo}` with the name of the repository.

This command will return a JSON response containing the commit history. You can redirect this output to a file to save it:

```bash
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/{owner}/{repo}/commits > commits.json
```

This command will create a file named `commits.json` containing the commit history in JSON format.

Please note that the GitHub API has rate limits. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour. If you authenticate your request with a personal access token, the rate limit increases to 5000 requests per hour[2].

## Downloading Workflow Run Logs

If you're using GitHub Actions and want to download the logs of your workflow runs, you can use the GitHub CLI's `gh run download` command. This command allows you to download the artifacts generated by a GitHub Actions workflow run[9].

Here's an example of how you can use this command:

```bash
gh run download {run-id}
```

Replace `{run-id}` with the ID of the workflow run you want to download the logs from. This command will download the logs and extract them into separate directories based on the artifact name[9].

Please note that you need to have the GitHub CLI installed on your machine to use this command. If you don't have it installed, you can download it from the [official GitHub CLI website](https://cli.github.com/).

Remember, these methods will only provide you with the commit history. If you want to download the entire repository, including all files and their history, you can use the `git clone` command[3][6].

Citations:
[1] https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs
[2] https://docs.github.com/en/rest/commits/commits
[3] https://www.reddit.com/r/git/comments/bo4268/download_every_commit_from_a_github_project/?rdt=60407
[4] https://stackoverflow.com/questions/10330425/how-do-i-export-a-git-log-to-a-text-file
[5] https://stackoverflow.com/questions/9179828/github-api-retrieve-all-commits-for-all-branches-for-a-repo
[6] https://stackoverflow.com/questions/31683756/is-there-a-way-to-download-the-full-history-from-github
[7] https://www.warp.dev/terminus/git-commit-history
[8] https://docs.github.com/en/rest/commits
[9] https://cli.github.com/manual/gh_run_download
[10] https://git-scm.com/docs/git-log
[11] https://github.com/orgs/community/discussions/52023
[12] https://cli.github.com/manual/gh_release_download
[13] https://askubuntu.com/questions/939830/how-to-download-a-github-repo-as-zip-using-command-line
[14] https://www.youtube.com/watch?v=b0W7SHHDc28
[15] https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise
[16] https://www.atlassian.com/git/tutorials/syncing/git-fetch
[17] https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28
[18] https://cli.github.com/manual/gh_search_commits
[19] https://www.earthdatascience.org/workshops/intro-version-control-git/basic-git-commands/
[20] https://github.com/orgs/community/discussions/34881
[21] https://code.visualstudio.com/docs/sourcecontrol/intro-to-git
[22] https://docs.gitlab.com/ee/api/commits.html
