export default defineEventHandler(async (_event) => {
  try {
    const { id, fileName } = await readBody(_event)
    
    await uploadModel.findByIdAndDelete(id)
    await useStorage().removeItem(`fs:${fileName}`)
    return 200
  } catch (err) {
    return createError({
      statusCode: 500,
      statusMessage: 'Une Erreur est survenue avec votre API !!!'
    })
  }
})
