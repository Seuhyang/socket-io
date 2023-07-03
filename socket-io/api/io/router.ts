import express, { Request, Response, NextFunction } from 'express';
import { query, body, validationResult } from 'express-validator';
import { sendMessage } from './service';

const router = express.Router();

// const baseGetFields = [query('name').isString().optional()];
// const sendFields = [body('to').isString().notEmpty(), body('message').isString().notEmpty()];

router.get('/', [query('name').isString().optional()], (req: Request, res: Response, next: NextFunction) => {
    const name = req.query.name || '';
    return res.json({ result: `Hello World!! ${name}` });
});

router.post(
    '/send/message',
    [body('to').isString().notEmpty(), body('message').isString().notEmpty()],
    async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const to: string = req.body.to;
        const message: string = req.body.message;
        console.log('to :: ', to);
        console.log('message :: ', message);

        const result = await sendMessage(to, message);

        return res.json({ result });
    },
);

export default router;
