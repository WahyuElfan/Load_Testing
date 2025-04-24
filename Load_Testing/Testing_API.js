import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  thresholds: {
    http_req_duration: ['p(95)<500'], // SLA: 95% request done < 500ms
  },
  vus: 50, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {

   // Send a GET request to the URL and add the query parameter 'page=1'
  const res = http.get('https://reqres.in/api/users', {param : { page: 1}});

  console.log('status code = ${res.status}')

  // Check if response status is 200
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1); // Pause for 1 second between requests
};
