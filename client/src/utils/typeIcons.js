import colorless from '../assets/img/icons/colorless.png'
import darkness from '../assets/img/icons/darkness.png'
import dragon from '../assets/img/icons/dragon.png'
import fairy from '../assets/img/icons/fairy.png'
import fighting from '../assets/img/icons/fighting.png'
import fire from '../assets/img/icons/fire.png'
import grass from '../assets/img/icons/grass.png'
import lightning from '../assets/img/icons/lightning.png'
import metal from '../assets/img/icons/metal.png'
import psychic from '../assets/img/icons/psychic.png'
import water from '../assets/img/icons/water.png'

const typeIcons = (typeName) => {
  let img;

  switch (typeName) {
    case 'Colorless': {
      img = colorless;
      break;
    }
    case 'Darkness': {
      img = darkness;
      break;
    }
    case 'Dragon': {
      img = dragon;
      break;
    }
    case 'Fairy': {
      img = fairy;
      break;
    }
    case 'Fighting': {
      img = fighting;
      break;
    }
    case 'Fire': {
      img = fire;
      break;
    }
    case 'Grass': {
      img = grass;
      break;
    }
    case 'Lightning': {
      img = lightning;
      break;
    }
    case 'Metal': {
      img = metal;
      break;
    }
    case 'Psychic': {
      img = psychic;
      break;
    }
    case 'Water': {
      img = water;
      break;
    }
    default: {
      img = water;
      break;
    }
  }

  return img;
};

export default typeIcons