import styles from "./WelcomeText.module.css"

import stylesCommon from "../../RandomKeys.module.css"

import loader from "./img/loader.svg"

import { TypographyText } from "../../../../../UI"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loading..." />
        </span>
      </div>
    )
  }

  return <TypographyText> Press "Play" to start the game !</TypographyText>
}

export default WelcomeText
