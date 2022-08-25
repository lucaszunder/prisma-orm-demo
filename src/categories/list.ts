import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categorie = await prisma.categories.findMany()
  console.log(categorie)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })