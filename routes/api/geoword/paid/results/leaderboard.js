import getLeaderboard from '../../../../../database/geoword/paid/results/get-leaderboard.js';

import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const { packetName } = req.query;
  const leaderboard = await getLeaderboard({ packetName });
  res.json({ leaderboard });
});

export default router;
