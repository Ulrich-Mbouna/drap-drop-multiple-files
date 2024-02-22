export default defineEventHandler(async (_event) => {
  try {
    const files = await uploadModel.find()

    if (!files) {
      return createError({
      statusCode: 400,
      statusMessage:  "Files are empty"
    })
    }

    return files
  } catch (err) {
    return createError({
      statusCode: 500,
      statusMessage:  "Something went wrong with your Api"
    })
  }
})
