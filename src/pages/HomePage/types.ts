export interface EmployessItemState {
  id: number,
  username: string,
  email: string,
  position: string
}

export interface GetEmployessPayload {
  page: number,
  limit: number,
  sortBy: string,
  order: string,
}

export interface EmployessItemStatePayload {
  username: string,
  email: string,
  position: string
}
export interface EmployessState {
  data: Array<EmployessItemState>;
  page: number;
  totalPage: number;
  filter: GetEmployessPayload
}


export type HomeContainerState = EmployessState;