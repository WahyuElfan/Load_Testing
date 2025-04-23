import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export let options = {
  vus: 50, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {
  let res = http.get('https://reqres.in/api/users');
  console.log()

  // Check if response status is 200
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1); // Pause for 1 second between requests
};
