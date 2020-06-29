const core = require("@actions/core")
const github = require("@actions/github")

main().catch(handleError)

async function main() {
  const token = core.getInput("github-token")
  const octokit = github.getOctokit(token)
  const context = github.context

  const result = await octokit.actions.cancelWorkflowRun({
    ...context.repo,
    run_id: context.runId
  })

  core.setOutput("result", JSON.stringify(result))
}

function handleError(err) {
  core.setFailed(`Unhandled error: ${err}`)
}
