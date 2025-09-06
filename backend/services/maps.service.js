const axios = require('axios');

// Get coordinates from Nominatim
async function getAddressCordinates(address) {
  try {
    const url = `https://nominatim.openstreetmap.org/search`;
    const response = await axios.get(url, {
      params: {
        q: address,
        format: 'json',
        limit: 1
      },
     

    });
    axios.defaults.headers.common['User-Agent'] = 'uber-clone chetan@test.com';

    if (response.data.length === 0) {
      throw new Error(`No coordinates found for ${address}`);
    }

    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    throw new Error('Unable to fetch coordinates');
  }
}

// Get distance & time from OSRM
async function getDistanceAndTime(origin, destination) {
  try {
    // 1. Get origin coordinates
    const originCoords = await getAddressCordinates(origin);

    // 2. Get destination coordinates
    const destinationCoords = await getAddressCordinates(destination);

    // 3. Call OSRM API
    const url = `http://router.project-osrm.org/route/v1/driving/${originCoords.lon},${originCoords.lat};${destinationCoords.lon},${destinationCoords.lat}?overview=false`;

    const response = await axios.get(url);

    if (response.data.code !== 'Ok') {
      throw new Error('No route found');
    }

    const route = response.data.routes[0];

    // 4. Convert duration into human-readable format
    const seconds = Math.round(route.duration);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    const formattedDuration =
      days > 0 ? `${days} day ${remainingHours} hours` : `${hours} hours`;

    // 5. Format response
    return {
      distance: {
        text: `${(route.distance / 1000).toFixed(1)} km`,
        value: Math.round(route.distance)
      },
      duration: {
        text: formattedDuration,
        value: seconds
      },
      status: "OK"
    };
  } catch (err) {
    console.error(err);
    throw new Error('Unable to fetch distance and time');
  }
}

module.exports = {
  getAddressCordinates,
  getDistanceAndTime
};
