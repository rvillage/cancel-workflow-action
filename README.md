# Cancel workflow action

This action cancels the current workflow

## Inputs

### `github-token`

**Required** The token with access to your repository.

## Example usage

```yml
uses: rvillage/cancel-workflow-action@v0.1
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
```
