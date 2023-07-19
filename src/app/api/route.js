import Item from '../../../models/Item';
import data from '../../../utils/data';
import db from '../../../utils/db';

// const handler = async (req, res) => {
//   await db.connect();
  
//   await Item.deleteMany();
//   await Item.insertMany(data.items);
//   await db.disconnect();
//   res.send({ message: 'seeded successfully' });
// };
// export default handler;
export default async function handler(req, res) {
  await db.connect();
  
  await Item.deleteMany();
  await Item.insertMany(data.items);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
}