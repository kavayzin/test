## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - build javascript bundle,
+ `build:watch` - interactive watch mode to automatically build,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## HTML example

```html
<!doctype html>
<html>
 <head>
    <title>Example</title>
    <style>
       #emails-editor {
          width: 500px;
       }

       #emails-editor2 {
          width: 700px;
       }
    </style>
 </head>
 <body>
  <div id="emails-editor"></div>
  <div id="emails-editor2"></div>
   <script src="../dist/bundle.js"></script>
   <script>
      function generateEmail() {
         const randomString = Math.random().toString(36).substring(2, 15);
         return `${randomString}@miro.com`;
      }
      const IDs = ['emails-editor', 'emails-editor2'];
      IDs.forEach(id => {
         const el = document.getElementById(id);
         const options = {
            rootEl: el,
            buttons: [{
               text: 'Add email',
               onclick() {
                  this.addEmail(generateEmail());
               }
            }, {
               text: 'Get emails count',
               onclick() {
                  const emails = this.getEmails();
                  alert(emails.length);
               }
            }]
         }
         const form = new EmailsEditor(options);
         // subscribe to the event
         form.on('onEmailListChanged', (emails) => {
            console.log(emails);
         })
      });
   </script>
 </body>
</html>

```

## Methods 
Name                | Parameters                               | Info
------------------- | ---------------------------------------- | --------------------------------------------------------------------------
addEnail             |  string                                        | Splits the string and adds the resulting entities to the editor
removeEmail      |     string                                     | Splits the string and removes the resulting entities from the editor

## Events
Name            | Info
--------------- | --------------------------------------------------------------------------
onEmailListChanged             | A email list has been changed
