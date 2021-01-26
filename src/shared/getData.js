const dump = require('./dump.json');


function getData() {
  console.log('in getData..');
  const loc = Object.keys(dump.locations)[0];
  const raw = dump.locations[loc].values;

  return {
    labels: raw.map((e) => /([0-9]{2}:00)/.exec(e.datetimeStr)[0]), // extract time from dateTimeStr
    data: raw.map((e) => e.temp),
  };
}
export default getData;
