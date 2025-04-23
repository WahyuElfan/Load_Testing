import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 10 }, // Ramp-up to 10000 users in 3600s
        { duration: '20s', target: 10 }, // Stay at 10000 users
        { duration: '10s', target: 0 },  // Ramp-down to 0 users
    ]
}

export default function () {
    let res = http.get('https://reqres.in/api/unknown');
      console.log()

     check(res, {
        'is status 200': (r) => r.status === 200,
      });

    sleep (1);
};