import { Router } from 'express'

import HealthController from '../controllers/HealthController'
import UserController from '../controllers/UserController'

const router: Router = Router()

router.get('/health', HealthController.health)

router.get('/users', UserController.getUsers)

export default router
