import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    scenarios: {
        normal_load: {
            executor: 'constant-vus',
            vus: 50,
            duration: '10s',
        },

        spike_testing:{
            executor: 'ramping-vus',
            startVus: 0,
            stages:[
                { duration:'15s', target:'100'},
                { duration: '10', target: 0}
            ],
        },

    },
};

let urls = ['https://reqres.in/api/users/2', 'https://reqres.in/api/unknown/2'];
console.log()

function normalLoad () {
  urls.forEach(url => {
    let res = http.get(url);
    check(res, { 'status is 200': (r) => r.status === 200 });

    sleep (1);
  });
}

// Function for spike testing
function spikeTest() {
    let url = urls[Math.floor(Math.random() * urls.length)]; //Take one of the URLs at random
    let res = http.get(url);
    
    check(res, { 'status is 200': (r) => r.status === 200 });

    sleep(1);
}

export default function () {
    if (__VU % 2 === 0) {
        normalLoad(); // Half of the VUs run normalLoad()
    } else {
        spikeTest(); // The other half runs spikeTest()
    }
}
