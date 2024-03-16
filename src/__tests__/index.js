import postcss from 'postcss';
import plugin from '../index.js';

async function process(input, opts = {}) {
  return await postcss([plugin(opts)]).process(input, { from: undefined });
}

async function run(input, output, opts = {}) {
  let result = await process(input, opts);

  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

describe('postcss-switch', () => {
  it('Switch admin css styles', async () => {
    const input = `
      .card {
        padding: 12px;

        @switch admin {
          margin: 24px;
          color: #000;
        }

        @switch public {
          margin: 32px;
          color: #fff;
        }
      }
    `;

    const output = `
      .card {
        padding: 12px;
        margin: 24px;
        color: #000
      }
    `;

    await run(input, output, { switch: 'admin' });
  });

  it('Switch public css styles', async () => {
    const input = `
      .card {
        padding: 12px;

        @switch admin {
          margin: 24px;
          color: #000;
        }

        @switch public {
          margin: 32px;
          color: #fff;
        }
      }
    `;

    const output = `
      .card {
        padding: 12px;
        margin: 32px;
        color: #fff
      }
    `;

    await run(input, output, { switch: 'public' });
  });
});
