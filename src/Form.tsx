import {
  checkEmail
} from './utils';

import {
  IEventBus,
  EventBus,
} from './EventBus';

const emailSeparatorRegex = /[, ]/;

class EmailForm {
  $refs: any;
  $event: IEventBus
  options: IFormOptions
  emails: Map<string, IEmailItem>

  constructor(options: IFormOptions) {
    if (!(this instanceof EmailForm)) {
      return new EmailForm(options);
    }
    this.$refs = {};
    this.$event = new EventBus();
    this.options = options;
    this.emails = new Map();
    this.render();
  }

  on(eventName: string, callback: Function) {
    this.$event.on(eventName, callback);
  }

  off(eventName: string, callback: Function) {
    this.$event.off(eventName, callback);
  }

  createElement(type: string, props: any = {}, ...children: HTMLElement[]): HTMLElement {
    if (!props) {
      props = {};
    }
    const el = document.createElement(type);
    const propKeys = Object.keys(props);
    propKeys.forEach((propKey: string) => {
      if (propKey[0] === 'o' && propKey[1] === 'n') {
        const eventName = propKey.substring(2);
        el.addEventListener(eventName, (e: Event) => {
          props[propKey].call(this, e);
        });
      } else if (propKey === 'className') {
        const classes = props[propKey].split(' ');
        classes.forEach((className: string) => {
          el.classList.add(className);
        });
      } else if (propKey === 'ref') {
        const refName = props[propKey];
        this.$refs[refName] = el;
      }
    });

    children.forEach((child: HTMLElement | HTMLElement[]) => {
      if (Array.isArray(child)) {
        child.forEach((c: HTMLElement) => {
          el.append(c);
        })
      } else {
        el.append(child);
      }
    });

    return el;
  }

  onBlurTextInput(e: FocusEvent) {
    const target = e.target as HTMLInputElement;
    const emailString = target.value;
    this.addEmail(emailString);
  }

  addEmail(string: string) {
    const { emailsEditorInnerEL, emailsEditorInputWrapperEl } = this.$refs;
    const { emails } = this;
    let changesMade = false;
    string
      .split(emailSeparatorRegex)
      .forEach((emailString: string) => {
        if (!emailString || emails.get(emailString)) { return; }
        const emailItem = this.prepareEmail(emailString);
        this.emails.set(emailString, emailItem);
        emailsEditorInnerEL.insertBefore(emailItem.el, emailsEditorInputWrapperEl);
        changesMade = true;
      });
    if (changesMade) {
      this.$event.emit('onEmailListChanged', this.getEmails());
    }
  }

  removeEmail(string: string) {
    const { emailsEditorInnerEL } = this.$refs;
    const { emails } = this;
    let changesMade = false;
    string
      .split(emailSeparatorRegex)
      .forEach((emailString: string) => {
        const emailItem = emails.get(emailString);
        if (!emailString || !emailItem) { return; }
        emailsEditorInnerEL.removeChild(emailItem.el);
        emails.delete(emailString);
        changesMade = true;
      });
      if (changesMade) {
        this.$event.emit('onEmailListChanged', this.getEmails());
      }
  }

  prepareEmail(emailString: string): IEmailItem {
    const self = this;
    const status = checkEmail(emailString) ? EmailStatuses.CORRECT : EmailStatuses.WRONG;
    const result: IEmailItem = {
      id: Symbol(),
      status,
      value: emailString
    };
    const itemModifierClass = status === EmailStatuses.CORRECT ? 'emails-editor__item_correct' : 'emails-editor__item_wrong';
    const textModifierClass = status === EmailStatuses.CORRECT ? 'emails-editor__item-inner-text_correct' : 'emails-editor__item-inner-text_wrong';
    const el = (
      <div className={`emails-editor__item ${itemModifierClass}`}>
        <div className={`emails-editor__item-inner-text ${textModifierClass}`}>{emailString}</div>
        <div className="emails-editor__item-remove-button" onclick={() => {this.onEmailBlockRemoveButtonClick(result)}}></div>
      </div>
    );
    result.el = el;
    return result
  }

  onEmailBlockRemoveButtonClick(emailItem: IEmailItem) {
    this.removeEmail(emailItem.value);
  }

  getEmails(): string[] {
    const result = [];
    this.emails.forEach((emailItem: IEmailItem) => {
      if (emailItem.status === EmailStatuses.CORRECT) {
        result.push(emailItem.value);
      }
    });
    return result;
  }

  onEmailsEditorClick() {
    this.$refs.emailsEditorInputEl.focus();
  }

  onEmailsEditorInputBlur() {
    const { emailsEditorInputEl } = this.$refs;
    const value = emailsEditorInputEl.value;
    this.clearEmailsInput();
    this.showEmailsEditorPlaceholder();
    this.addEmail(value);
  }

  onEmailsEditorInputKeyDown(e: InputEvent) {
    const { emailsEditorInputEl, emailsEditorInputInnerEL } = this.$refs;
    const value = emailsEditorInputEl.value;
    emailsEditorInputInnerEL.innerText = value;
    if (value) {
      if (e.inputType === 'insertText') {
        this.hideEmailsEditorPlaceholder();
      } else if (e.inputType === 'insertFromPaste') {
        this.addEmail(value);
        this.clearEmailsInput();
      }
    } else {
      this.showEmailsEditorPlaceholder();
    }
  }

  onEmailsEditorInputKeyUp(e: KeyboardEvent) {
    const { emailsEditorInputEl } = this.$refs;
    const value = emailsEditorInputEl.value;
    const availableCodes = ['Enter', 'NumpadEnter', 'Comma', 'Space'];
    if (availableCodes.indexOf(e.code) > -1 && value) {
      this.clearEmailsInput();
      this.addEmail(value);
      emailsEditorInputEl.focus();
    }
  }

  hideEmailsEditorPlaceholder() {
    const { emailsEditorInputPlaceholder } = this.$refs;
    emailsEditorInputPlaceholder.style.display = 'none';
  }

  showEmailsEditorPlaceholder() {
    const { emailsEditorInputPlaceholder } = this.$refs;
    emailsEditorInputPlaceholder.style.display = '';
  }

  clearEmailsInput() {
    const { emailsEditorInputEl, emailsEditorInputInnerEL } = this.$refs;
    emailsEditorInputEl.value = '';
    emailsEditorInputInnerEL.innerText = '';
  }

  render() {
    const self = this;
    const { rootEl, buttons } = this.options;
    rootEl.innerText = '';

    const buttonsElements = buttons.map((buttonOption: IButtonOption) => {
      return (
        <div
          className='button-list__item'
          onclick={buttonOption.onclick}
        >{buttonOption.text}</div>
      )
    });

    const result = (
      <div className="email-modal">
        <div className="email-modal__content">
            <div className="email-modal__title">
                Share <b>Board name</b> with others
            </div>
            <div className="emails-editor" onclick={this.onEmailsEditorClick}>
                <div ref='emailsEditorInnerEL' className="emails-editor__inner">
                  <div ref='emailsEditorInputWrapperEl' className="emails-editor__input">
                    <div ref='emailsEditorInputPlaceholder' className="emails-editor__input-placeholder">add more people…</div>
                    <div ref='emailsEditorInputInnerEL' className="emails-editor__input-inner"></div>
                    <input
                      ref='emailsEditorInputEl'
                      type="text"
                      oninput={this.onEmailsEditorInputKeyDown}
                      onkeyup={this.onEmailsEditorInputKeyUp}
                      onblur={this.onEmailsEditorInputBlur}
                    />
                  </div>
                </div>
            </div>
        </div>
        <div className="email-modal__footer">
            <div className="button-list">
              {buttonsElements}
            </div>
        </div>
      </div>
    );

    this.options.rootEl.append(result);
  }
}

interface IFormOptions {
  rootEl: HTMLElement,
  buttons: IButtonOption[]
}

interface IButtonOption {
  text: string,
  onclick: (e: MouseEvent) => void,
}

interface IEmailItem {
  id: Symbol
  status: EmailStatuses
  value: string,
  el?: HTMLElement
}

enum EmailStatuses {
  CORRECT = 'correct',
  WRONG = 'wrong',
}

export {
  EmailForm,
  IFormOptions,
  checkEmail,
}
