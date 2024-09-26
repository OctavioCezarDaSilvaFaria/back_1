import { getAllCustomers, 
         createCustomers, 
         getCustomersById, 
         updateCustomers, 
         deleteCustomers 
       } from '../services/customerService.js';

export const getCustomers = async(req, res) => {
    try {
        const customers = await getAllCustomers();
        res.json(customers)
    }
    catch(error) {
        res.status(500).json({
            error: "Erro ao buscar customers",
        });
    }
};

export const createCustomersController = async (req, res) => {
    try {
        const newCustomers = await createCustomers(req.body);
        res.status(201).json(newCustomers)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao criar novos customers",
        });
    }
};

export const getCustomer = async (req, res) => {
    try {
        const customers = await getCustomersById(req.params.id)
        if (customers) {
            res.json(customers)
        } else {
            res.status(500).json({
                error: "Customer não encontrado"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar customers",
        });
    }
};

export const updateCustomersController = async (req, res) => {
    try {
        const customers = await updateCustomers(req.params.id, req.body);
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar customer",
        });
    }
};

export const deleteCustomersController = async (req, res) => {
    try {
        await deleteCustomers(req.params.id);
        res.status(204).send();      
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao deletar customer",
        });
    }
};