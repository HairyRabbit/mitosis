import { componentToLiquid } from '../generators/liquid';
import { parse } from '../parse';
const basic = require('./data/basic.raw');
const inputBlock = require('./data/blocks/input.raw');
const selectBlock = require('./data/blocks/select.raw');
const formBlock = require('./data/blocks/form.raw');
const submitButtonBlock = require('./data/blocks/submit-button.raw');

describe('Liquid', () => {
  test('Basic', () => {
    const json = parse(basic);
    const output = componentToLiquid(json);
    expect(output).toMatchSnapshot();
  });

  test('Input block', () => {
    const json = parse(inputBlock);
    const output = componentToLiquid(json);
    expect(output).toMatchSnapshot();
  });

  test('Submit button block', () => {
    const json = parse(submitButtonBlock);
    const output = componentToLiquid(json);
    expect(output).toMatchSnapshot();
  });

  test('Select block', () => {
    const json = parse(selectBlock);
    const output = componentToLiquid(json);
    expect(output).toMatchSnapshot();
  });
  
  test('Form block', () => {
    const json = parse(formBlock);
    const output = componentToLiquid(json);
    expect(output).toMatchSnapshot();
  });
});
