import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCustomers = async ()=> {
    return await prisma.customer.findMany();
};

export const createCustomers = async (customerData)=> {
    return await prisma.customer.create({
        data: customerData,
    });
};

export const getCustomersById = async (id)=> {
    return await prisma.customer.findUnique({
        where: {id:parseInt(id)},
    });
};

export const updateCustomers = async (id, customerData)=> {
    return await prisma.customer.update({
        where: {id:parseInt(id)},
        data: customerData,
    });
};

export const deleteCustomers = async (id)=> {
    return await prisma.customer.delete({
        where: {id:parseInt(id)},
    });
};