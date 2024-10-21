import analysis from "../lib/utils/Img/analysis.png"
import design from "../lib/utils/Img/design.png"

type Service = {
  icon: string,
  title: string,
  text: string
}

export const services: Service[] = [
  {
    icon: analysis,
    title: "Data analysis with dashboard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    icon: design,
    title: "Modern and elegant design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]