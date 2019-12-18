import { EmailsEditor } from '../../src';

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
