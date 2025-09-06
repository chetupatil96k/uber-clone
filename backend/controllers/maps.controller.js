const  mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');
const axios = require('axios');






module.exports.getCoordinates = async (req, res,next) => { 

     const errors = validationResult(req);
     if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
     }







    const { address } = req.query;

    try{
        const coordinates = await mapService.getAddressCordinates(address);
        res.status(200).json(coordinates);

    } catch(error){
        res.status(404).json({ message: 'Coordinates not found' });
    }
}

module.exports.getDistanceAndTime = async (req, res, next) => {


    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
           return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceAndTime(origin, destination);
        res.status(200).json(distanceTime);

    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res) => {
    const { input } = req.query;
    if (!input || input.length < 3) {
      return res.status(400).json({ message: "Input must be ≥3 chars" });
    }
  
    const url = `https://nominatim.openstreetmap.org/search`;
    const response = await axios.get(url, {
      params: { q: input, format: "json", limit: 5 },
      headers: {
        "User-Agent": "my-app/1.0 (your-email@example.com)",
        "Accept-Language": "en"
      }
    });
  
    const data = response.data;
    const predictions = data.map(item => {
      const desc = item.display_name;
      const lower = desc.toLowerCase(), term = input.toLowerCase();
      const idx = lower.indexOf(term);
      const main = desc.split(",")[0];
  
      return {
        description: desc,
        matched_substrings: idx >= 0 ? [{ length: input.length, offset: idx }] : [],
        terms: desc.split(",").map((t, i) => ({
          offset: i === 0 ? 0 : desc.split(",")[0].length + i,
          value: t.trim()
        })),
        structured_formatting: {
          main_text: main,
          secondary_text: desc.split(",").slice(1).join(", ").trim(),
          main_text_matched_substrings: idx >= 0 && main.toLowerCase().includes(term)
            ? [{ length: input.length, offset: main.toLowerCase().indexOf(term) }]
            : []
        },
        place_id: `osm-${item.osm_id || Math.random().toString(36).substr(2,9)}`,
        types: ["geocode"]
      };
    });
  
    res.json({ predictions, status: data.length ? "OK" : "ZERO_RESULTS" });
  };