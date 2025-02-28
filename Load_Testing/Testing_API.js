import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');
  
  // Check if response status is 200
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1); // Pause for 1 second between requests
}
