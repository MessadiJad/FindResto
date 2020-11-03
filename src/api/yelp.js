import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer AYInkoKMknxKkh4YhDu7O2NmWL1nCWFcFyxonfA42BN7Vrg1tDzCZCmSvz3MCZo07q9UhXRTGBTHMO-uKf29oC6XdUEGUlx275YfEF6NpoMX0rx4WaFTC4VmgVL8XnYx'
    }
});