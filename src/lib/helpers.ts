import dayjs from 'dayjs'

export const formatSecondsAgo = (iso: string) => {
  const now = dayjs()
  const timestamp = dayjs(iso)

  const inSeconds = now.diff(timestamp, 'second')

  return inSeconds
}
