import { CreateTestRendererParams } from "coral-framework/testHelpers";

import createTopLevel from "../create";

export default function create(params: CreateTestRendererParams) {
  return createTopLevel({
    ...params,
    initLocalState: (localRecord, source, environment) => {
      localRecord.setValue("ALL_COMMENTS", "commentsTab");
      if (params.initLocalState) {
        params.initLocalState(localRecord, source, environment);
      }
    },
  });
}
