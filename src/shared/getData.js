const dump = require("./dump.json");

const loc = Object.keys(dump.locations)[0];
const raw = dump.locations[loc].values;

const labels = raw.map((e) => /([0-9]{2}:00)/.exec(e.datetimeStr)[0]);
const data = raw.map((e) => e.temp);

export { labels, data };
