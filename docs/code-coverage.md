# Code Coverage with Qodana

This project is configured to use Jest for code coverage and integrate with Qodana for comprehensive code quality analysis.

## Setup Overview

### Testing Framework
- **Jest** with **React Testing Library** for testing React components
- **TypeScript** support via `ts-jest`
- **Next.js** integration via `next/jest`

### Coverage Configuration
- Coverage reports are generated in **LCOV format** (required by Qodana)
- Reports are saved to `.qodana/code-coverage/` directory
- Coverage includes all source files in `app/`, `components/`, `lib/`, `hooks/`, and `contexts/`

### Qodana Integration
- Uses **Qodana for JS 2025.2** linter
- **JsCoverageInspection** is enabled for code coverage analysis
- Coverage threshold is set to **50%** for all metrics

## Running Tests

### Local Development
```bash
# Run tests once
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage in watch mode
pnpm test:coverage:watch
```

### Coverage Reports
After running tests with coverage, you can find:
- **Text summary** in the terminal output
- **HTML report** in `.qodana/code-coverage/lcov-report/index.html`
- **LCOV file** in `.qodana/code-coverage/lcov.info` (used by Qodana)
- **JSON summary** in `.qodana/code-coverage/coverage-summary.json`

## CI/CD Integration

The GitHub Actions workflow automatically:
1. Installs dependencies with pnpm
2. Runs tests with coverage
3. Archives coverage data as artifacts
4. Runs Qodana scan with coverage analysis
5. Posts results as PR comments (when configured)

## Coverage Thresholds

Current global thresholds are set to **50%** for:
- **Statements**: 50%
- **Branches**: 50%
- **Functions**: 50%
- **Lines**: 50%

You can adjust these thresholds in `jest.config.js` based on your project's needs.

## Excluding Files from Coverage

Files are excluded from coverage analysis if they are:
- Configuration files (jest, next, tailwind, etc.)
- Test files themselves
- Documentation and inspiration directories
- Next.js layouts (often difficult to test meaningfully)
- Build artifacts and dependencies

## Viewing Coverage in IDEs

If you have JetBrains IDEs (WebStorm, IntelliJ IDEA, etc.), you can:
1. Link your project to Qodana Cloud
2. View coverage reports directly in the IDE
3. See line-by-line coverage highlighting

## Fresh Code Coverage

For pull requests, Qodana can analyze "fresh code" coverage - only the lines changed in the PR. This is automatically enabled when the GitHub workflow runs in PR mode.

## Troubleshooting

### Common Issues
1. **Tests failing**: Check that all mocks are properly configured in `jest.setup.js`
2. **Coverage not generated**: Ensure the `.qodana/code-coverage` directory is created
3. **Qodana not finding coverage**: Verify LCOV format is used and files are in the correct directory

### Coverage Too Low
If coverage is below thresholds:
1. Add more test cases for uncovered code paths
2. Remove excluded files that should be tested
3. Adjust thresholds if they're unrealistic for your project

## Files Involved

- `jest.config.js` - Jest configuration with coverage settings
- `jest.setup.js` - Test environment setup and mocks
- `qodana.yaml` - Qodana configuration with coverage inspection
- `.github/workflows/qodana_code_quality.yml` - CI/CD workflow
- `__tests__/` - Test files directory
- `package.json` - Scripts for running tests with coverage
