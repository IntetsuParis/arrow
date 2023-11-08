// import styles from "./RandomKeys.module.css"
import { useAppSelector } from "../../../../app/hooks"

import { TypographyHeader } from "../../../UI"

import RandomArrows from "./Components/RandomArrows"

import WelcomeText from "./Components/WelcomeText"

export interface IRandromKeysProps {
  isTimerActive: boolean
}

const RandromKeys: React.FC<IRandromKeysProps> = (props) => {
  const { isTimerActive } = props

  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandromKeys
