export const ActionFactory = type => ({
  type,
  create: payload => ({ type, payload }),
})
