import { Router } from "express";
import { getCustomers, 
         createCustomersController, 
         getCustomer,
         updateCustomersController, 
         deleteCustomersController  
       } from  '../controllers/customerController.js';

const router = Router();
 
router.get("/customers", getCustomers);

router.post("/customers", createCustomersController);

router.get("/customers/:id", getCustomer);

router.patch("/customers/:id", updateCustomersController);

router.delete("/customers/:id", deleteCustomersController);

export default router;