const fs = require('fs');
const yaml = require('js-yaml');

describe('ci workflow', () => {
  test('has conditional skip for codex', () => {
    const text = fs.readFileSync('.github/workflows/ci.yml', 'utf8');
    const config = yaml.load(text);
    const steps = config.jobs.build.steps;
    const skipStep = steps.find(s => s.id === 'skip');
    expect(skipStep).toBeTruthy();
    const testStep = steps.find(s => s.run && s.run.includes('npm test'));
    expect(testStep.if).toBe("steps.skip.outputs.skip != 'true'");
  });
});
