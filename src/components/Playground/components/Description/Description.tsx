import React from "react"
import { TypographyHeader, TypographyText } from "../../../UI"

export default function Description() {
  return (
    <div>
      <TypographyHeader>↑↓→← Arrow-game description</TypographyHeader>
      <TypographyText>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </TypographyText>
      <TypographyText>
        After three consecutive successful hits - game won, after three errors -
        lost.
      </TypographyText>
    </div>
  )
}
