function checkEmail(emailString: string): Boolean {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я]{2,}))$/;
  return emailRegex.test(emailString);
}

function createElement(type: string, props: any, ...children: IVNode[] | string[]): IVNode {
  return {
    type,
    props,
    children
  } 
}

function render(vNode: IVNode, context: any): HTMLElement {
  const { type, props, children = [] } = vNode;
  const el = document.createElement(type);
  const propKeys = Object.keys(props || {});
  propKeys.forEach((propKey: string) => {
    if (propKey[0] === 'o' && propKey[1] === 'n') {
      const eventName = propKey.substring(2);
      el.addEventListener(eventName, (e: Event) => {
        props[propKey].call(context, e);
      });
    } else if (propKey === 'className') {
      const classes = props[propKey].split(' ');
      classes.forEach((className: string) => {
        el.classList.add(className);
      });
    } else if (propKey === 'ref') {
      const refName = props[propKey];
      context.$refs[refName] = el;
    }
  });

  children.forEach((child: IVNode | string | IVNode[] | string[]) => {
    if (Array.isArray(child)) {
      child.forEach((c: IVNode | string) => {
        if (typeof c === 'string') {
          el.append(c);
        } else {
          const renderedChild = render(c, context);
          el.append(renderedChild);
        }
      })
    } else {
      if (typeof child === 'string') {
        el.append(child);
      } else {
        const renderedChild = render(child, context);
        el.append(renderedChild);
      }
    }
  });

  return el;
}

interface IVNode {
  type: string
  props: any
  children: IVNode[] | string[]
}

export {
  createElement,
  render,
  IVNode,
  checkEmail,
}
