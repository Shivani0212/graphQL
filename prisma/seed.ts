import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user.create({
        data:{
            name:"Shivani",
            messages:{
                create:[
                    {
                        body:"A Note For Shivani",
                    },
                    {
                        body:"Another note for Shivani",
                    },
                ],
            },
        },
    });
    await prisma.user.create({
        data:{
            name:"Ketki",
            messages:{
                create:[
                    {
                        body:"A Note For Ketki",
                    },
                    {
                        body:"Another note for Ketki",
                    },
                ],
            },
        },
    });
    await prisma.user.create({
        data:{
            name:"Manas",
            messages:{
                create:[
                    {
                        body:"A Note For Manas",
                    },
                    {
                        body:"Another note for Manas",
                    },
                ],
            },
        },
    });

}
main().then(()=>{
    console.log("Data seeded....");
});