import defaultImage from '../assets/img/default.png'

// Type's images
import colorless from '../assets/img/types/colorless.png'
import darkness from '../assets/img/types/darkness.png'
import dragon from '../assets/img/types/dragon.png'
import fairy from '../assets/img/types/fairy.png'
import fighting from '../assets/img/types/fighting.png'
import fire from '../assets/img/types/fire.png'
import grass from '../assets/img/types/grass.png'
import lightning from '../assets/img/types/lightning.png'
import metal from '../assets/img/types/metal.png'
import psychic from '../assets/img/types/psychic.png'
import water from '../assets/img/types/water.png'

// Sub Type's images
import basic from '../assets/img/subtypes/basic.png'
import breakType from '../assets/img/subtypes/break.png'
import ex from '../assets/img/subtypes/ex.png'
import gx from '../assets/img/subtypes/gx.png'
import item from '../assets/img/subtypes/item.png'
import legend from '../assets/img/subtypes/legend.png'
import levelUp from '../assets/img/subtypes/level-up.png'
import mega from '../assets/img/subtypes/mega.png'
import pokemonTool from '../assets/img/subtypes/pokemon-tool.png'
import restored from '../assets/img/subtypes/restored.png'
import rocketsSecretMachine from '../assets/img/subtypes/rockets-secret-machine.png'
import special from '../assets/img/subtypes/special.png'
import stadium from '../assets/img/subtypes/stadium.png'
import stage1 from '../assets/img/subtypes/stage-1.png'
import stage2 from '../assets/img/subtypes/stage-2.png'
import supporter from '../assets/img/subtypes/supporter.png'
import technicalMachine from '../assets/img/subtypes/technical-machine.png'

// Super Types
import energySupertype from '../assets/img/supertypes/energy-supertype.png'
import pokemonSupertype from '../assets/img/supertypes/pokemon-supertype.png'
import trainerSupertype from '../assets/img/supertypes/trainer-supertype.png'

const typeImage = (typeName) => {
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
    case 'EX': {
      img = ex;
      break;
    }
    case 'Special': {
      img = special;
      break;
    }
    case 'Restored': {
      img = restored;
      break;
    }
    case 'Level Up': {
      img = levelUp;
      break;
    }
    case 'MEGA': {
      img = mega;
      break;
    }
    case 'Technical Machine': {
      img = technicalMachine;
      break;
    }
    case 'Item': {
      img = item;
      break;
    }
    case 'Stadium': {
      img = stadium;
      break;
    }
    case 'Supporter': {
      img = supporter;
      break;
    }
    case 'Stage 1': {
      img = stage1;
      break;
    }
    case 'GX': {
      img = gx;
      break;
    }
    case 'Pokémon Tool': {
      img = pokemonTool;
      break;
    }
    case 'Basic': {
      img = basic;
      break;
    }
    case 'LEGEND': {
      img = legend;
      break;
    }
    case 'Stage 2': {
      img = stage2;
      break;
    }
    case 'BREAK': {
      img = breakType;
      break;
    }
    case 'Rocket\'s Secret Machine': {
      img = rocketsSecretMachine;
      break;
    }
    case 'Energy': {
      img = energySupertype;
      break;
    }
    case 'Pokémon': {
      img = pokemonSupertype;
      break;
    }
    case 'Trainer': {
      img = trainerSupertype;
      break;
    }
    default: {
      img = defaultImage;
      break;
    }
  }

  return img;
};

export default typeImage