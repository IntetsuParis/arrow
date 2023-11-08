import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          {" "}
          Поздравляем, вы победили !{" "}
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          {" "}
          Сожалеем, вы проиграли{" "}
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
