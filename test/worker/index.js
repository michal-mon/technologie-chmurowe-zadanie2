const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

//Obliczanie ciagu geometrycznego i limitowanie wspolczynnika k

function gscal(k) {
  if (k < 1 || k > 10){
    return 'ERROR';
  }
  else{
    return Math.pow(2, k);
  }
}

sub.on('message', (channel, k) => {
  redisClient.hset('kValues', k, [gscal(k), Date.now()].toString());
});
sub.subscribe('insert');
