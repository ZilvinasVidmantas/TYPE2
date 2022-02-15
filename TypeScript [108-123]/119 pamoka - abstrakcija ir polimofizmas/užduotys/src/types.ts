export type Job = {
  id: string,
  title: string,
  pay: number,
  finished?: boolean,
  payed?: boolean,
  dateFinished?: Date,
}

export interface IStrigifyable {
  toString: () => string,
}
