export type RootState = {
  [duckName: string]: object;
};

export interface ActionCreator<Payload> {
  (params: Payload): {
    type: string;
    payload: Payload;
  };
  actionType: string;
}

export type Selector<RT, OwnPropType> = (
  state: RootState,
  ownProp: OwnPropType
) => RT;
