import { Instance } from "mobx-state-tree"
import { ScheduleLineModelBase } from "./ScheduleLineModel.base"

/* The TypeScript type of an instance of ScheduleLineModel */
export interface ScheduleLineModelType extends Instance<typeof ScheduleLineModel.Type> {}

/* A graphql query fragment builders for ScheduleLineModel */
export { selectFromScheduleLine, scheduleLineModelPrimitives, ScheduleLineModelSelector } from "./ScheduleLineModel.base"

/**
 * ScheduleLineModel
 */
export const ScheduleLineModel = ScheduleLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
