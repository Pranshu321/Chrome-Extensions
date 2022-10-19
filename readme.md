# Chrome Extensions

### Manifest.json

- **manifest_version** : This is will tell on which version our extension will work , version of the chorme.

  - **name** : Name of the extension
  - **version**: version of the extension
  - **description** : about the extension
  - **icon** : different icon images 128 , 48 , 16.
  - **type of the extension** : This is will tell what is type of extension
    - **Browser Action** : These are the types of extensions which will work on every page or you can say work as a separate app in the browser onlclick.
    - **Page Action** : These are the extensions which will work on specific pages and manipulate or trigger any action on the page.

- **options_page** : We can add extra functionality or can added more options to the extensions by creating more pages.
- **background**: These are the pages or we say core functions pages which will be triggered for specific actions on page.

- **permissions** : In this we have to define are requirements or permissions which we want from chrome like tabs , contextMenus.
- **contextMenus :** These are the option which are shown when any action defined by extension is performed by the user.
