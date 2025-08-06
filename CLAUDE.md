## Development Workflow

- Use a TDD-style workflow, e.g. red, green, refactor. Run relevant tests regularly. When you are finished with all your changes, run the full automated test suite.
- Work outside in. Start with high level tests, like e2e or integration tests, then progressively define unit tests as needed for the next chunk of work.
- Supplement your TDD-workflow with click testing using the Playwright MCP. Use this for troubleshooting and before considering yourself done with a change.
- You do not need to run the dev server. This will already be running at http://localhost:5173/. If you would like to restart the server, ask me.

## Available tools

- Run the tests using `npm run test:run`