import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
import figlet from "figlet";

// ANSI styles
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const bold = (text) => `\x1b[1m${text}\x1b[0m`;
const blink = (text) => `\x1b[5m${text}\x1b[0m`;
const divider = green("=".repeat(50));
const path = "./data.json";

// Show banner
const printBanner = () => {
  console.clear();
  console.log(green(figlet.textSync("YasinDev")));
  console.log(bold(green("💀 Starting Git Timeline Hacking...")));
  console.log(divider);
};

// Make 100 commits
const makeCommits = (n, callback) => {
    if (n === 0) {
      console.log(green(bold("\n✔ All commits done! Pushing...")));
      return simpleGit().push().then(callback);
    }
  
    // Random year from 2010 to 2025
    const year = random.int(2010, 2025);
    const week = random.int(0, 51);
    const day = random.int(0, 6);
  
    // Construct the commit date
    const date = moment()
      .year(year)
      .startOf("year")
      .add(week, "weeks")
      .add(day, "days")
      .hour(random.int(9, 17)) // working hours
      .minute(random.int(0, 59))
      .second(random.int(0, 59))
      .format();
  
    const data = { date };
  
    console.log(green("📅 Committing at: ") + bold(date));
  
    jsonfile.writeFile(path, data, () => {
      simpleGit().add([path]).commit(date, { "--date": date }, () =>
        makeCommits(n - 1, callback)
      );
    });
  };  

// Main run function
const run = () => {
  printBanner();
  makeCommits(600, () => {
    console.log(divider);
    console.log(blink(green("💾 Done. Sleeping 5 seconds before next round...")));
    setTimeout(run, 5000); // Repeat every 5s
  });
};

run();
