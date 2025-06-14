const fs = require('fs');
const yaml = require('js-yaml');

describe('deploy workflow', () => {
  test('triggers on main branch push and deploys to gh-pages', () => {
    const text = fs.readFileSync('.github/workflows/deploy.yml', 'utf8');
    const config = yaml.load(text);
    const branches = config.on.push.branches;
    expect(branches).toContain('main');
    const uses = config.jobs.build.steps.map(s => s.uses).filter(Boolean);
    expect(uses).toContain('peaceiris/actions-gh-pages@v3');
    expect(config.permissions.contents).toBe('write');
  });
});
