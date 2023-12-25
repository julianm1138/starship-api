const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const starShips = {
  "CECStarships": {
    "Ebon Hawk": {
      "class": "Dynamic-class freighter",
      "role": "Light freighter",
      "image": "https://static.wikia.nocookie.net/starwarsredux/images/7/76/Dynamic-class_Light_Freighter.jpg/revision/latest?cb=20171017020523"
    },
    "CR90 Corvette": {
      "class": "Corvette",
      "role": "Multi-purpose capital ship",
      "image": "https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png/revision/latest?cb=20221006055135"
    },
    "CR70 Corvette": {
      "class": "Corvette",
      "role": "Smaller variant of CR90",
      "image": "https://static.wikia.nocookie.net/starwars/images/f/f5/SunderedHeart-RotS.jpg/revision/latest?cb=20111028234135"
    },
    "YT-1300 Light Freighter": {
      "class": "Light freighter",
      "role": "Modified freighter",
      "image": "https://static.wikia.nocookie.net/starwars/images/9/90/Millennium_Falcon_DICE.png/revision/latest?cb=20161022010825"
    },
    "YT-2400 Outrider": {
      "class": "Light freighter",
      "role": "Modified freighter",
      "image": "https://static.wikia.nocookie.net/starwars/images/0/08/YT-2400-SWESV.png/revision/latest?cb=20190615212745"
    },
    "VCX-100 Light Freighter": {
      "class": "Light freighter",
      "role": "Modified freighter",
      "image": "https://static.wikia.nocookie.net/starwars/images/f/f7/Ghost-RO.png/revision/latest?cb=20220430183550"
    },
    "YT-1930": {
      "class": "Freighter",
      "role": "Light freighter",
      "image": "https://static.wikia.nocookie.net/swse/images/a/a9/Corellian_YT-1930_Transport.jpg/revision/latest?cb=20200223210154"
    },
    "YT-2000": {
      "class": "Light freighter",
      "role": "Modified freighter",
      "image": "https://static.wikia.nocookie.net/starwars/images/b/b1/YT-2000.jpg/revision/latest?cb=20080415141803"
    },
    "YT-2400": {
      "class": "Light freighter",
      "role": "Freighter",
      "image": "https://static.wikia.nocookie.net/starwars/images/0/08/YT-2400-SWESV.png/revision/latest?cb=20190615212745"
    },
    "YT-1760": {
      "class": "Freighter",
      "role": "Light freighter",
      "image": "https://db4sgowjqfwig.cloudfront.net/assets/261487/RogueThrantaPaint.png?1384301426"
    }
  }
};

app.get('/starships/:name', (req, res) => {
  const starshipName = req.params.name;
  const starship = starShips.CECStarships[starshipName];

  if (starship) {
    res.json(starship);
  } else {
    res.status(404).json({ error: 'Starship not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
