import { ActionFactory } from "../../../utils"

export const actions = {
  increment: ActionFactory("CALENDAR_INCREMENT"),
  decrement: ActionFactory("CALENDAR_DECREMENT"),
}
