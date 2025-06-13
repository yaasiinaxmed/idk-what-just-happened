# 🧠 Git Time Traveler - by YasinDev
![Badge](https://img.shields.io/badge/years-2010--2025-blue?style=flat-square)

> Hack the GitHub timeline. Fill your contribution graph with glorious green squares — from 2010 to 2025! 🟩🟩🟩

---

## 🚀 What is this?

A fun Node.js script that generates hundreds of Git commits **from the past** — randomly spread between **1970 and 2025**.  
Perfect for building a legendary GitHub contribution graph, experimenting with Git, or just for memes 😎

---

## 🧙 How It Works

- Uses [`simple-git`](https://github.com/steveukx/git-js) to commit changes
- Fake dates are generated using [`moment`](https://momentjs.com/) and [`random`](https://www.npmjs.com/package/random)
- ASCII terminal banner using [`figlet`](https://www.npmjs.com/package/figlet)
- Shell loop (`loop.sh`) keeps it running automatically
- Pushes every 500 commits, sleeps for 5s, and repeats 🔁

---

## 📦 Tech Stack

- Node.js
- `simple-git`
- `moment`
- `jsonfile`
- `random`
- `figlet`
- Bash (`loop.sh`)

---

## 🛠 Installation

```bash
git clone https://github.com/YOUR_USERNAME/git-time-traveler
cd git-time-traveler
npm install
````

---

## ▶️ Run It

To run the infinite commit loop:

``` 
chmod +x loop.sh
./loop.sh

```

Or run once:

```

node index.js
```

---

## 🔁 loop.sh (optional)

Here’s how the `loop.sh` script works:

```bash
#!/bin/bash

while true
do
  echo "Running index.js..."
  node index.js
  echo "Waiting 5 seconds before next run..."
  sleep 5
done
```

---

## 🎨 Contribution Graph Result

Eventually, your GitHub profile will show a contribution graph like this:

```
🟩🟩⬜️⬜️🟩🟩⬜️⬜️
⬜️🟩🟩⬜️⬜️⬜️⬜️⬜️
🟩⬜️🟩⬜️🟩🟩⬜️⬜️
```

> Green squares are power 💚

---

## 🤡 Why?

This project is for fun, memes, and learning Git internals.
Use it wisely and ethically — not to fake your real dev history.

---

## 🧑‍💻 Made by

**YasinDev**
→ [github.com/yaasiinaxmed](https://github.com/yaasiinaxmed)

---

## 📜 License

MIT – Free to use, remix, or modify. Just don’t blame me when your graph gets too green 🔥
