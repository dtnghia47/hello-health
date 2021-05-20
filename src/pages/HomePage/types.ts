// {
//   id: number,
//   username: string,
//   email: string,
//   position: string
// }
export interface EmployessState {
  data: Array<any>;
  [key: string]: any;
}


export type HomeContainerState = EmployessState;