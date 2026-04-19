import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
      status: 'ok',
          service: 'dialer-backend',
              timestamp: new Date().toISOString(),
                  version: '1.0.0',
                    });
                    });

                    app.get('/', (_req, res) => {
                      res.json({ message: 'Harex AI Dialer Backend' });
                      });

                      app.listen(PORT, () => {
                        console.log(`Dialer backend running on port ${PORT}`);
                        });
