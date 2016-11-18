import Reflux from 'reflux';
import RefluxPromise from 'reflux-promise';

import Q from 'q';
Reflux.use(RefluxPromise(Q.Promise));


window.log = console.log;