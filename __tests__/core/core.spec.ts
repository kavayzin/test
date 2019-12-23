import { EmailsEditor } from '../../src';
import { createElement, IVNode, render } from '../../src/utils';

function constrictFormOptions() {
  const rootEl = document.createElement('div');
  return {
    rootEl,
    buttons: []
  };
}

describe('EmailForm', () => {
  it('add emails', () => {
    const form = new EmailsEditor(constrictFormOptions());
    const emailsString = 'john@miro.com hhh@hh.tu, hhh@hh.tu';
    form.addEmail(emailsString);
    expect(form.getEmails()).toEqual(['john@miro.com', 'hhh@hh.tu']);
  });

  it('add wrong strings', () => {
    const form = new EmailsEditor(constrictFormOptions());
    const emails = ['john@miro.com', 'qwe'];
    const emailsString = emails.join(' ');
    form.addEmail(emailsString);
    expect(form.getEmails()).toEqual(['john@miro.com']);
  });

  it('remove emails', () => {
    const form = new EmailsEditor(constrictFormOptions());
    const emails = ['john@miro.com', 'hhh@hh.tu'];
    const emailsString = emails.join(' ');
    form.addEmail(emailsString);
    form.removeEmail('hhh@hh.tu');
    expect(form.getEmails()).toEqual(['john@miro.com']);
  });
});

describe('Utils.createElement', () => {
  it('simple div', () => {
    const createElementResult = createElement('div', null);
    const expectedResult: IVNode = {
      type: 'div',
      props: null,
      children: []
    };
    expect(createElementResult).toEqual(expectedResult);
  });

  it('wrapped h1', () => {
    const createElementResult = createElement('div', { className: 'className'}, createElement('h1', null));
    const expectedResult: IVNode = {
      type: 'div',
      props: {
        className: 'className'
      },
      children: [
        {
          type: 'h1',
          props: null,
          children: []
        }
      ]
    };
    expect(createElementResult).toEqual(expectedResult);
  });

  it('div with text', () => {
    const createElementResult = createElement('div', null, 'Hello');
    const expectedResult: IVNode = {
      type: 'div',
      props: null,
      children: [
        'Hello'
      ]
    };
    expect(createElementResult).toEqual(expectedResult);
  });

  it('wrapped h1', () => {
    const createElementResult = createElement('div', { className: 'className'}, createElement('h1', null));
    const expectedResult: IVNode = {
      type: 'div',
      props: {
        className: 'className'
      },
      children: [
        {
          type: 'h1',
          props: null,
          children: []
        }
      ]
    };
    expect(createElementResult).toEqual(expectedResult);
  });
});

describe('Utils.render', () => {
  it('simple div', () => {
    const vNodeFowRender: IVNode = {
      type: 'h1',
      props: {},
      children: []
    };
    const renderResult = render(vNodeFowRender, {});
    const expextedResult = document.createElement('h1');
    expect(renderResult).toEqual(expextedResult);
  });

  it('div with text', () => {
    const vNodeForRender: IVNode = {
      type: 'div',
      props: null,
      children: ['Hello']
    };
    const renderResult = render(vNodeForRender, {});
    const expectedResult = document.createElement('div');
    expectedResult.append('Hello');
    expect(renderResult).toEqual(expectedResult)
  });
});

