import Amazon from '../lib/utils/Img/Amazon_logo logo.png'
import Astro from '../lib/utils/Img/astro.png'
import Dell from '../lib/utils/Img/Dell logo.png'
import Gith from '../lib/utils/Img/github.png'
import Microsoft from '../lib/utils/Img/microsoft logo.png'

type Logo = {
  [key: string]: string;
}

export const logos: Logo[] = [
  {Amazon: Amazon},
  {Astro: Astro},
  {Dell: Dell},
  {Gith: Gith},
  {Microsoft: Microsoft}
]