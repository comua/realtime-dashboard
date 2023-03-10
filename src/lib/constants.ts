export const COMPACT_NUMBER_FORMATTER = Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumSignificantDigits: 3,
})

export enum Metric {
  CableDiameter = 'cable-diameter',
  LineSpeed = 'line-speed',
  MotorRPM = 'motor-rpm',
}
