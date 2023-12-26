import { db } from "@/utils/mysql";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const query =
      "select link, name, price, app_product.id " +
      " from app_product " +
      "inner join app_productimage " +
      "on app_product.id = app_productimage.product_id";
    // "select * from app_product";
    try {
      const response = await db.query(query);
      await db.end();
      const data = [];
      for (let i = 0; i < (await response.length); i++) {
        let index = data.findIndex((item) => item.id === response[i].id);
        if (index >= 0) {
          if (typeof data.findIndex === "string") {
            let link = data[index].link;
            data[index].link = [link];
          } else {
            data[index].link.push(response[i].link);
          }
        } else {
          data.push(response[i]);
        }
      }
      res.status(200).json({ res: data });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

export default handler;
