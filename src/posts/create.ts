import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Teste",
      author:{
        connect: {
            id: 1
        }
      },
      categorie: {
        connect: {
            id: 1
        }
      },
      content: "Lorem Ipsum",
      published: true,
    },
  })
  console.log(post)
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