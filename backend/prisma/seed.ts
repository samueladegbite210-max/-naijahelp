import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const states = [["Abia", "AB"], ["Adamawa", "AD"], ["Akwa Ibom", "AK"], ["Anambra", "AN"], ["Bauchi", "BA"], ["Bayelsa", "BY"], ["Benue", "BE"], ["Borno", "BO"], ["Cross River", "CR"], ["Delta", "DE"], ["Ebonyi", "EB"], ["Edo", "ED"], ["Ekiti", "EK"], ["Enugu", "EN"], ["Gombe", "GO"], ["Imo", "IM"], ["Jigawa", "JI"], ["Kaduna", "KD"], ["Kano", "KN"], ["Katsina", "KT"], ["Kebbi", "KE"], ["Kogi", "KO"], ["Kwara", "KW"], ["Lagos", "LA"], ["Nasarawa", "NA"], ["Niger", "NI"], ["Ogun", "OG"], ["Ondo", "ON"], ["Osun", "OS"], ["Oyo", "OY"], ["Plateau", "PL"], ["Rivers", "RI"], ["Sokoto", "SO"], ["Taraba", "TA"], ["Yobe", "YO"], ["Zamfara", "ZA"], ["Federal Capital Territory", "FC"]];

const services = [
  ["Electrical", ["Electrical Repairs","Wiring & Installation"]],
  ["Plumbing", ["Plumbing Repairs","Water System Installation"]],
  ["AC & Cooling", ["AC Repair","AC Installation","Refrigerator Repair"]],
  ["Generator", ["Generator Repair","Generator Servicing"]],
  ["Phone & Electronics", ["Phone Repair","Laptop Repair","Electronics Repair"]],
  ["Mechanic", ["Car Diagnostics","Auto Repair","Car Electrical"]],
  ["Cleaning", ["Home Cleaning","Office Cleaning","Post-Construction Cleaning"]],
  ["Painting", ["House Painting","Commercial Painting"]],
  ["Carpentry", ["Furniture Repair","Custom Carpentry"]],
  ["Appliance Repair", ["Washing Machine Repair","Cooker Repair"]],
  ["Construction", ["Masonry","Tiling","Roofing"]],
  ["Technology", ["Web Development","Computer Setup","IT Support"]],
  ["Moving & Delivery", ["Moving Services","Local Delivery"]],
  ["Beauty & Personal", ["Barbing","Hair Styling","Makeup"]]
];

async function main() {
  if (process.env.SEED_DEMO !== "true") {
    console.log("SEED_DEMO is not true; loading nationwide reference data only.");
  }
  for (const [name, code] of states) {
    await prisma.state.upsert({ where:{code}, update:{name}, create:{name,code} });
  }

  for (const [categoryName, serviceNames] of services as [string,string[]][]) {
    const category = await prisma.category.upsert({
      where:{name:categoryName}, update:{}, create:{name:categoryName}
    });
    for (const serviceName of serviceNames) {
      await prisma.service.upsert({
        where:{categoryId_name:{categoryId:category.id,name:serviceName}},
        update:{}, create:{name:serviceName,categoryId:category.id}
      });
    }
  }

  if (process.env.SEED_DEMO === "true") {
    const passwordHash = await bcrypt.hash(process.env.DEMO_PASSWORD || "Demo12345!", 10);
    const customer = await prisma.user.upsert({
      where:{email:"customer@naijahelp.local"},
      update:{}, create:{email:"customer@naijahelp.local",passwordHash,role:"CUSTOMER",
        customer:{create:{fullName:"Demo Customer"}}}
    });

    const providerUser = await prisma.user.upsert({
      where:{email:"provider@naijahelp.local"},
      update:{}, create:{email:"provider@naijahelp.local",passwordHash,role:"PROVIDER",
        provider:{create:{businessName:"NaijaHelp Demo Services",verificationStatus:"VERIFIED"}}}
    });

    const admin = await prisma.user.upsert({
      where:{email:"admin@naijahelp.local"},
      update:{}, create:{email:"admin@naijahelp.local",passwordHash,role:"ADMIN"}
    });
    console.log({customer:customer.email, provider:providerUser.email, admin:admin.email});
  }
}

main().finally(()=>prisma.$disconnect());
