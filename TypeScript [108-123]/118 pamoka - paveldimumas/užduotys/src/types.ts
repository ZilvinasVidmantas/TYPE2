export type Job = {
  id: string,
  title: string,
  pay: number,
  finished?: boolean,
  dateFinished?: Date,
}