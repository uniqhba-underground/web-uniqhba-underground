import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent, data }) => {
  await parent()
  const { isExist, ourEvent, ourEventParticipants } = data
  return {
    isExist, ourEvent, ourEventParticipants
  }
}