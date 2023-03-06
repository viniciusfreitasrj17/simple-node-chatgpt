# Simple CLI to use ChatGPT with Node.js

## CLI example

### Requirements

- node in version >= 18

### Pre

```sh
echo "OPENAI_API_KEY=\"sk-TODO\"" > .env # your key of chatgpt in https://platform.openai.com/account/api-keys
npm install
chmod +x index.js
```

### Using

```sh
./index.js who born first, the chicken or the egg\?
```

### Create Cli customer in PATH

```sh
echo "export OPENAI_API_KEY=\"sk-TODO\"" >> ~/.bashrc # for bash, ~/.zshrc for zsh
source ~/.bashrc # for bash, ~/.zshrc for zsh
sudo ln -s /path/of/clone/index.js /usr/bin/chatgpt
```

#### Using Cli customer in PATH in anywhere

```sh
chatgpt who born first, the chicken or the egg\?
```
