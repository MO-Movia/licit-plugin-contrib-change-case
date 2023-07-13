
# ChangeCase ProseMirror Plugin For Licit

It helps to convert the selected text to UpperCase, LowerCase, SentenceCase.

## Build

### Dependency

### Commands

- npm install

- npm pack

#### To use this in Licit

Include plugin in licit component

- import ChangeCase plugin


```

import { ChangeCasePlugin }  from  '@modusoperandi/licit-changecase';


const  plugins = [new  ChangeCasePlugin()]

ReactDOM.render(<Licit docID={0} plugins={plugins}/>)


```
